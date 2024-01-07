import { Injectable, OnModuleInit } from '@nestjs/common';
import { REST } from 'discord.js';

@Injectable()
export class DiscordService implements OnModuleInit {
  rest: REST;

  onModuleInit() {
    this.rest = new REST({ version: '10' }).setToken(process.env.DISCORD_KEY);
  }
}
