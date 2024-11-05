'use client';
import Navigation from '@/components/Navigation';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import StudentProfile from './Student';
import TeacherProfile from './Teacher';

const Profile: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div>
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
        </div>

        <div className="flex justify-center items-center w-full">
          <Navigation />
        </div>
        <hr className="border-t border-primary" />
      </div>

      {/* Main content */}
      {isAuthenticated ? (
        <div className="bg-white">
          <div className="mx-16 max-w-7xl px-0 py-10 sm:px-0 sm:py-10 lg:py-10">
            <div className="flex flex-col md:flex-row mt-8 ml-0">
              <div className="w-full md:w-1/4 md:mb-0 md:pr-2 border-r-black border-r-2 flex items-start">
                <Sidebar />
              </div>
              <div className="w-full md:w-3/4 md:pl-8">
                <h1 className="text-2xl font-bold mb-8">
                  Налаштування профілю:
                </h1>
              </div>
              {user?.role === 'student' ? (
                <StudentProfile />
              ) : (
                <TeacherProfile />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Будь ласка, увійдіть до сиситеми для налаштування профілю
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/login"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Увійти до аккаунту
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
