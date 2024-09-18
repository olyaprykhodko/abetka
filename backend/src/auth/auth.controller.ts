import { Controller, Post, Body, Res } from '@nestjs/common';
import { LoginUserDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginUserDto, @Res() res: Response) {
    const token = await this.authService.loginUser(
      loginDto.username,
      loginDto.password,
    );
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ message: 'Login successful' });
  }

  @Post('register')
  async register(@Body() registerDto: RegisterUserDto, @Res() res: Response) {
    const { user, token } = await this.authService.registerUser(
      registerDto.username,
      registerDto.email,
      registerDto.password,
      registerDto.role,
    );

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({ message: 'Registration successful', user });
  }
}
