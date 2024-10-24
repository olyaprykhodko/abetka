import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from './jwt/jwt.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Teacher } from 'src/teachers/teacher.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Teacher]), JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
