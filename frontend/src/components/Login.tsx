import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const BACKEND_URL = process.env.REACT_APP_BACKEND;

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        username,
        password,
      });

      console.log('Login successful', response.data);

      Cookies.set('token', response.data.token, {
        // secure: true,
        sameSite: 'strict',
        expires: 7,
      });
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Увійти до акаунту </h2>
      <input
        type="text"
        placeholder="Ім'я користувача (логін)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Увійти</button>
    </div>
  );
};

export default Login;
