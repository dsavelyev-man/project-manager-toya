import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { User } from 'shared';

@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  async create(createBoardDto: CreateBoardDto, user: User) {
    await this.prisma.projectMember.findFirstOrThrow({
      where: {
        userId: user.id,
        projectId: createBoardDto.projectId,
      },
    });

    return this.prisma.projectBoard.create({
      data: {
        name: createBoardDto.name,
        projectId: createBoardDto.projectId,
      },
    });
  }
}
