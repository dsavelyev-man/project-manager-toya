import {INestApplication} from "@nestjs/common";
import * as cookieParser from 'cookie-parser';

const cookiesConfig = (app: INestApplication) => {
  app.use(cookieParser())
}

export default cookiesConfig