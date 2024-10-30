import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { identity } from 'rxjs';
import { CreateUserDto } from './dto/create.user.dto';
import { UserDto } from './dto/user.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async getUserById(id: number): Promise<UserDto> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException('User with this ID not found');
    return new UserDto(user);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({
      where: {
        email,
      },
    });

    if (!user) throw new NotFoundException('User with this EMAIL not found');
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const { username, email, password, role } = createUserDto;
    const user = await this.userModel.create({
      username,
      email,
      password,
      role,
    } as CreationAttributes<User>);
    await user.save();
    return new UserDto(user);
  }
}
