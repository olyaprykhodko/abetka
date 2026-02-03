'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';

const teachers = [
  {
    id: 1,
    name: 'Надія Гнатюк',
    href: '#',
    subject: 'Українська мова і літаратура',
    imageSrc:
      'https://images.pexels.com/photos/4855376/pexels-photo-4855376.jpeg',
    imageAlt: 'woman',
  },
  {
    id: 2,
    name: 'Шарлотта Стеценко',
    href: '#',
    subject: 'Англійська мова',
    imageSrc:
      'https://images.pexels.com/photos/3727513/pexels-photo-3727513.jpeg',
    imageAlt: 'woman',
  },
  {
    id: 3,
    name: 'Андрій Жменько',
    href: '#',
    subject: 'Інформатика та програмування для школярів',
    imageSrc:
      'https://images.pexels.com/photos/7255290/pexels-photo-7255290.jpeg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Вадим Гончаренко',
    href: '#',
    subject: 'Історія України',
    imageSrc:
      'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Кирило Омельченко',
    href: '#',
    subject: 'Географія',
    imageSrc:
      'https://images.pexels.com/photos/27661934/pexels-photo-27661934.jpeg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Кристина Решетник',
    href: '#',
    subject: 'Алгебра та геометрія',
    imageSrc:
      'https://images.pexels.com/photos/27603571/pexels-photo-27603571.jpeg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
];

const Teachers: React.FC = () => {
  return (
    <>
      <div className="bg-background relative overflow-hidden">
        <div className="relative isolate px-4 pt-1 lg:px-14 ">
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

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {teachers.map((teacher) => (
                <a key={teacher.id} href={teacher.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      alt={teacher.imageAlt}
                      src={teacher.imageSrc}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      width="500"
                      height="500"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{teacher.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {teacher.subject}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
