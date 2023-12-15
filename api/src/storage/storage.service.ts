import { Injectable } from '@nestjs/common';
import {
  CreateBucketCommand,
  GetObjectCommand,
  ListBucketsCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { PrismaService } from '../prisma/prisma.service';
import * as stream from 'stream';
import { BUCKET } from 'shared';
import { Upload } from '@aws-sdk/lib-storage';
import { extname } from 'path';

@Injectable()
export class StorageService {
  public client: S3Client;

  constructor(private prisma: PrismaService) {
    this.client = new S3Client({
      region: 'europe-main',
      credentials: {
        accessKeyId: process.env.MINIO_ACCESS_KEY,
        secretAccessKey: process.env.MINIO_SECRET_KEY,
      },
      forcePathStyle: true,
      apiVersion: 'v4',
      endpoint: `${process.env.MINIO_ENDPOINT}`,
    });

    this.getBuckets().then(async (output) => {
      for (const name in BUCKET) {
        if (!output.Buckets.find((bucket) => bucket.Name === name)) {
          await this.createBucket(name as BUCKET);
        }
      }
    });
  }

  getBuckets() {
    return this.client.send(new ListBucketsCommand({}));
  }

  createBucket(name: BUCKET) {
    return this.client.send(
      new CreateBucketCommand({
        Bucket: name,
      }),
    );
  }

  async getFileByFilename(bucket: BUCKET, filename: string) {
    const res = await this.client.send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: filename,
      }),
    );

    //у s3 чуть кривые типы
    //https://github.com/aws/aws-sdk-js-v3/issues/4720
    return res.Body as stream.Readable;
  }

  async upload(file: Express.Multer.File, bucket: BUCKET = BUCKET.images) {
    const filename = crypto.randomUUID() + extname(file.originalname);

    const parallelUploads3 = new Upload({
      client: this.client,
      params: {
        Bucket: 'images',
        Key: filename,
        Body: file.buffer,
      },
      queueSize: 4,
      partSize: 1024 * 1024 * 5,
      leavePartsOnError: false,
    });

    await parallelUploads3.done();

    return this.prisma.media.create({
      data: {
        filename,
        bucket,
      },
    });
  }
}
