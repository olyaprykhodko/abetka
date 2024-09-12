import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password,
        role,
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <h2>Реєстрація нового користувача</h2>
      <input
        type="text"
        placeholder="Ім'я користувача (логін)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль (цифри та латинські символи, довжина не менше 8"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as 'student' | 'teacher')}
      >
        <option value="student">Я студент</option>
        <option value="teacher">Я викладач</option>
      </select>
      <button onClick={handleRegister}>Зареєструватися</button>
    </div>
  );
};

export default Register;
