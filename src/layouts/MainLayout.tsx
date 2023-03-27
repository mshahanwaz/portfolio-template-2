import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children }: any) {
  return (
    <div className={cn('flex h-screen', inter.className)}>
      <Sidebar />
      <div className="bg-gray-50 flex-1 flex flex-col overflow-auto">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
