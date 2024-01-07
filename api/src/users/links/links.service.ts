import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from 'shared';
import { ClickLinkDto } from './dto/click-link.dto';

@Injectable()
export class LinksService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  async onModuleInit() {}

  async create(createLinkDto: CreateLinkDto, users: number[]) {
    return Promise.all(
      users.map(async (id) => {
        const user = await this.prisma.user.findFirstOrThrow({
          where: {
            id: id,
          },
        });

        return this.prisma.userLink.create({
          data: {
            name: createLinkDto.name,
            projectId: createLinkDto.projectId,
            userId: user.id,
          },
        });
      }),
    );
  }

  async click(clickLinkDto: ClickLinkDto, user: User) {
    const link = await this.prisma.userLink.findFirstOrThrow({
      where: {
        id: clickLinkDto.id,
        userId: user.id,
      },
    });

    return this.prisma.userLink.update({
      where: {
        id: clickLinkDto.id,
        userId: user.id,
      },
      data: {
        clicks: link.clicks++,
      },
    });
  }

  findAll(user: User) {
    return this.prisma.userLink.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        clicks: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} link`;
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}
