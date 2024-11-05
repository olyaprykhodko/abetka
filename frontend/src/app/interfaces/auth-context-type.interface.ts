import { User } from './user.interface';
import { SignUpData } from './signup-data.interface';

export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}
