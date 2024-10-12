import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { JwtService } from './jwt/jwt.service';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
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
    try {
      const user = await this.userModel.create<User>({
        username,
        email,
        password: hashPassword,
        role,
      } as User);
      const token = await this.jwtService.generateToken(user);
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
  async verifyToken(token: string): Promise<Partial<User>> {
    try {
      const payload = this.jwtService.verifyToken(token);
      const user = await this.userModel.findByPk(payload.sub);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      const { password: _, ...userWithoutPassword } = user.toJSON();
      return userWithoutPassword;
    } catch (error) {
      Logger.error('Token verification failed:', error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
