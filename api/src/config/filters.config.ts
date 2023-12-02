import {INestApplication} from "@nestjs/common";
import {PrismaFilter} from "../prisma/prisma.filter";

const filtersConfig = (app: INestApplication) => {
  app.useGlobalFilters(new PrismaFilter())
}

export default filtersConfig