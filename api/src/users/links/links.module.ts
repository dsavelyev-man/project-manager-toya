import { forwardRef, Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersModule } from '../users.module';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [forwardRef(() => UsersModule), AuthModule],
  controllers: [LinksController],
  providers: [LinksService, PrismaService],
  exports: [LinksService],
})
export class LinksModule {}
