import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: 'student' | 'teacher' | 'admin';
}
