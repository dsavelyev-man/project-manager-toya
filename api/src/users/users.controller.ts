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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationQuery } from '../helpers/pagination';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { NewPasswordDto } from './dto/new-password-dto';

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
