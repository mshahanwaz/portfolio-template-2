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
      <main className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="">{children}</div>
      </main>
      <MiniSidebar />
    </div>
  );
}
