import './globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata = {
  title: 'Patryk Sienniak',
  description: 'Patryk Sienniak: Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
