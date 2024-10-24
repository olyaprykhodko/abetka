import { UserDto } from './user.dto';

export class ResponseDto<T> {
  isAuthenticated: boolean;
  data: T | null;
}

export class UserResponseDto extends ResponseDto<UserDto> {
  constructor(isAuthenticated: boolean, user: UserDto | null) {
    super();
    this.isAuthenticated = isAuthenticated;
    this.data = user;
  }
}
