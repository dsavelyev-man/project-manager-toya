import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { AuthModule } from '../../auth/auth.module';
import { UsersModule } from '../../users/users.module';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [BoardsController],
  providers: [BoardsService, PrismaService],
})
export class BoardsModule {}
