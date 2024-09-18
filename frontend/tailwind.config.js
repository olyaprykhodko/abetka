/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16325B',
        secondary: '#227B94',
        background: '#F2F4F7',
        text: '#333333',
        textSecondary: '#6E6E6E',
        link: '#78B7D0',
        success: '#27AE60',
        error: '#E74C3C',
        cardBackground: '#FFDC7F',
        border: '#E0E0E0',
      },
    },
  },
  plugins: [],
};
