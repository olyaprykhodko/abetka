import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsOptional,
  IsNumber,
} from 'class-validator';

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

export class UpdateTeacherDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  degree?: string;

  @IsOptional()
  @IsString()
  speciality?: string;

  @IsOptional()
  @IsString()
  university?: string;

  @IsOptional()
  @IsString()
  studyYears?: string;

  @IsOptional()
  @IsString()
  additionalEducation?: string;

  @IsOptional()
  @IsString()
  mainWorkplace?: string;

  @IsOptional()
  @IsString()
  mainPosition?: string;

  @IsOptional()
  @IsString()
  mainWorkingYears?: string;

  @IsOptional()
  @IsString()
  otherExperience?: string;

  @IsOptional()
  @IsNumber()
  experienceYears?: number;
}
