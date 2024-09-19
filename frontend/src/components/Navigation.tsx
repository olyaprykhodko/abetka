import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const navbar = [
  { name: 'Головна', to: '/', current: true },
  { name: 'Знайти репетитора', to: '/find-teacher', current: false },
  { name: 'Вартість уроків', to: '/lessons', current: false },
  { name: 'Про нас', to: '/about', current: false },
];

const Navigation: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [newNavbar, setNewNavbar] = useState(navbar);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
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

  useEffect(() => {
    const updatedNavbar = newNavbar.map((item) => ({
      ...item,
      current: item.to === location.pathname,
    }));
    setNewNavbar(updatedNavbar);
  }, [location.pathname]);

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
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img alt="Abetka" src="/home-logo.png" className="h-8 w-auto" />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-16">
          {newNavbar.map((item) => (
            <Link
              key={item.name}
              to={item.to}
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
                to="/login"
                className="rounded-md px-3 py-2 text-sm font-medium text-text hover:text-white"
              >
                Увійти
              </Link>
              <Link
                to="/register"
                className="rounded-md px-3 py-2 text-sm font-medium text-primary bg-yellow hover:bg-deepYellow"
              >
                Зареєструватися
              </Link>
            </>
          ) : (
            <div className="flex items-center">
              {/* Notification */}
              <button className="relative">
                <img
                  src="/notification-icon.png"
                  alt="Notification"
                  className="h-6 w-6"
                />
              </button>
              {/* Profile Dropdown */}
              <div className="ml-4 relative">
                <button onClick={toggleMenu}>
                  <img
                    src="/user.png"
                    alt="User Profile"
                    className="h-8 w-8 rounded-full"
                  />
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Профіль
                    </Link>
                    <Link
                      to="/settings"
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
