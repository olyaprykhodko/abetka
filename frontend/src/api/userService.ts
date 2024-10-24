import { UserData } from '@/app/interfaces/profile/userdata.interface';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND;

interface UserResponse {
  isAuthenticated: boolean;
  data: UserData | null;
}

export const getUserProfile = async (): Promise<UserResponse> => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/user`, {
      credentials: 'include',
    });
    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server responded with an error:', errorData);
      throw new Error(`Server error: ${errorData.message}`);
    }

    const data = await response.json();
    console.log('User profile data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userData: Partial<UserData>) => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/user`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    console.log('Update repsonse status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server responded with an error:', errorData);
      throw new Error(`Server error: ${errorData.message}`);
    }

    const data = await response.json();
    console.log('Updated user profile data:', data.user);
    return data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};
