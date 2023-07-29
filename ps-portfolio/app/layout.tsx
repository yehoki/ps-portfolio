import LoadingModal from '@/components/LoadingModal';
import './globals.css';
import { Lato } from 'next/font/google';
import ClientOnly from '@/components/ClientOnly';

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
    <html lang="en" className={`${lato.variable} scroll-smooth`}>
      <body className="bg-psBg text-psText selection:bg-psAccent ">
        {children}
      </body>
    </html>
  );
}
