import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
import { MailModule } from './mail/mail.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { StorageModule } from './storage/storage.module';
import { ProjectsModule } from './projects/projects.module';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [
    StorageModule,
    PrometheusModule.register(),
    ServeStaticModule.forRoot({
      serveRoot: '/static',
      rootPath: path.join(process.cwd(), 'static'),
    }),
    UsersModule,
    AuthModule,
    MailModule,
    ProjectsModule,
    DiscordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
