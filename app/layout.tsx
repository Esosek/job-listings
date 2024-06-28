import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

import './globals.css';
import favicon from '@/public/images/favicon.png';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Job listings',
  icons: { icon: favicon.src },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} text-primary`}>
        {children}
      </body>
    </html>
  );
}
