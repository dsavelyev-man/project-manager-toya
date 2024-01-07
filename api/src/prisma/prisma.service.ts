import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from 'shared';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  static prisma: PrismaService;

  constructor() {
    super();

    if (!PrismaService.prisma) {
      PrismaService.prisma = this;
    }

    return PrismaService.prisma;
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
