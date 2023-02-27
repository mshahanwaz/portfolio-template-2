import Header from '@/components/Header';
import { PrimarySidebar, SecondarySidebar } from '@/components/Sidebar';
import React from 'react';

export default function MainLayout({ children }: any) {
  return (
    <div className="flex h-screen">
      <PrimarySidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="bg-gray-100 h-full overflow-auto">{children}</main>
      </div>
      <SecondarySidebar />
    </div>
  );
}
