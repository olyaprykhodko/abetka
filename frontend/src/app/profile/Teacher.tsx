'use client';
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '@/api/userService';
import Image from 'next/image';
import user from '../../../public/user.png';

interface UserData {
  id: number;
  username: string;
  email: string;
  role: string;
  name: string;
}

const TeacherProfile: React.FC = () => {
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
              Ім&apos;я, прізвище та по-батькові
            </label>
            <form className="flex items-center mt-2">
              <input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="name surname"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-3">
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
                placeholder={userData?.email}
                autoComplete="email"
                className="block w-full rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Про мене
              <p className="text-sm leading-6 text-gray">
                Дані буде додано до опису вашого профілю. Наприклад, напрями
                викладання, особливі методики, досягнення тощо.
              </p>
            </label>
            <div className="mt-2">
              <form className="">
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Викладаю математику за методикою, що відповідає рекомендаціям Нової україснької школи"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="ml-0 mt-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white"
        >
          Зберегти
        </button>
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Освіта
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Вкажіть дані про основну освіту, що стосуватиметься викладання на
          даному ресурсі. Надавайте тільки правдиву інформацію про освіту та
          місця роботи, адже вони перевірятимуться.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="degree"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Рівень освіти
            </label>
            <form className="flex items-center">
              <input
                id="degree"
                name="degree"
                placeholder="Бакалавр, магістр або інше"
                type="text"
                autoComplete="degree"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="specialisation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Спеціальність
            </label>
            <form className="flex items-center">
              <input
                id="specialisation"
                name="specialisation"
                placeholder="Перекладач французької мови"
                type="text"
                autoComplete="specialisation"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="university"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Навчальний заклад
            </label>
            <form className="flex items-center">
              <input
                id="university"
                name="university"
                placeholder="Харківський національний університет ім. В.Н.Каразіна"
                type="text"
                autoComplete="university"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="education-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Дати навчання
            </label>
            <form className="flex items-center">
              <input
                id="education-date"
                name="education-date"
                placeholder="2010-2015"
                type="text"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="add-education"
              className="block text-sm font-medium leading-6"
            >
              Додаткова освіта
              <p className="my-2 text-sm leading-6 text-gray">
                Вкажіть додаткові навчальні заклади, у яких ви здобували освіту,
                спеціальність та роки навчання. Можна вказати курси та програми
                іноземної освіти
              </p>
            </label>

            <form className="flex items-center">
              <textarea
                id="add-education"
                name="add-education"
                rows={5}
                placeholder="Наприклад: Київський Інститут Бізнесу та Технологій, економіка та менеджмент, 2015-2017; Всеукраїнський форум вчителів математики, 2019"
                className="block w-full rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>
        </div>
        <button
          type="submit"
          className="ml-0 mt-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white"
        >
          Зберегти
        </button>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Досвід роботи
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Надавайте тільки правдиву інформацію про місця роботи, адже дані
          перевірятимуться.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="workplace"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Організація
            </label>
            <form className="flex items-center">
              <input
                id="workplace"
                name="workplace"
                placeholder="ЗОШ №16 м.Біла Церква"
                type="text"
                autoComplete="workplace"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="job"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Посада
            </label>
            <form className="flex items-center">
              <input
                id="job"
                name="job"
                placeholder="Вчитель економіки"
                type="text"
                autoComplete="job"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="working years"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Тривалість роботи
            </label>
            <form className="flex items-center">
              <input
                id="working years"
                name="working years"
                placeholder="Харківський національний університет ім. В.Н.Каразіна"
                type="text"
                autoComplete="working years"
                className="block flex-1 rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </form>
          </div>
        </div>
        <button
          type="submit"
          className="ml-0 mt-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white"
        >
          Зберегти
        </button>
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

export default TeacherProfile;
