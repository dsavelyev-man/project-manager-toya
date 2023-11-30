import {ApiProperty} from "@nestjs/swagger";

export class SignInDto {
  @ApiProperty({
    format: "email",
    title: "Почта",
  })
  email: string

  @ApiProperty({
    format: 'string',
    title: 'Пароль',
  })
  password: string;

}