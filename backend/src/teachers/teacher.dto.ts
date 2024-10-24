import { UserDto } from 'src/auth/dto/user.dto';
import { ResponseDto } from 'src/auth/dto/response.dto';

export class TeacherDto extends UserDto {
  name: string | null;
  bio?: string | null;
  degree?: string | null;
  speciality?: string | null;
  university?: string | null;
  studyYears?: string | null;
  additionalEducation?: string | null;
  mainWorkplace?: string | null;
  mainPosition?: string | null;
  mainWorkingYears?: string | null;
  otherExperience?: string | null;
  experienceYears?: number | undefined;
}

export class TeacherResponseDto extends ResponseDto<TeacherDto> {
  constructor(isAuthenticated: boolean, teacher: TeacherDto | null) {
    super();
    this.isAuthenticated = isAuthenticated;
    this.data = teacher;
  }
}
