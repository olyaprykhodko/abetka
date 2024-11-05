import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(
    createUserDto: CreateUserDto,
    res: Response,
  ): Promise<{ user: any }> {
    const { username, email, password, role } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userService.createUser({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const payload = { sub: user.id, username: user.username };
    const access_token = await this.jwtService.signAsync({ payload });

    res.cookie('jwt', access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 * 1000, // 7 days
      path: '/',
    });

    res.status(201).json({ message: 'User successfully signed up' });
    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }

  async login(loginDto: LoginDto, res: Response): Promise<{ user: any }> {
    const { email, password } = loginDto;

    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new UnauthorizedException('This email does not exist');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

    const payload = { sub: user.id, username: user.username };
    const access_token = await this.jwtService.signAsync(payload);

    res.cookie('jwt', access_token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.status(201).json({ message: 'User successfully logged in' });

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }

  async validateSession(
    req: Request,
  ): Promise<{ isAuthenticated: boolean; user?: object }> {
    const token = req.cookies['jwt'];
    if (!token) return { isAuthenticated: false };

    try {
      const payload = await this.jwtService.verifyAsync(token);
      const user = await this.userService.getUserById(payload.sub);

      if (!user) {
        return { isAuthenticated: false };
      }

      return {
        isAuthenticated: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      };
    } catch (err) {
      return { isAuthenticated: false };
    }
  }

  async logout(res: Response): Promise<void> {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Successfully logged out' });
  }
}
