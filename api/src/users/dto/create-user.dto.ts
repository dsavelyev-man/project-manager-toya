import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, Length} from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    format: 'string',
    title: 'Почта',
  })
  @IsNotEmpty()
  @Length(6, 124)
  email: string

  @ApiProperty({
    format: 'string',
    title: 'Пароль',
  })
  @IsNotEmpty()
  @Length(6, 124)
  password: string
}
