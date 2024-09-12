import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password,
        role,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
      console.log('Registration successful', response.data);
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div>
      <h2>Реєстрація нового користувача</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Ім'я користувача (логін)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль (цифри та латинські символи, довжина не менше 8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'student' | 'teacher')}
        >
          <option value="student">Я студент</option>
          <option value="teacher">Я викладач</option>
        </select>
        <button onSubmit={handleRegister}>Зареєструватися</button>
      </form>
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default Register;
