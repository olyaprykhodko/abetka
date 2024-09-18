import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';
import { Logger } from '@nestjs/common';

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: NestJwtService) {}

  async generateToken(user: User): Promise<string> {
    try {
      const payload = { username: user.username, sub: user.id };
      return this.jwtService.sign(payload);
    } catch (error) {
      console.error('JSON web-token generation error', error);
      throw new Error('Internal server error');
    }
  }

  verifyToken(token: string): any {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new Error(
        Logger.error(error) +
          'Ваша сесія вичерпана. Будь ласка, пройдіть аутентифікацію',
      );
    }
  }
}
