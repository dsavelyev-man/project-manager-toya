import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class NewPasswordDto {
  @ApiProperty({
    format: 'string',
    title: 'Password',
    description: 'Пароль',
  })
  @IsNotEmpty()
  @Length(6, 124)
  password: string;

  @ApiProperty({
    format: 'string',
    title: 'Repeat password',
    description: 'Должен быть идентичен password',
  })
  @IsNotEmpty()
  @Length(6, 124)
  repeatPassword: string;

  @ApiProperty({
    format: 'string',
    title: 'хэш созданный через POST /users/password/reset',
    description: 'приходит на почту хранится прямо в ссылке',
  })
  @IsNotEmpty()
  hash: string;

  @ApiProperty({
    format: 'string',
    title: 'почта полученная из ссылки',
    description: 'приходит на почту',
  })
  @IsNotEmpty()
  email: string;
}
