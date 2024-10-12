import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Абетка',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '80x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
