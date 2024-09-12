import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registered = localStorage.getItem('registered');
    if (registered === 'true') {
      setIsRegistered(true);
      localStorage.removeItem('registered');
    }
  }, []);

  return (
    <>
      <div className="">
        <Link to="/register">Зареєструватись</Link>
        <Link to="/login">Увійти до акаунту</Link>
      </div>
      {isRegistered && (
        <h4 className="text-center text-xl font-bold text-blue-500">
          Реєстрація пройшла успішно!
        </h4>
      )}
      <h1>Вітаємо в онлайн-школі "Абетка"</h1>
    </>
  );
};

export default Home;
