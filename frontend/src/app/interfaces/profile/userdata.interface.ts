export interface UserData {
  id: number;
  username: string;
  email: string;
  role: string;
  name: string;
  birthday?: string | null;
  profilePictureUrl?: string;
}
