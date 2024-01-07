import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { LinksModule } from '../users/links/links.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [AuthModule, UsersModule, LinksModule, BoardsModule],
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class ProjectsModule {}
