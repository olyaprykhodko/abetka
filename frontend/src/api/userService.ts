const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND;

export const getUserProfile = async () => {
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
    console.log('User profile data:', data.user.role);
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
