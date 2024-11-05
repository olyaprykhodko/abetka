'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { SignUpData } from '../interfaces/signup-data.interface';
import { useAuth } from '../context/AuthContext';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpData>({
    username: '',
    email: '',
    password: '',
    role: 'student',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'role') {
      if (value === 'student' || value === 'teacher') {
        setFormData((prev) => ({
          ...prev,
          role: value,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await signUp(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Помилка реєстрації');
      console.error('Registration error', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <Image src="" alt="" className="mx-auto h-10 w-auto" /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Реєстрація нового користувача
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <div className="mb-4 p-3 text-sm text-red-500 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Ім&apos;я користувача (логін)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleFormData}
                  disabled={isLoading}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormData}
                  disabled={isLoading}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Пароль
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Пароль (цифри та латинські символи, довжина не менше 8)"
                  value={formData.password}
                  onChange={handleFormData}
                  disabled={isLoading}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Роль
              </label>

              <div className="relative mt-2">
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <select
                  value={formData.role}
                  onChange={handleFormData}
                  className="block w-full cursor-default appearance-none rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                >
                  <option value="student">Я студент</option>
                  <option value="teacher">Я викладач</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
          ${
            isLoading
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          }`}
            >
              {isLoading ? 'Реєстрація...' : 'Зареєструватися'}
            </button>
          </form>

          {error && <h3 className="text-red-500 mt-4">{error}</h3>}
        </div>
      </div>
    </>
  );
};

export default SignUp;
