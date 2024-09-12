import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';
// import { AuthService } from '../auth.service';

@Module({
  imports: [
    NestJwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret_key',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
