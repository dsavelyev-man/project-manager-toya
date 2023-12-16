import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({
    format: 'string',
    title: 'Название проекта',
  })
  @IsNotEmpty()
  @Length(2, 124)
  name: string;
}
