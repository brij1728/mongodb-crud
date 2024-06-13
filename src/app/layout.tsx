import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MongoDB CRUD App',
  description: 'This is a MongoDB CRUD application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-3xl p-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
