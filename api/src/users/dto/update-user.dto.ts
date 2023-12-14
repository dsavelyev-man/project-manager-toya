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
  @Length(2, 124)
  firstName: string;

  @ApiProperty({
    format: 'string',
    title: 'Фамилия',
  })
  @IsOptional()
  @Length(2, 124)
  lastName: string;

  @ApiProperty({
    format: 'string',
    title: 'Отчество',
  })
  @IsOptional()
  @Length(2, 124)
  surName: string;
}
