'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getUserProfile, updateUserProfile } from '@/api/userService';
import {
  uploadProfilePicture,
  getProfilePictureUrl,
} from '@/services/filesService';
import { UserData } from '../interfaces/profile/userdata.interface';
import user from '../../../public/user.png';

const StudentProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [username, setUsername] = useState('');
  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    birthday: '',
  });
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [uploadedPictureName, setUploadedPictureName] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        console.log('DATA FROM SERVER:', data.user);
        setUserData(data.user);
        setUsername(data.user.username || '');

        const birthdayDate = data.user.birthday
          ? new Date(data.user.birthday)
          : null;
        const formattedBirthday = birthdayDate
          ? birthdayDate.toISOString().split('T')[0]
          : '';

        setPersonalData({
          name: data.user.name || '',
          email: data.user.email || '',
          birthday: formattedBirthday,
        });

        const cachedUrl = localStorage.getItem('profilePictureUrl');
        if (cachedUrl) {
          setProfilePicture(cachedUrl);
        }

        if (data.user.profilePictureUrl) {
          const url = await getProfilePictureUrl(data.user.profilePictureUrl);
          setProfilePicture(url);
          localStorage.setItem('profilePictureUrl', url);
        }
      } catch (err) {
        setError('Failed to load user profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
    setUploadedPictureName(null);
  }, []);

  const handleUsernameChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData) return;

    try {
      const response = await updateUserProfile({ username });
      setUserData(response.user);
      setError(null);
    } catch (err) {
      setError('Failed to update username');
      console.error(err);
    }
  };

  const handlePersonalDataChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData) return;

    try {
      const formData = {
        name: personalData.name,
        email: personalData.email,
        birthday: personalData.birthday
          ? new Date(personalData.birthday).toISOString()
          : null,
      };

      const response = await updateUserProfile(formData);
      setUserData(response.user);
      setError(null);
    } catch (err) {
      setError('Failed to update personal data');
      console.error(err);
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file && userData) {
      setLoading(true);
      setError(null);

      try {
        const { fileName } = await uploadProfilePicture(file);
        const url = await getProfilePictureUrl(fileName);

        setProfilePicture(url);
        localStorage.setItem('profilePictureUrl', url);

        const response = await updateUserProfile({
          ...userData,
          profilePictureUrl: fileName,
        });

        setUserData(response.user);
        setUploadedPictureName(file.name);
      } catch (err) {
        setError('Failed to upload profile picture');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  console.log('personalData:', personalData);

  return (
    <div className="space-y-12">
      {/* Username Form */}
      <form
        onSubmit={handleUsernameChange}
        className="border-b border-gray-900/10 pb-12"
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ім&apos;я профілю
            </label>
            <div className="mt-2 flex items-center">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="block w-full rounded-full border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white"
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Profile Picture */}
      <div className="border-b border-gray-900/10 pb-12">
        <div className="col-span-full mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Фото профілю
          </label>
          <div className="mt-2 flex flex-wrap items-start gap-x-3">
            <Image
              className="h-32 w-32 rounded-full object-cover border-2 border-gray-200"
              src={profilePicture || user}
              width={300}
              height={300}
              alt="Profile picture"
              onError={() => {
                setProfilePicture(null);
                localStorage.removeItem('profilePictureUrl');
              }}
            />
            <div className="flex flex-col gap-2">
              <label
                htmlFor="file-upload"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                {loading ? 'Завантаження' : 'Змінити'}
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleFileUpload}
                />
              </label>
              <p className="text-xs leading-5 text-gray-600">
                Завантажте файл формату PNG, JPG або GIF розміром до 10MB
              </p>
              {uploadedPictureName && (
                <p className="text-sm text-green-600">
                  Файл {uploadedPictureName} успішно завантажено
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Personal Data Form */}
      <form
        onSubmit={handlePersonalDataChange}
        className="border-b border-gray-900/10 pb-12"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Особисті дані
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Ці дані будуть доступні публічно. Використовуйте e-mail, до якого ви
          маєте постійний доступ.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ім&apos;я та прізвище
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name surname"
              value={personalData.name || userData?.name || ''}
              onChange={(e) =>
                setPersonalData({ ...personalData, name: e.target.value })
              }
              className="block w-full rounded-full border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={userData?.email}
              autoComplete="email"
              onChange={(e) =>
                setPersonalData({ ...personalData, email: e.target.value })
              }
              className="block w-full rounded-full border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="birthday"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Дата народження у форматі ДД.ММ.РРРР
            </label>
            <input
              id="birthday"
              name="birthday"
              type="date"
              value={personalData.birthday}
              onChange={(e) =>
                setPersonalData({ ...personalData, birthday: e.target.value })
              }
              autoComplete="bday"
              className="block w-full rounded-full border border-gray-300 py-0 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Зберегти
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default StudentProfile;
