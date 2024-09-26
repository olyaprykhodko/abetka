'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import homeLogo from '../../public/home-logo.png';
import notificationIcon from '../../public/notification-icon.png';
import userLogo from '../../public/user.png';

const navbar = [
  { name: 'Головна', href: '/', current: true },
  { name: 'Знайти репетитора', href: '/teachers', current: false },
  { name: 'Вартість уроків', href: '/lessons', current: false },
  { name: 'Про нас', href: '/about', current: false },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newNavbar, setNewNavbar] = useState(navbar);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND;

  useEffect(() => {
    const updatedNavbar = newNavbar.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));
    setNewNavbar(updatedNavbar);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) console.log('Logout successful');
      else console.log('Logout failed');
    } catch (error) {
      console.error(error);
    }

    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <div className="bg-primary">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image src={homeLogo} alt="Abetka" className="h-8 w-auto" />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-16">
          {newNavbar.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                item.current
                  ? 'text-white bg-secondary'
                  : 'text-text hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link
                href="/login"
                className="rounded-md px-3 py-2 text-sm font-medium text-text hover:text-white"
              >
                Увійти
              </Link>
              <Link
                href="/register"
                className="rounded-md px-3 py-2 text-sm font-medium text-primary bg-yellow hover:bg-deepYellow"
              >
                Зареєструватися
              </Link>
            </>
          ) : (
            <div className="flex items-center">
              {/* Notification */}
              <button className="relative">
                <Image
                  src={notificationIcon}
                  alt="Notification"
                  className="h-6 w-6"
                />
              </button>
              {/* Profile Dropdown */}
              <div className="ml-4 relative">
                <button onClick={toggleMenu}>
                  <Image
                    src={userLogo}
                    alt="User Profile"
                    className="h-8 w-8 rounded-full"
                  />
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Профіль
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Налаштування
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700"
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
    </div>
  );
};
export default Navigation;
