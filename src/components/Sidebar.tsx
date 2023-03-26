import Link from 'next/link';
import React from 'react';
import cn from '@/core/utils/cn';
import { useRouter } from 'next/router';
import {
  CameraIcon,
  CPUIcon,
  HomeIcon,
  LogIcon,
  MailIcon,
  PenIcon,
  SunIcon,
  UserIcon,
} from '@/assets/svgs/icons';

const navigationLinks = [
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
  }, []);

  return (
    <aside className="flex flex-col w-60 bg-gray-100/80 backdrop-blur-md border-r border-gray-200">
      <nav className="flex-1 flex flex-col gap-2 p-2">
        {navigationLinks.map((item, i) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow',
              isActive(i) ? 'bg-white text-black font-medium shadow' : 'text-gray-600'
            )}
            onClick={() => setActiveLink(navigationLinks.indexOf(item))}
          >
            <span className="">
              <item.icon className="w-4 h-4 m-auto" />
            </span>
            <span>{item.name}</span>
          </Link>
        ))}
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-white hover:text-black hover:shadow">
          <span>
            <SunIcon className="w-4 h-4" />
          </span>
          <span>Light Mode</span>
        </button>
      </nav>
    </aside>
  );
}
