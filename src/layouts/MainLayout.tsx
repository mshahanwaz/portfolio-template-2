import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import localFont from 'next/font/local';
import React from 'react';

const inter = localFont({
  src: '../assets/fonts/Inter.ttf',
  variable: '--font-sans',
});

export default function MainLayout({ children }: Props) {
  const [hide, setHide] = React.useState<boolean>(true);

  return (
    <div
      className={cn(
        'flex items-start bg-gray-50 font-sans dark:bg-gray-900',
        inter.variable,
      )}
    >
      <Sidebar hidden={hide} setHidden={setHide} />
      <div className="w-full">
        <Header hidden={hide} setHidden={setHide} />
        <main className="text-lg">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};
