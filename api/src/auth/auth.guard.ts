import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { User } from 'database';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token: string | undefined = request.cookies['token'];

    if (!token) return false;

    const tokenData = this.authService.decodeJWTToken(token);

    if (!tokenData.id) return false;

    const user = (await this.usersService.findOne(
      parseInt(tokenData.id),
    )) as User;

    if (!user) return false;

    request.user = user;
    return true;
  }
}
