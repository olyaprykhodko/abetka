import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Res,
  Req,
  Param,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { Logger } from '@nestjs/common';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import { User } from 'src/users/user.model';

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

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'strict',
    });

    return res.send({ message: 'Logged out successfully' });
  }

  @Get('user')
  async getUser(@Req() req: Request) {
    const token = req.cookies['jwt'];
    if (!token) {
      return { isAuthenticated: false, user: null };
    }
    try {
      const user = await this.authService.verifyToken(token);
      return {
        isAuthenticated: true,
        user: {
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      };
    } catch (error) {
      Logger.error('Token verification failed:', error);
      throw new UnauthorizedException('Invalid token');
    }
  }

  @Patch('user')
  async updateUser(
    @Req() req: Request,
    @Body() updateData: UpdateUserDto,
  ): Promise<{ user: Partial<User> }> {
    try {
      const token = req.cookies['jwt'];
      if (!token) {
        throw new UnauthorizedException('Authentication required');
      }

      const currentUser = await this.authService.verifyToken(token);
      if (!currentUser || !currentUser.id) {
        throw new UnauthorizedException('Invalid user token');
      }

      const updatedUser = await this.authService.updateUser(
        currentUser.id,
        updateData,
      );

      return {
        user: {
          id: currentUser.id,
          username: updatedUser.username,
          email: currentUser.email, // CHANGE WHEN ADDED CHANGE EMAIL FUNCTIONALITY
          role: currentUser.role,
          name: updatedUser.name,
          birthday: updatedUser.birthday,
          profilePictureUrl: updatedUser.profilePictureUrl,
        },
      };
    } catch (error) {
      Logger.error('Error updating user:', error);
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new BadRequestException(error.message || 'Error updating user');
    }
  }
}
