import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import pagination, { PaginationQuery } from '../helpers/pagination';
import { PrismaService } from '../prisma/prisma.service';
import { User, PROJECT_ROLES } from 'shared';
import prismaExclude from '../helpers/prismaExclude';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto, user: User) {
    return this.prisma.project.create({
      data: {
        name: createProjectDto.name,
        members: {
          create: {
            whoAddedId: user.id,
            userId: user.id,
            role: PROJECT_ROLES.OWNER,
          },
        },
      },
    });
  }

  findAll(paginationParams: PaginationQuery, user: User) {
    return this.prisma.project.findMany({
      ...pagination.paginationByPage(
        paginationParams.page,
        paginationParams.take,
      ),
      where: {
        members: {
          some: {
            userId: user.id,
          },
        },
      },

      include: {
        members: {
          where: {
            role: PROJECT_ROLES.OWNER,
          },

          include: {
            user: {
              select: prismaExclude('User', UsersService.EXCLUDE_FIELDS),
            },
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.project.findFirstOrThrow({
      where: {
        id,
      },

      include: {
        members: {
          where: {
            role: PROJECT_ROLES.OWNER,
          },

          include: {
            user: {
              select: prismaExclude('User', UsersService.EXCLUDE_FIELDS),
            },
          },
        },
      },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
