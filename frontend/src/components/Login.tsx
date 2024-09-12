import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const BACKEND_HOST = process.env.BACKEND_HOST || 'http://localhost:3000';

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_HOST}/auth/login`, {
        username,
        password,
      });
      console.log('Login successful', response.data);
      localStorage.setItem('token', response.data);
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
