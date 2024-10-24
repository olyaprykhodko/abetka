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
import { UpdateTeacherDto, UpdateUserDto } from './dto/update.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { Logger } from '@nestjs/common';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import { User } from 'src/users/user.model';
import { StudentDto, StudentResponseDto } from 'src/users/student.dto';
import { TeacherDto, TeacherResponseDto } from 'src/teachers/teacher.dto';
import { UserResponseDto } from './dto/response.dto';

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
  async getUser(@Req() req: Request): Promise<StudentResponseDto> {
    const { isAuthenticated, data } = await this.authService.verifyAndGetUser(
      req.cookies['jwt'],
    );

    if (!isAuthenticated || !data) return new StudentResponseDto(false, null);

    const userDto: StudentDto = {
      id: Number(data.id),
      username: String(data.username),
      name: String(data.name),
      email: String(data.email),
      role: String(data.role),
      birthday: String(data.birthday),
    };
    return new StudentResponseDto(true, userDto);
  }

  @Get('teacher')
  async getTeacher(@Req() req: Request): Promise<TeacherResponseDto> {
    try {
      const { isAuthenticated, data } =
        await this.authService.verifyAndGetTeacher(req.cookies['jwt']);

      if (!isAuthenticated || !data) {
        return new TeacherResponseDto(false, null);
      }

      const teacherDto: TeacherDto = {
        id: Number(data.id),
        username: String(data.username || ''),
        name: data.name || null,
        email: String(data.email || ''),
        bio: data.bio || null,
        degree: data.degree || null,
        speciality: data.speciality || null,
        university: data.university || null,
        studyYears: data.studyYears || null,
        additionalEducation: data.additionalEducation || null,
        mainWorkplace: data.mainWorkplace || null,
        mainPosition: data.mainPosition || null,
        mainWorkingYears: data.mainWorkingYears
          ? String(data.mainWorkingYears)
          : null,
        otherExperience: data.otherExperience || null,
        experienceYears: data.experienceYears
          ? Number(data.experienceYears)
          : undefined,
      };

      return new TeacherResponseDto(true, teacherDto);
    } catch (error) {
      Logger.error('Error in getTeacher:', error);
      if (error instanceof UnauthorizedException) {
        return new TeacherResponseDto(false, null);
      }
      throw error;
    }
  }

  @Patch('user')
  async updateUser(
    @Req() req: Request,
    @Body() updateData: UpdateUserDto,
  ): Promise<UserResponseDto> {
    try {
      const { isAuthenticated, data } = await this.authService.verifyAndGetUser(
        req.cookies['jwt'],
      );

      if (!isAuthenticated || !data) {
        throw new UnauthorizedException('Authentication required');
      }

      if (!data.id || !data.email || !data.role || !data.username) {
        throw new BadRequestException('Invalid user data');
      }

      const updatedUser = await this.authService.updateUser(
        data.id,
        updateData,
      );

      const userDto = {
        id: Number(updatedUser.id),
        username: String(updatedUser.username),
        name: updatedUser.name ?? null,
        email: String(data.email),
        role: String(data.role),
        birthday: updatedUser.birthday ?? null,
        profilePictureUrl: updatedUser.profilePictureUrl ?? null,
      };

      return new UserResponseDto(true, userDto);
    } catch (error) {
      Logger.error('Error updating user:', error);
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new BadRequestException(error.message || 'Error updating user');
    }
  }

  @Patch('teacher')
  async updateTeacher(
    @Req() req: Request,
    @Body() updateData: UpdateTeacherDto,
  ): Promise<TeacherResponseDto> {
    try {
      const { isAuthenticated, data } =
        await this.authService.verifyAndGetTeacher(req.cookies['jwt']);

      if (!isAuthenticated || !data) {
        throw new UnauthorizedException('Authentication required');
      }

      const updatedTeacher = await this.authService.updateTeacher(
        data.id,
        updateData,
      );

      const teacherDto = {
        id: Number(updatedTeacher.id),
        username: String(updatedTeacher.username),
        name: updatedTeacher.name ?? null,
        email: String(data.email),
        bio: updatedTeacher.bio ?? null,
        degree: updatedTeacher.degree ?? null,
        speciality: updatedTeacher.speciality ?? null,
        university: updatedTeacher.university ?? null,
        studyYears: updatedTeacher.studyYears ?? null,
        additionalEducation: updatedTeacher.additionalEducation ?? null,
        mainWorkplace: updatedTeacher.mainWorkplace ?? null,
        mainPosition: updatedTeacher.mainPosition ?? null,
        mainWorkingYears: updatedTeacher.mainWorkingYears
          ? String(updatedTeacher.mainWorkingYears)
          : null,
        otherExperience: updatedTeacher.otherExperience ?? null,
        experienceYears: updatedTeacher.experienceYears
          ? Number(updatedTeacher.experienceYears)
          : undefined,
      };

      return new TeacherResponseDto(true, teacherDto);
    } catch (error) {
      Logger.error('Error updating teacher:', error);
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new BadRequestException(error.message || 'Error updating teacher');
    }
  }
}
