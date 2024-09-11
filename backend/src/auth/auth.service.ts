import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.userModel.findOne({
      where: { username, password },
    });
    return !!user;
  }

  async registerUser(
    username: string,
    email: string,
    password: string,
    role: 'student' | 'teacher' | 'admin',
  ): Promise<User> {
    try {
      const user = await this.userModel.create<User>({
        username,
        email,
        password,
        role,
      } as User);
      return user;
    } catch (error) {
      console.error('Виникла помилка при реєстрації користувача', error);
      throw new Error('Виникла помилка при реєстрації користувача');
    }
  }
}
