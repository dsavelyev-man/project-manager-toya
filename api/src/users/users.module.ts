import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from '../auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';
import { MailModule } from '../mail/mail.module';
import { StorageModule } from '../storage/storage.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 1800000,
    }),
    forwardRef(() => AuthModule),
    MailModule,
    StorageModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
