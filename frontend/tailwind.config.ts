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
        primary: '#16325B', // deep blue
        secondary: '#227B94', // blue
        background: '#F2F4F7', // white-blue
        text: '#d1d5db', // white-grey
        textSecondary: '#6E6E6E', // deep grey
        link: '#78B7D0', // light blue
        success: '#27AE60', // green
        error: '#E74C3C', // red
        yellow: '#f4ca44',
        deepYellow: '#ebc254',
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
