import {Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res, UseGuards} from '@nestjs/common';
import {ApiOperation} from "@nestjs/swagger";
import {SignInDto} from "./dto/sign-in.dto";
import {UsersService} from "../users/users.service";
import {AuthGuard} from "./auth.guard";
import exclude from "../helpers/exclude";
import {verify} from "../helpers/password";
import { Response } from "express";
import {AuthService} from "./auth.service";
import { ERRORS } from "database"

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) {
  }

  @ApiOperation({
    summary: 'авторизация пользователя через печенюху',
  })
  @Post()
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.usersService.findOneByEmail(signInDto.email);

    if (!(await verify(signInDto.password, user.password)))
      throw new HttpException(ERRORS.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);

    res.cookie(
      'token',
      this.authService.createJWTToken({ email: user.email, id: user.id }),
      {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        secure: true,
        sameSite: 'none',
      },
    );

    return exclude(user, UsersService.EXCLUDE_FIELDS);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Требует печенюху',
  })
  auth(@Req() req) {
    return req.user;
  }
}
