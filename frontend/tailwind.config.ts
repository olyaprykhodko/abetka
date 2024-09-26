import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16325B',
        secondary: '#227B94',
        background: '#F2F4F7',
        text: '#d1d5db',
        textSecondary: '#6E6E6E',
        link: '#78B7D0',
        success: '#27AE60',
        error: '#E74C3C',
        yellow: '#f4ca44',
        deepYellow: '#ebc254',
        border: '#E0E0E0',
      },
      fontFamily: {
        openSans: ['Open Sans'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      fontStyle: {
        normal: 'normal',
        italic: 'italic',
      },
    },
  },
  plugins: [],
};
export default config;
