import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({
    format: 'string',
    title: 'Название доски',
  })
  @IsNotEmpty()
  @Length(2, 124)
  name: string;

  @ApiProperty({
    format: 'integer',
    title: 'id проекта',
  })
  @IsNotEmpty()
  projectId: number;
}
