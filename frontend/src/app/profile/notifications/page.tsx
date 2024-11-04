'use client';

import Sidebar from '../Sidebar';
import Navigation from '@/components/Navigation';

const NotificationSettings: React.FC = () => {
  return (
    <>
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
              <div className="w-full md:w-1/4 md:mb-0 md:pr-2 border-r-text border-r-2 flex items-start">
                <Sidebar />
              </div>
              <div className="w-full md:w-3/4 md:pl-8">
                <h1 className="text-2xl font-bold mb-8">
                  Налаштування сповіщень:
                </h1>
                <div className="">
                  <p className="mt-1 text-base leading-6 text-gray-600">
                    Ми завжди повідомляємо вам тільки важливу інформацію, але ви
                    можете обрати які ще новини би бажаєте отримувати від нас.
                  </p>

                  <div className="mt-10 space-y-10">
                    {/* <div className="mt-6 space-y-6">
                      {userData && userData.role === 'student' ? (
                        <StudentNotifications />
                      ) : userData && userData.role === 'teacher' ? (
                        <TeacherNotifications />
                      ) : (
                        <p>Завантаження налаштувань...</p>
                      )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
