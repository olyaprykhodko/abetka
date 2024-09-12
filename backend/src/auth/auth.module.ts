import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from './jwt/jwt.module';
// import { JwtStrategy } from './jwt/jwt.strategy';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User]), JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
