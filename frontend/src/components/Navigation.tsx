'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import abetkaLogo from '../../public/abetka-logo.svg';

const navbar = [
  { name: 'Головна', href: '/', current: true },
  { name: 'Знайти репетитора', href: '/teachers', current: false },
  { name: 'Вартість уроків', href: '/lessons', current: false },
  { name: 'Про нас', href: '/about', current: false },
  { name: 'Контакти та підтримка', href: '/contacts', current: false },
];

const Navigation = () => {
  const [newNavbar, setNewNavbar] = useState(navbar);

  useEffect(() => {
    const updatedNavbar = newNavbar.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));
    setNewNavbar(updatedNavbar);
  }, []);

  return (
    <div className="container mx-0 flex justify-between items-center py-4">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src={abetkaLogo} alt="Abetka" className="h-20 w-auto " />
        </Link>
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-5 h-20 w-auto items-center rounded-md">
        {newNavbar.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`rounded-xl px-3 py-2 text-base font-openSans font-500 not-italic ${
              item.current
                ? 'text-white font-semibold bg-primary'
                : 'text-gray-900 hover:bg-secondary hover:text-background'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Authentication Buttons */}
      <div className="flex items-center space-x-4">
        <>
          <Link
            href="/login"
            className="rounded-md px-3 py-2 text-base font-medium text-gray hover:text-secondary"
          >
            Увійти
          </Link>
          <Link
            href="/register"
            className="rounded-md px-3 py-2 text-base font-medium text-primary bg-yellow hover:bg-deepYellow hover:text-gray"
          >
            Зареєструватися
          </Link>
        </>
      </div>
    </div>
  );
};
export default Navigation;
