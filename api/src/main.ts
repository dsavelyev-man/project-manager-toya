import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {config as envConfig} from "dotenv";
import * as path from "path";
import config from "./config";
import {Logger} from "@nestjs/common";

envConfig({
  path: path.join(process.cwd(), "..", ".env")
})

async function bootstrap() {
  console.log(process.env.WEB_URL)
  const app = await NestFactory.create(AppModule, {
  });

  app.enableCors({
    origin: [process.env.WEB_URL],
    credentials: true
  })

  app.setGlobalPrefix("api")

  config(app)

  await app.listen(process.env.API_PORT, () => {
    Logger.log(`Server started on http://localhost:${process.env.API_PORT}`)
  });
}
bootstrap();
