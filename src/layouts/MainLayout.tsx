import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import localFont from 'next/font/local';
import React from 'react';

const inter = localFont({ src: '../assets/fonts/Inter.ttf' });

export default function MainLayout({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsSidebarOpen(false);
        }
      });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', () => {});
      }
    };
  }, []);

  return (
    <div
      className={cn(
        'flex items-start bg-gray-50 dark:bg-gray-900',
        inter.className,
      )}
    >
      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
      <div className="w-full">
        <Header open={isSidebarOpen} setOpen={setIsSidebarOpen} />
        <main className="text-lg">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
