import Logo from '@/assets/svgs/Logo';
import Link from 'next/link';
import React from 'react';
import {
  ClockIcon,
  HomeIcon,
  RocketLaunchIcon,
  SunIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import cn from '@/core/utils/cn';

const navigationLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/', icon: UserIcon },
  { name: 'Projects', href: '/', icon: RocketLaunchIcon },
  { name: 'Timeline', href: '/', icon: ClockIcon },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = React.useState(0);

  function isActive(i: number) {
    return i === activeLink;
  }

  return (
    <aside className="flex flex-col w-60 bg-gray-100 border-r border-gray-200">
      <div className="h-16 px-6 py-4 flex items-center gap-4 border-b border-gray-200">
        <Logo className="w-6 h-6" pathClassName="fill-black" />
        <h3 className="text-lg font-medium">M. Shahanwaz</h3>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-2 backdrop-blur-md">
        {navigationLinks.map((item, i) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow',
              isActive(i) ? 'bg-white text-black shadow' : 'text-gray-600'
            )}
            onClick={() => setActiveLink(navigationLinks.indexOf(item))}
          >
            <span className="w-6 h-6 flex">
              <item.icon className="w-5 h-5 m-auto" />
            </span>
            <span>{item.name}</span>
          </Link>
        ))}
        <button className="mt-auto flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-white hover:text-black hover:shadow">
          <span>
            <SunIcon className="w-5 h-5" />
          </span>
          <span>Light Mode</span>
        </button>
      </nav>
    </aside>
  );
}
