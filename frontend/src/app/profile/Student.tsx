'use client';
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '@/api/userService';
import Image from 'next/image';
import user from '../../../public/user.png';
import Link from 'next/link';

interface UserData {
  id: number;
  username: string;
  email: string;
  role: string;
  name: string;
}

const StudentProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState(userData?.username);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        setUserData(data.user);
      } catch (err) {
        console.log(error);
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
      }
      // } finally {
      //   setLoading(false);
      // }
    };
    fetchUserProfile();
  }, []);

  return (
    <form className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ім&apos;я профілю
            </label>
            <div className="mt-2">
              <form className="flex items-center">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={userData?.username || "Введіть ім'я профілю"}
                  autoComplete="username"
                  className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Зберегти
                </button>
              </form>
            </div>
          </div>

          {/* <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about yourself.
            </p>
          </div> */}

          <div className="col-span-full mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Фото профілю
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <Image
                aria-hidden="true"
                className="h-24 w-24 text-gray-300"
                src={user}
                alt="user_picture"
              />
              <label
                htmlFor="file-upload"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                <span>Змінити</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="text-xs leading-5 text-gray-600">
                Завантажте файл формату PNG, JPG або GIF розміром до 10MB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Особисті дані
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Ці дані будуть доступні публічно. Використовуйте e-mail, до якого ви
          маєте постійний доступ.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ім&apos;я та прізвище
            </label>
            <form className="flex items-center">
              <input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="name surname"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={userData?.email}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="birthday"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Дата народження у форматі ДД.ММ.РРРР
            </label>
            <div className="mt-2">
              <input
                id="birthday"
                name="birthday"
                autoComplete="bday"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              ></input>
            </div>
            <Link href="./profile/notifications">NOTIF</Link>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default StudentProfile;
