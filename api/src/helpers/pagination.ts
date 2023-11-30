import { ApiProperty } from '@nestjs/swagger';

export const paginationByPage = (pageStr: string, takeStr: string = '20') => {
  const page = parseInt(pageStr);
  const take = parseInt(takeStr);

  return {
    skip: take * (page === 1 ? 0 : page),
    take,
  };
};

export class PaginationQuery {
  @ApiProperty({
    format: 'int32',
    title: 'Page',
    description: 'Номер страницы',
    default: 1,
  })
  page: string;

  @ApiProperty({
    format: 'int32',
    title: 'Take',
    description: 'сколько элементов взять из бд',
    default: 20,
  })
  take?: string;
}

export default {
  paginationByPage,
};
