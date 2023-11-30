import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as path from "path";
import {MailModule} from "./mail/mail.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: "/static",
      rootPath: path.join(process.cwd(), 'static'),
    }),
    UsersModule,
    AuthModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
