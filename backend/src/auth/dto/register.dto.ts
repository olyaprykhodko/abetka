import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';

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
  @IsEnum(['student', 'teacher', 'admin'])
  readonly role: 'student' | 'teacher' | 'admin';
}
