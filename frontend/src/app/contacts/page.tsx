'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

const Contacts: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Сторінка у процесі розробки
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Будь ласка, поверніться пізніше
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Повернутись на головну
            </Link>
            <Link href="#" className="text-sm font-semibold text-gray-900">
              Або напишіть у підтримку <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          Шрифти
          <p className="font-sans">
            Головна, Знайти репетитора, Вартість, Зареєструватись
          </p>
          <p className="font-poppins font-bold">
            POPPINS !! Головна, Знайти репетитора, Вартість, Зареєструватись
          </p>
          <p className="font-poppins font-extraLight">
            LIGHT Головна, Знайти репетитора, Вартість, Зареєструватись
          </p>
          <p className="font-colorEmoji">
            Головна, Знайти репетитора, Вартість, Зареєструватись
          </p>
          <p className="font-segoe">
            Головна, Знайти репетитора, Вартість, Зареєструватись
          </p>
          <p className="font-noto">
            Головна, Знайти репетитора, Вартість, Зареєструватись
          </p>
          <p className="font-segoeEmoji">
            Головна, Знайти репетитора, Вартість, Зареєструватись
          </p>
        </div>
      </main>
    </>
  );
};

export default Contacts;
