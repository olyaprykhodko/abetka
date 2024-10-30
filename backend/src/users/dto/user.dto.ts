import { User } from '../user.model';

export class UserDto {
  id: number;
  username: string;
  email: string;
  role: string;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;
  }
}
