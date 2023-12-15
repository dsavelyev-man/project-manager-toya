import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  Put,
  UseGuards,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationQuery } from '../helpers/pagination';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { NewPasswordDto } from './dto/new-password-dto';
import {
  MediaInterceptor,
  RequestWithMedia,
} from '../storage/media.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfigPng } from '../storage/multer.config';
import { Bucket } from '../storage/storage.buckets';
import { BUCKET } from 'shared';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({
    summary: 'создание сброса пароля по почте',
  })
  @UseGuards(AuthGuard)
  @Post('password/reset')
  async createResetPassword(@Req() req) {
    return !(await this.usersService.createResetPassword(req.user));
  }

  @ApiOperation({
    summary: 'сброс пароля',
  })
  @UseGuards(AuthGuard)
  @Patch('password/reset')
  async resetPassword(@Body() newPasswordDto: NewPasswordDto) {
    return this.usersService.resetPassword(newPasswordDto);
  }

  @Get()
  findAll(@Query() query: PaginationQuery) {
    return this.usersService.findAll({
      page: query.page,
      take: query.take,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Patch()
  @UseGuards(AuthGuard)
  updateCurrentUser(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user.id, updateUserDto);
  }

  @Put('current/avatar')
  @UseGuards(AuthGuard)
  @Bucket(BUCKET.images)
  @UseInterceptors(FileInterceptor('avatar', multerConfigPng), MediaInterceptor)
  updateCurrentUserAvatar(@Req() req: RequestWithMedia) {
    return this.usersService.updateAvatar(req.user.id, req.media);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
