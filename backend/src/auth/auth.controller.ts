import { Controller, Post, Get, Body, Res, Req } from '@nestjs/common';
import { LoginUserDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { Logger } from '@nestjs/common';

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
      // secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'strict',
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
      // secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'strict',
    });

    return res.status(201).json({ message: 'Registration successful', user });
  }

  @Get('user')
  async getUser(@Req() req: Request) {
    const token = req.cookies['jwt'];
    if (!token) return { isAuthenticated: false };

    try {
      const user = await this.authService.verifyToken(token);
      return { isAuthenticated: true, user };
    } catch (error) {
      Logger.error(error);
      return { isAuthenticated: false };
    }
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'strict',
    });

    return res.send({ message: 'Logged out successfully' });
  }
}
