import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    const { username, email, password, role } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userService.createUser({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const payload = { sub: user.id, username: user.username };
    const access_token = await this.jwtService.signAsync({ id: user.id });
    return { access_token };
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const { email, password } = loginDto;

    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new UnauthorizedException('This email does not exist');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

    const payload = { sub: user.id, username: user.username };
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }
}
