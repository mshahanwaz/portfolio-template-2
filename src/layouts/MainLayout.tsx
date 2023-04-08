import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import localFont from 'next/font/local';
import React from 'react';

const inter = localFont({ src: '../assets/fonts/Inter.ttf' });

export default function MainLayout({ children }: any) {
  const [isSidebarHidden, setIsSidebarHidden] = React.useState(true);

  return (
    <div
      className={cn(
        'flex items-start bg-gray-50 dark:bg-gray-900',
        inter.className,
      )}
    >
      <Sidebar hidden={isSidebarHidden} setHidden={setIsSidebarHidden} />
      <div className="w-full">
        <Header hidden={isSidebarHidden} setHidden={setIsSidebarHidden} />
        <main className="text-lg">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
