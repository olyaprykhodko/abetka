'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

const Contacts: React.FC = () => {
  return (
    <>
      {/* Header, Navigation */}
      <div className="bg-background relative overflow-hidden">
        <div className="relative isolate px-4 pt-1 lg:px-14 ">
          {/* Top gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
      </div>
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
