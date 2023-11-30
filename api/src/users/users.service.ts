import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ERRORS, User} from "database"
import {PrismaService} from "../prisma.service";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import {MailService} from "../mail/mail.service";
import {randomBytes} from "crypto";
import {NewPasswordDto} from "./dto/new-password-dto";
import pagination, {PaginationQuery} from "../helpers/pagination";
import prismaExclude from "../helpers/prismaExclude";
import {hash} from "../helpers/password";
import { Cache } from 'cache-manager';

@Injectable()
export class UsersService {
  public static EXCLUDE_FIELDS: (keyof User)[] = ['password'];

  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private mailService: MailService,
  ) {}

  getRandomCode() {
    const chars = [];

    for (let i = 1; i < 6; i++) {
      chars.push(Math.floor(Math.random() * 6));
    }

    return chars.join('');
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(paginationParams: PaginationQuery) {
    return this.prisma.user.findMany({
      ...pagination.paginationByPage(
        paginationParams.page,
        paginationParams.take,
      ),
      select: prismaExclude('User', UsersService.EXCLUDE_FIELDS),
    });
  }

  async findOne(id: number) {
    return this.prisma.user.findFirstOrThrow({
      where: {
        id,
      },
      select: prismaExclude('User', UsersService.EXCLUDE_FIELDS),
    });
  }

  //нужен для auth/sign-in. отдает пользователя вместе с паролем
  findOneByEmail(email: string) {
    return this.prisma.user.findFirstOrThrow({
      where: {
        email,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async createResetPassword(user: User) {
    const hash = randomBytes(20).toString('hex');

    await this.cacheManager.set(`reset:password:${user.email}`, hash);
    const link = process.env.WEB_URL + '/password/reset?token=' + hash;

    return this.mailService.send({
      to: user.email,
      templateData: {
        link,
      },
      text: `Ссылка для сброса пароля: ${link}`,
      subject: 'Сброс пароля. Quarzwerke Russia',
      template: '/reset-password.hbs',
    });
  }
  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async resetPassword(newPasswordDto: NewPasswordDto) {
    if (newPasswordDto.password !== newPasswordDto.repeatPassword)
      throw new HttpException(ERRORS.PASSWORD_MISMATCH, HttpStatus.BAD_GATEWAY);

    const hashCache = await this.cacheManager.get<string | undefined>(
      `reset:password:${newPasswordDto.email}`,
    );

    if (!hashCache)
      throw new HttpException(ERRORS.TIME_IS_UP, HttpStatus.NOT_ACCEPTABLE);
    if (newPasswordDto.hash !== hashCache)
      throw new HttpException(ERRORS.HASH_MISMATCH, HttpStatus.NOT_ACCEPTABLE);

    this.prisma.user.update({
      where: {
        email: newPasswordDto.email,
      },
      data: {
        password: await hash(newPasswordDto.password),
      },
    });
  }
}
