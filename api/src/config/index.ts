import {INestApplication} from "@nestjs/common";
import swaggerConfig from "./swagger.config";

const config = <T,>(app: INestApplication<T>) => {
  const configs: ((app: INestApplication<T>) => void)[] = [
    swaggerConfig
  ]

  configs.forEach((fn) => fn(app))
}

export default config