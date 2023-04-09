/* eslint-disable @next/next/no-img-element */
import MenuIcon from '@/assets/svgs/icons/MenuIcon';
import Link from 'next/link';

export default function Header({ hidden, setHidden }: any) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-gray-200 bg-gray-100/80 px-4 py-3 text-gray-900 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-50 md:hidden">
      <button className="p-2" onClick={() => setHidden(!hidden)}>
        <MenuIcon className="h-5 w-5" />
      </button>
      <Link href="/">
        <h2 className="text-lg font-semibold">M. Shahanwaz</h2>
      </Link>
    </header>
  );
}
