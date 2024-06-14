import './globals.css';

import { Inter } from 'next/font/google';
import Loading from './loading';
import type { Metadata } from 'next';
import { Navbar } from '@/components';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MongoDB CRUD App',
  description: 'This is a MongoDB CRUD application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-3xl p-4">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <div className="mt-8">{children}</div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
