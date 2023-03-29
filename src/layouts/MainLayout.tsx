import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import localFont from 'next/font/local';
import React from 'react';

const inter = localFont({ src: '../assets/fonts/Inter.ttf' });

export default function MainLayout({ children }: any) {
  return (
    <div className={cn('bg-gray-50 flex items-start', inter.className)}>
      <Sidebar />
      <div className="w-full divide-y">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
