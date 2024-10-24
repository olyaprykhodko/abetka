import { Injectable, UnauthorizedException } from '@nestjs/common';
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
      Logger.error('Token generation error:', error);
      throw new Error('Internal server error');
    }
  }

  verifyToken(token: string): { username: string; sub: number } | null {
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.verify(token);
      if (!decoded || !decoded.sub) {
        throw new UnauthorizedException('Invalid token payload');
      }
      return decoded;
    } catch (error) {
      Logger.error('Token verification error:', error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
