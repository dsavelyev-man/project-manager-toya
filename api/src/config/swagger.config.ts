import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

const swaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Project manager api')
    .setVersion('0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/documentation', app, document, {
    customCssUrl: "/static/swagger-ui.css"
  });
}

export default swaggerConfig