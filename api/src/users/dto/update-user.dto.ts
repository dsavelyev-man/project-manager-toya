import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, Length, IsOptional } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateUserDto {
  @ApiProperty({
    format: 'string',
    title: 'Имя',
  })
  @IsOptional()
  @Length(6, 124)
  firstName: string;
}
