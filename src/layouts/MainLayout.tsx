import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import localFont from 'next/font/local';
import React from 'react';
import { Fira_Code } from 'next/font/google';

const inter = localFont({
  src: '../assets/fonts/Inter.ttf',
  variable: '--font-sans',
});
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' });

export default function MainLayout({ children }: any) {
  const [isSidebarHidden, setIsSidebarHidden] = React.useState(true);

  return (
    <div
      className={cn(
        'flex items-start bg-gray-50 font-sans dark:bg-gray-900',
        inter.variable,
        firaCode.variable,
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
