'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const signUpStatus = localStorage.getItem('isRegistered');
    if (signUpStatus === 'true') {
      setIsRegistered(true);
      localStorage.removeItem('isRegistered');
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
      {/* {welcomeHeader} */}
      <div className="text-center mt-10">
        <h2 className="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight font-openSans font-300">
          Вітаємо в онлайн-школі Абетка
        </h2>
      </div>
    </>
  );
};

export default Home;
