export interface UserData {
  id: number;
  username: string;
  email: string;
  role: 'student' | 'teacher';
  name: string;
  birthday?: string | null;
  profilePictureUrl?: string;
}
