import { Injectable } from '@nestjs/common';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  createJWTToken(data: { email: string; id: number }): string {
    return sign(data, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 30,
    });
  }

  decodeJWTToken(token: string): JwtPayload {
    return verify(token, process.env.JWT_SECRET_KEY) as JwtPayload;
  }
}
