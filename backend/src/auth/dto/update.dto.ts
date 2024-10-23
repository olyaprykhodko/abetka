import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly birthday: string;

  @IsString()
  @IsNotEmpty()
  readonly profilePictureUrl: string;
}
