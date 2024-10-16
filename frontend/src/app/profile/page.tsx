'use client';
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '@/api/userService';
import StudentProfile from './Student';
import Navigation from '@/components/Navigation';
import Sidebar from './Sidebar';

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
        setUserData(data.user);
      } catch (err) {
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
    if (!userData) {
      return <div>Будь ласка, увійдіть до системи для перегляду профілю</div>;
    }
    switch (userData.role) {
      case 'student':
        return <StudentProfile />;
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
    <div className="bg-background relative overflow-hidden">
      <div className="relative isolate px-4 pt-1 lg:px-14">
        {/* Top gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              background: 'linear-gradient(135deg, #007BFF, #7EC8E3)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="flex justify-center items-center w-full">
          <Navigation />
        </div>
        <hr className="border-t border-primary" />
      </div>

      {/* Main content */}
      <div className="bg-white">
        <div className="mx-16 max-w-7xl px-0 py-10 sm:px-0 sm:py-10 lg:py-10">
          <div className="flex flex-col md:flex-row mt-8 ml-0">
            <div className="w-full md:w-1/4 md:mb-0 md:pr-2 border-r-black border-r-2 flex items-start">
              <Sidebar />
            </div>
            <div className="w-full md:w-3/4 md:pl-8">
              {userData && (
                <h1 className="text-2xl font-bold mb-8">
                  Налаштування профілю: {userData.role} {userData.username}
                </h1>
              )}
              {renderProfile()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
