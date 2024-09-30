'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import student from '../../../public/student.jpg';
import teacher from '../../../public/teacher.webp';

const Home = () => {
  return (
    <>
      <div className="bg-background relative overflow-hidden">
        <div className="relative isolate px-6 pt-4 lg:px-8">
          <Navigation />

          {/* Top gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#16325B] to-[#78B7D0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* Main page */}
          <div className="mx-auto max-w-7xl py-8 sm:py-12 lg:py-32 font-openSans">
            {/* First div */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start">
              {/* Header */}
              <div className="lg:w-1/2 w-full text-center lg:text-left lg:pr-12">
                <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
                  Почніть навчатись або навчати вже зараз
                </h1>
              </div>
              {/* Text blocks */}
              <div className="lg:w-2/3 w-full space-y-12 mt-10 lg:mt-0 lg:ml-12">
                {/* 1 */}
                <div className="flex flex-col lg:flex-row items-start lg:space-x-8 bg-gradient-to-r from-[#ffdc7f] to-[#ebc254] p-8 rounded-lg transition-all hover:shadow-lg">
                  <Image
                    src={student}
                    alt="Навчання"
                    className="w-40 h-40 object-cover rounded-md mb-6 lg:mb-0"
                  />
                  <p className="text-lg leading-8 text-gray-900 lg:w-2/3">
                    Знайдіть репетитора з будь-якого шкільного предмета та
                    навчайтесь у зручний спосіб. Усі наші викладачи мають
                    профільну вищу освіту та підтверджений досвід роботи. Ми
                    надаємо повне супроводження та підтримку від наших
                    спеціалістів, аби ваша дитина почувалася комфортно.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex flex-col lg:flex-row items-start lg:space-x-8 bg-gradient-to-r from-[#78b7d0] to-[#227b94] p-8 rounded-lg transition-all hover:shadow-lg">
                  <Image
                    src={teacher}
                    alt="Викладання"
                    className="w-40 h-40 object-cover rounded-md mb-6 lg:mb-0"
                  />
                  <p className="text-lg leading-8 text-gray-900 lg:w-2/3">
                    Якщо ви досвідчений викладач із підтвердженим дипломом
                    українського ВИШу, доєднуйтесь до Абетки. Обирайте робочий
                    час, навантаження та навчальну програму самостійно.
                  </p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-secondary px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Перейти до реєстрації
              </Link>
              <Link
                href="#"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-all"
              >
                Дізнайтесь більше про нас <span aria-hidden="true">→</span>
              </Link>
            </div>
            {/* End of first div */}

            {/* Second div */}
            <div className="py-48 flex flex-col lg:flex-row justify-between items-start lg:items-start">
              {/* Header */}
              <div className="lg:w-2/3 w-full text-center lg:text-right lg:pr-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl xl:text-7xl">
                  Оберіть предмет
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae tenetur provident placeat vero. Fugiat architecto,
                  dignissimos quo, hic repellat cupiditate aliquid totam dolor
                  commodi dicta distinctio voluptas fuga est animi.
                </p>
              </div>
              {/* Text blocks 2 */}
              <div className="lg:w-2/3 w-full space-y-12 mt-10 lg:mt-0 lg:ml-12">
                {/* 1 */}
                <div className="flex flex-col lg:flex-row items-start lg:space-x-8 bg-gradient-to-r from-[#ffdc7f] to-[#ebc254] p-8 rounded-lg transition-all hover:shadow-lg">
                  <p className="text-lg leading-8 text-gray-900 lg:w-2/3">
                    Математика
                  </p>
                </div>
                {/* 2 */}
                <div className="flex flex-col lg:flex-row items-start lg:space-x-8 bg-gradient-to-r from-[#78b7d0] to-[#227b94] p-8 rounded-lg transition-all hover:shadow-lg">
                  <p className="text-lg leading-8 text-gray-900 lg:w-2/3">
                    Українська мова
                  </p>
                </div>
                {/* 3 */}
                <div className="flex flex-col lg:flex-row items-start lg:space-x-8 bg-gradient-to-r from-[#78b7d0] to-[#227b94] p-8 rounded-lg transition-all hover:shadow-lg">
                  <p className="text-lg leading-8 text-gray-900 lg:w-2/3">
                    Англійська мова
                  </p>
                </div>
                {/* Buttons */}
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="#"
                    className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-all"
                  >
                    Інші предмети <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* End of second div */}

            {/* Third div */}
            <div>
              <div className="lg:w-full w-full text-center lg:text-right">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl xl:text-6xl">
                  Викладачі Абетки
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam ut illum maxime, praesentium totam expedita,
                  necessitatibus rem ducimus quia dolores nam quasi aliquid in
                  delectus natus. Eveniet optio cum voluptatum?
                </p>
              </div>

              <div className="py-20 flex flex-col lg:flex-row justify-between items-start lg:items-start">
                {/* Text blocks 3 */}
                <div className="lg:w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-3 lg:mt-0 lg:ml-12">
                  {/* 1 */}
                  <div className="flex flex-col items-start lg:space-x-8 bg-gradient-to-r from-[#ffdc7f] to-[#ebc254] p-8 rounded-lg transition-all hover:shadow-lg">
                    <Image
                      src={student}
                      alt="Навчання"
                      className="w-40 h-40 object-cover rounded-md mb-6 lg:mb-0"
                    />
                    <p className="text-lg leading-8 text-gray-900">
                      Joahna Doe
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col items-start lg:space-x-8 bg-gradient-to-r from-[#78b7d0] to-[#227b94] p-8 rounded-lg transition-all hover:shadow-lg">
                    <Image
                      src={teacher}
                      alt="John"
                      className="w-40 h-40 object-cover rounded-md mb-6 lg:mb-0"
                    />
                    <p className="text-lg leading-8 text-gray-900">John Doe</p>
                  </div>
                  {/* 3 */}
                  <div className="flex flex-col items-start lg:space-x-8 bg-gradient-to-r from-[#78b7d0] to-[#227b94] p-8 rounded-lg transition-all hover:shadow-lg">
                    <Image
                      src={student}
                      alt="Навчання"
                      className="w-40 h-40 object-cover rounded-md mb-6 lg:mb-0"
                    />
                    <p className="text-lg leading-8 text-gray-900">
                      Mary Smith
                    </p>
                  </div>
                  {/* 4 */}
                  <div className="flex flex-col items-start lg:space-x-8 bg-gradient-to-r from-[#78b7d0] to-[#227b94] p-8 rounded-lg transition-all hover:shadow-lg">
                    <Image
                      src={student}
                      alt="Навчання"
                      className="w-40 h-40 object-cover rounded-md mb-6 lg:mb-0"
                    />
                    <p className="text-lg leading-8 text-gray-900">
                      Michael Brown
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-1 flex justify-center">
                <Link
                  href="#"
                  className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-all"
                >
                  Всі викладачі <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            {/* End of third div */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
