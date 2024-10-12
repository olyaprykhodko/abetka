'use client';
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '@/api/userService';

interface UserData {
  id: number;
  username: string;
  email: string;
  role: string;
}

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        console.log('Fetched user data:', JSON.stringify(data, null, 2));
        setUserData(data.user);
        console.log('ROLE IS:', data.user.role);
      } catch (err) {
        console.error('Error in fetchUserProfile:', err);
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const renderProfile = () => {
    console.log(userData);
    if (!userData) {
      return <div>Будь ласка, увійдіть до системи для перегляду профілю</div>;
    }
    switch (userData.role) {
      case 'student':
        return <div>User Profile: {userData.username}</div>;
      case 'teacher':
        return <div>Teacher Profile: {userData.username}</div>;
      case 'admin':
        return <div>Admin Profile: {userData.username}</div>;
      default:
        return <div>Невідома роль користувача: {userData.username}</div>;
    }
  };

  if (loading) return <div>Завантаження профілю користувача...</div>;
  if (error) return <div>Помилка: {error}</div>;

  return (
    <div>
      <h1>Особиста інформація користувача</h1>
      {renderProfile()}
    </div>
  );
};

export default Profile;
