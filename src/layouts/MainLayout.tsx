import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children }: any) {
  return (
    <div className={cn('bg-gray-50 flex items-start', inter.className)}>
      <Sidebar />
      <div className="w-full divide-y">
        <main className="mx-auto max-w-4xl w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
