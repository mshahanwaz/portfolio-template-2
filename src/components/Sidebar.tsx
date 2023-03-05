import Logo from '@/assets/svgs/icons/Logo';
import Link from 'next/link';
import React from 'react';
import {
  CameraIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeIcon,
  PencilIcon,
  RocketLaunchIcon,
  SunIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import cn from '@/core/utils/cn';
import { useRouter } from 'next/router';

const navigationLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserIcon },
  { name: 'Projects', href: '/projects', icon: RocketLaunchIcon },
  { name: 'Timeline', href: '/timeline', icon: ClockIcon },
  { name: 'Blogs', href: '/blogs', icon: PencilIcon },
  { name: 'Photography', href: '/photography', icon: CameraIcon },
  {
    name: 'Contact',
    href: 'mailto:mohdshahanwaz55@gmail.com',
    icon: EnvelopeIcon,
  },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = React.useState(0);

  function isActive(i: number) {
    return i === activeLink;
  }

  const router = useRouter();

  React.useEffect(() => {
    const index = navigationLinks.findIndex(
      (item) => item.href === '/' + router.pathname.split('/')[1]
    );
    console.log(index);
    setActiveLink(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className="flex flex-col w-60 bg-gray-100/80 backdrop-blur-md border-r border-gray-200">
      <div className="shrink-0 h-16 px-6 py-4 flex items-center gap-4 border-b border-gray-200">
        <Logo className="w-6 h-6" pathClassName="fill-black" />
        <h3 className="text-lg font-medium">M. Shahanwaz</h3>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-2">
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
