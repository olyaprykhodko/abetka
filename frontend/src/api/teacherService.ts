import { TeacherData } from '@/app/interfaces/profile/teacherdata.interface';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND;

export const getTeacherProfile = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/teacher`, {
      credentials: 'include',
    });

    console.log('Teacher response status:', response.status);

    if (response.status === 401) {
      return { isAuthenticated: false, data: null };
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server responded with an error:', errorData);
      throw new Error(`Server error: ${errorData.message}`);
    }

    const data = await response.json();
    console.log('Teacher profile data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching teacher profile:', error);
    throw error;
  }
};

export const updateTeacherProfile = async (
  teacherData: Partial<TeacherData>
) => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/teacher`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacherData),
    });

    console.log('Update teacher response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server responded with an error:', errorData);
      throw new Error(`Server error: ${errorData.message}`);
    }

    const data = await response.json();
    console.log('Updated teacher profile data:', data);
    return data;
  } catch (error) {
    console.error('Error updating teacher profile:', error);
    throw error;
  }
};

// api/index.ts
export * from './teacherService';
export * from './userService';
