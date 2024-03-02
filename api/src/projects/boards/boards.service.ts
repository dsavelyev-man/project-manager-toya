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

  async getByProject(id: number, user: User) {
    return this.prisma.projectBoard.findFirstOrThrow({
      where: {
        projectId: id,
        project: {
          members: {
            some: {
              userId: user.id,
            },
          },
        },
      },
    });
  }

  async getById(id: number, user: User) {
    return this.prisma.projectBoard.findFirstOrThrow({
      where: {
        id: id,
        project: {
          members: {
            some: {
              userId: user.id,
            },
          },
        },
      },
    });
  }
}
