import { Get, Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { PrismaService } from '../prisma/prisma.service';
import { StorageController } from './storage.controller';

@Module({
  providers: [StorageService, PrismaService],
  exports: [StorageService],
  controllers: [StorageController],
})
export class StorageModule {}
