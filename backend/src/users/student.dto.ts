import { ResponseDto } from 'src/auth/dto/response.dto';
import { UserDto } from 'src/auth/dto/user.dto';

export class StudentDto extends UserDto {
  role: string;
  name: string;
  birthday: string;
}

export class StudentResponseDto extends ResponseDto<StudentDto> {
  constructor(isAuthenticated: boolean, user: StudentDto | null) {
    super();
    this.isAuthenticated = isAuthenticated;
    this.data = user;
  }
}
