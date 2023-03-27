/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React from 'react';
import cn from '@/core/utils/cn';
import { useRouter } from 'next/router';
import {
  CameraIcon,
  ChevronLeftIcon,
  CPUIcon,
  HomeIcon,
  LogIcon,
  MailIcon,
  PenIcon,
  SunIcon,
  UserIcon,
} from '@/assets/svgs/icons';
import ChevronRightIcon from '@/assets/svgs/icons/ChevronRightIcon';

const navLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserIcon },
  { name: 'Projects', href: '/projects', icon: CPUIcon },
  { name: 'Timeline', href: '/timeline', icon: LogIcon },
  { name: 'Blogs', href: '/blogs', icon: PenIcon },
  { name: 'Photography', href: '/photography', icon: CameraIcon },
  {
    name: 'Contact',
    href: 'mailto:mohdshahanwaz55@gmail.com',
    icon: MailIcon,
  },
];

export default function Sidebar() {
  const [shrinked, setShrinked] = React.useState(false);
  const [activeNavLinkIndex, setActiveNavLinkIndex] = React.useState(0);

  const { pathname } = useRouter();

  React.useEffect(() => {
    const currentNavLinkIndex = navLinks.findIndex(
      (navLink) => navLink.href === '/' + pathname.split('/')[1]
    );
    setActiveNavLinkIndex(currentNavLinkIndex);
  }, []);

  const handleShrinkSidebar = () => {
    setShrinked(!shrinked);
  };

  return (
    <aside
      className={cn(
        'flex flex-col bg-gray-100/80 backdrop-blur-md border-r border-gray-200',
        shrinked ? 'w-fit' : 'w-60'
      )}
    >
      <nav className="flex-1 flex flex-col gap-2 p-3">
        {navLinks.map((navLink, navLinkIndex) => (
          <Link
            key={navLink.name}
            href={navLink.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow',
              navLinkIndex === activeNavLinkIndex
                ? 'bg-white text-black font-medium shadow'
                : 'text-gray-600'
            )}
            onClick={() => setActiveNavLinkIndex(navLinks.indexOf(navLink))}
          >
            <span className="h-6 flex items-center">
              <navLink.icon className="w-4 h-4" />
            </span>
            {!shrinked && <span>{navLink.name}</span>}
          </Link>
        ))}
        <button className="flex items-center px-3 py-2 gap-3 rounded-lg text-gray-600 hover:bg-white hover:text-black hover:shadow">
          <span className="h-6 flex items-center">
            <SunIcon className="w-4 h-4" />
          </span>
          {!shrinked && <span>Light theme</span>}
        </button>
        <button
          onClick={handleShrinkSidebar}
          className="mt-auto flex items-center px-3 py-2 gap-3 text-gray-600 hover:text-black"
        >
          <span className="h-6 flex items-center">
            {shrinked ? (
              <ChevronRightIcon className="w-4 h-4" />
            ) : (
              <ChevronLeftIcon className="w-4 h-4" />
            )}
          </span>
        </button>
      </nav>
    </aside>
  );
}
