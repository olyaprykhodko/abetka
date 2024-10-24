import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { JwtService } from './jwt/jwt.service';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { UpdateUserDto, UpdateTeacherDto } from './dto/update.dto';
import { Teacher } from 'src/teachers/teacher.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    @InjectModel(Teacher) private readonly teacherModel: typeof Teacher,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    try {
      const user = await this.userModel.findOne({ where: { username } });
      if (user && (await bcrypt.compare(password, user.password))) {
        return user;
      }
      return null;
    } catch (error) {
      console.error('Помилка валідації:', error);
      Logger.debug(error);
      throw new Error('Internal server error');
    }
  }

  async registerUser(
    username: string,
    email: string,
    password: string,
    role: 'student' | 'teacher' | 'admin',
  ): Promise<{ user: User; token: string }> {
    console.log('Password received:', password);
    if (!password) {
      throw new Error('Password is required');
    }
    const hashPassword = await bcrypt.hash(password, 10);

    // create any user
    try {
      const user = await this.userModel.create<User>({
        username,
        email,
        password: hashPassword,
        role,
      } as User);

      // if role = 'teacher'
      if (user.role === 'teacher') {
        await this.teacherModel.create<Teacher>({
          userId: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
        } as Teacher);
      }

      const token = await this.jwtService.generateToken(user);
      Logger.log(`User with role ${user.role} created in database`, user);
      return { user, token };
    } catch (error) {
      Logger.debug(error);
      console.error('Виникла помилка при реєстрації користувача', error);
      throw new Error('Виникла помилка при реєстрації користувача');
    }
  }

  async loginUser(username: string, password: string): Promise<string> {
    try {
      // console.log('Спроба логіну для юзера:', username);
      const user = await this.validateUser(username, password);
      // console.log('Такий юзер існує:', username);
      if (!user) throw new Error('Invalid credentials');
      return this.jwtService.generateToken(user);
    } catch (error) {
      Logger.debug(error);
      console.error('Помилка входу:', error);
      throw new Error('Internal server error');
    }
  }

  async verifyAndGetUser(
    token: string | undefined,
  ): Promise<{ isAuthenticated: boolean; data: Partial<User> | null }> {
    if (!token) {
      return { isAuthenticated: false, data: null };
    }

    try {
      const payload = this.jwtService.verifyToken(token);
      if (!payload) {
        return { isAuthenticated: false, data: null };
      }

      const user = await this.userModel.findByPk(payload.sub);
      if (!user) {
        throw new NotFoundException('User not found');
      }

      const { password: _, ...userWithoutPassword } = user.toJSON();
      return { isAuthenticated: true, data: userWithoutPassword };
    } catch (error) {
      Logger.error('Token verification failed:', error);
      if (error instanceof UnauthorizedException) {
        return { isAuthenticated: false, data: null };
      }
      throw error;
    }
  }

  async verifyAndGetTeacher(
    token: string | undefined,
  ): Promise<{ isAuthenticated: boolean; data: Partial<Teacher> | null }> {
    if (!token) {
      return { isAuthenticated: false, data: null };
    }

    try {
      const payload = this.jwtService.verifyToken(token);
      if (!payload) {
        return { isAuthenticated: false, data: null };
      }

      const user = await this.userModel.findByPk(payload.sub);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      if (user.role !== 'teacher') {
        throw new UnauthorizedException('User is not a teacher');
      }

      const teacher = await this.teacherModel.findOne({
        where: { userId: user.id },
      });

      if (!teacher) {
        Logger.error(`Teacher not found for user ID: ${user.id}`);
        return { isAuthenticated: false, data: null };
      }

      const { password: _, ...teacherWithoutPassword } = teacher.toJSON();
      return { isAuthenticated: true, data: teacherWithoutPassword };
    } catch (error) {
      Logger.error('Token verification failed:', error);
      if (error instanceof UnauthorizedException) {
        return { isAuthenticated: false, data: null };
      }
      throw error;
    }
  }

  async updateUser(userId: number, updateTdata: UpdateUserDto): Promise<User> {
    try {
      const user = await this.userModel.findByPk(userId);
      if (!user) throw new Error('User not found');

      const filteredUpdateData = Object.entries(updateTdata)
        .filter(([_, value]) => value !== undefined)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

      await user.update(filteredUpdateData);

      await user.reload();

      const { password: _, ...userWithoutPassword } = user.toJSON();
      return userWithoutPassword as User;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      Logger.error('Error updating user:', error);
      throw new Error('Error while updating user');
    }
  }

  async updateTeacher(
    teacherId: number,
    updateData: UpdateTeacherDto,
  ): Promise<Teacher> {
    try {
      const teacher = await this.teacherModel.findByPk(teacherId);
      if (!teacher) {
        throw new NotFoundException('Teacher not found');
      }

      const filteredUpdateData = Object.entries(updateData)
        .filter(([_, value]) => value !== undefined)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

      await teacher.update(filteredUpdateData);
      await teacher.reload();

      const { password: _, ...teacherWithoutPassword } = teacher.toJSON();
      return teacherWithoutPassword as Teacher;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      Logger.error('Error updating teacher:', error);
      throw new Error('Error while updating teacher');
    }
  }
}
