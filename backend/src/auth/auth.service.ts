import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { JwtService } from './jwt/jwt.service';
import * as bcrypt from 'bcrypt';

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
      throw new Error('Internal server error');
    }
  }

  async registerUser(
    username: string,
    email: string,
    password: string,
    role: 'student' | 'teacher' | 'admin',
  ): Promise<{ user: User; token: string }> {
    const hashPassword = await bcrypt.hash(password, 3);
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
      console.error('Помилка входу:', error);
      throw new Error('Internal server error');
    }
  }
}
