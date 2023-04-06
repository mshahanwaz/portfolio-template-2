import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import cn from '@/core/utils/cn';
import localFont from 'next/font/local';

const inter = localFont({ src: '../assets/fonts/Inter.ttf' });

export default function MainLayout({ children }: any) {
  return (
    <div
      className={cn(
        'flex items-start bg-gray-50 dark:bg-gray-900',
        inter.className,
      )}
    >
      <Sidebar />
      <div className="w-full">
        <main className="text-lg">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
