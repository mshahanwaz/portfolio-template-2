import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MiniSidebar from '@/components/MiniSidebar';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import { Sora } from 'next/font/google';
import React from 'react';

const sora = Sora({
  subsets: ['latin'],
});

export default function MainLayout({ children }: any) {
  return (
    <div className={cn('flex h-screen', sora.className)}>
      <Sidebar />
      <div className="bg-gray-50 flex-1 flex flex-col overflow-auto">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <MiniSidebar />
    </div>
  );
}
