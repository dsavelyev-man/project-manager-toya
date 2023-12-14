import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Express, Request } from 'express';
import { StorageService } from './storage.service';
import { Media, User } from 'database';
import { Multer } from 'multer';
import { Reflector } from '@nestjs/core';
import { Bucket } from './storage.buckets';

export type RequestWithMedia = {
  media: Media | null;
  user: User;
} & Request;

@Injectable()
export class MediaInterceptor implements NestInterceptor {
  constructor(
    private mediaService: StorageService,
    private reflector: Reflector,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    if (request.file) {
      const file: Express.Multer.File = request.file;

      const bucket = this.reflector.get(Bucket, context.getHandler());

      request.media = await this.mediaService.upload(file, bucket);
    } else {
      request.media = null;
    }

    return next.handle();
  }
}
