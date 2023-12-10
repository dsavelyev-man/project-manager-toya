import { INestApplication } from '@nestjs/common';
import swaggerConfig from './swagger.config';
import cookiesConfig from './cookies.config';
import filtersConfig from './filters.config';
import classValidator from './classValidator';

const config = <T>(app: INestApplication<T>) => {
  const configs: ((app: INestApplication<T>) => void)[] = [
    swaggerConfig,
    cookiesConfig,
    filtersConfig,
    classValidator,
  ];

  configs.forEach((fn) => fn(app));
};

export default config;
