import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Home: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registered = Cookies.get('registered');
    if (registered === 'true') {
      setIsRegistered(true);
      Cookies.remove('registered');
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className=""></div>
      {isRegistered && (
        <h4 className="text-center text-xl font-bold text-secondary text-500 mt-5">
          Реєстрація пройшла успішно!
        </h4>
      )}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Вітаємо в онлайн-школі Абетка
        </h2>
      </div>
    </>
  );
};

export default Home;
