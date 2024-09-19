import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const navbar = [
  { name: 'Головна', to: '/', current: true },
  { name: 'Знайти репетитора', to: '/find-teacher', current: false },
  { name: 'Вартість уроків', to: '/pricelist', current: false },
  { name: 'Про нас', to: '/about', current: false },
];

const Navigation: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BACKEND;

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/user`, {
          withCredentials: true,
        });
        const { isAuthenticated } = response.data;
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${BACKEND_URL}/auth/logout`,
        {},
        { withCredentials: true },
      );
      Cookies.remove('jwt', { sameSite: 'strict', path: '/' });
      setIsAuthenticated(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            {/* <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <img
                src=""
                alt=""
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <img
                src=""
                alt=""
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </div> */}
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Abetka" src="/home-logo.png" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navbar.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      item.current
                        ? 'bg-secondary text-white'
                        : 'text-gray-300 hover:bg-link hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {isAuthenticated ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full text-gray-400 hover:bg-link focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Сповіщення</span>
                <img
                  // aria-hidden="true"
                  src="/notification-icon.png"
                  alt="Notification"
                  className="h-12 w-12"
                />
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={toggleMenu}
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Налаштування профілю</span>
                    <img
                      src="/user.png"
                      alt="Фото профілю"
                      className="h-12 w-12 rounded-full"
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Профіль
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Налаштування
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Вийти
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="ml-auto flex space-x-4">
              <div>
                <Link
                  to="/register"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-cardBackground"
                >
                  Зареєструватись
                </Link>
              </div>
              <div>
                <Link
                  to="/login"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-cardBackground"
                >
                  Увійти
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navbar.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
