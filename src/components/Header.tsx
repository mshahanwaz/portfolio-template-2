/* eslint-disable @next/next/no-img-element */
import MenuIcon from '@/assets/svgs/icons/MenuIcon';

export default function Header({ open, setOpen }: any) {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-gray-100/80 px-4 py-3 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80 md:hidden">
      <button
        className="p-1 text-gray-900 dark:text-gray-50"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="h-4 w-4" />
      </button>
    </header>
  );
}
