import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import localFont from 'next/font/local';

const inter = localFont({ src: '../assets/fonts/Inter.ttf' });

export default function MainLayout({ children }: any) {
  return (
    <div className={cn('flex items-start bg-gray-50', inter.className)}>
      <Sidebar />
      <div className="w-full divide-y">
        <main className="text-lg">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
