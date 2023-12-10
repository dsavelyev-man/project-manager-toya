import { INestApplication, ValidationPipe } from '@nestjs/common';

const classValidator = (app: INestApplication) => {
  app.useGlobalPipes(new ValidationPipe());
};

export default classValidator;
