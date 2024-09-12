import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginUserDto) {
    const token = await this.authService.loginUser(
      loginDto.username,
      loginDto.password,
    );
    return token;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterUserDto) {
    return this.authService.registerUser(
      registerDto.username,
      registerDto.email,
      registerDto.password,
      registerDto.role,
    );
  }
}
