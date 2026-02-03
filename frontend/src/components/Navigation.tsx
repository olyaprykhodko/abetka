'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/app/context/AuthContext';
import { usePathname } from 'next/navigation';

import abetkaLogo from '../../public/abetka-logo.svg';
import user_pic from '../../public/user.png';
import notification_icon from '../../public/notification-icon.png';

const initialNavbar = [
  { name: 'Головна', href: '/', current: true },
  { name: 'Знайти репетитора', href: '/teachers', current: false },
  { name: 'Вартість уроків', href: '/lessons', current: false },
  { name: 'Про нас', href: '/about', current: false },
  { name: 'Контакти та підтримка', href: '/contacts', current: false },
];

const Navigation = () => {
  const [newNavbar, setNewNavbar] = useState(initialNavbar);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, loading, user, logout } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const updatedNavbar = initialNavbar.map((item) => ({
      ...item,
      current: item.href === pathname,
    }));
    setNewNavbar(updatedNavbar);
  }, [pathname]);

  if (loading) return <div>Loading...</div>;

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

      {isAuthenticated ? (
        <h1 className="text-green-400">USER IS LOGGED IN!!!</h1>
      ) : (
        <h2 className="text-red-400">TRY LOGIN</h2>
      )}

      {/* Authentication Buttons */}
      <div className="flex items-center space-x-4">
        {!isAuthenticated ? (
          <>
            <Link
              href="/login"
              className="rounded-md px-3 py-2 text-base font-medium text-gray hover:text-secondary"
            >
              Увійти
            </Link>
            <Link
              href="/signup"
              className="rounded-md px-3 py-2 text-base font-medium text-primary bg-yellow hover:bg-deepYellow hover:text-gray"
            >
              Зареєструватися
            </Link>
          </>
        ) : (
          <div className="flex items-center">
            {/* Notification */}
            <button className="relative">
              <Image
                src={notification_icon}
                alt="Notification"
                className="h-6 w-6"
              />
            </button>
            {/* Profile Dropdown */}
            <div className="ml-4 relative">
              <button>
                <Image
                  src={user_pic}
                  alt="User Profile"
                  className="h-8 w-8 rounded-full"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <div className="px-4 py-2 text-sm text-gray-500">
                    {user?.username}
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Профіль
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Налаштування
                  </Link>
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      logout();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Вийти
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
