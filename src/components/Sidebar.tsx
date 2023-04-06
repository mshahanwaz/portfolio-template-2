/* eslint-disable react-hooks/exhaustive-deps */
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
import ChevronRightIcon from '@/assets/svgs/icons/ChevronRightIcon';
import ChevronDownIcon from '@/assets/svgs/icons/ChevronDownIcon';
import { motion } from 'framer-motion';
import GitHubIcon from '@/assets/svgs/icons/GitHubIcon';
import LinkedInIcon from '@/assets/svgs/icons/LinkedInIcon';
import InstagramIcon from '@/assets/svgs/icons/InstagramIcon';
import ArrowUpRightIcon from '@/assets/svgs/icons/ArrowUpRightIcon';
import { capitalize } from '@/core/utils/string';
import MoonIcon from '@/assets/svgs/icons/MoonIcon';
import MonitorIcon from '@/assets/svgs/icons/MonitorIcon';

export default function Sidebar() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);
  const [theme, setTheme] = React.useState<Theme>('system');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme');
      if (localTheme === 'dark') {
        setTheme('dark');
      } else if (localTheme === 'light') {
        setTheme('light');
      } else {
        setTheme('system');
      }
    }
    function fetchSystemTheme() {
      if (typeof window !== 'undefined') {
        const localTheme = window.localStorage.getItem('theme');
        if (
          localTheme === 'dark' ||
          (!('theme' in window.localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }

    if (typeof window !== 'undefined') {
      fetchSystemTheme();
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', fetchSystemTheme);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', fetchSystemTheme);
      }
    };
  }, []);

  const handleThemeChange = (e: any) => {
    if (typeof window !== 'undefined') {
      const { value } = e.target;
      console.log(value);
      setTheme(value);
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
        window.localStorage.setItem('theme', 'dark');
      } else if (value === 'light') {
        document.documentElement.classList.remove('dark');
        window.localStorage.setItem('theme', 'light');
      } else {
        window.localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const NAV_LINKS = [
    {
      name: 'Home',
      href: '/',
      icon: <HomeIcon className="h-4 w-4" />,
      active: pathname === '/',
    },
    {
      name: 'About',
      href: '/about',
      icon: <UserIcon className="h-4 w-4" />,
      active: pathname.includes('/about'),
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <CPUIcon className="h-4 w-4" />,
      active: pathname.includes('/projects'),
    },
    {
      name: 'Timeline',
      href: '/timeline',
      icon: <LogIcon className="h-4 w-4" />,
      active: pathname.includes('/timeline'),
    },
    {
      name: 'Blogs',
      href: '/blogs',
      icon: <PenIcon className="h-4 w-4" />,
      active: pathname.includes('/blogs'),
    },
    {
      name: 'Photography',
      href: '/photography',
      icon: <CameraIcon className="h-4 w-4" />,
      active: pathname.includes('/photography'),
    },
  ];

  const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      href: 'https://github.com/mshahanwaz',
      icon: <GitHubIcon className="h-4 w-4" />,
      external: true,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mshahanwaz',
      icon: <LinkedInIcon className="h-4 w-4" />,
      external: true,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/imshahanwaz',
      icon: <InstagramIcon className="h-4 w-4" />,
      external: true,
    },
    {
      name: 'Email',
      href: 'mailto:mohdshahanwaz55@gmail.com',
      icon: <MailIcon className="h-4 w-4" />,
      external: true,
    },
  ];

  const SelectTheme = () => (
    <div className="group relative flex items-center rounded-lg px-3 py-2 hover:bg-gray-50 hover:text-gray-900 hover:shadow dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:hover:shadow-none">
      <div className="flex w-full items-center gap-3">
        <span className="flex h-6 items-center">
          {theme === 'dark' ? (
            <MoonIcon className="h-4 w-4" />
          ) : theme === 'light' ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MonitorIcon className="h-4 w-4" />
          )}
        </span>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.1, ease: 'easeOut' },
          }}
        >
          <span className={cn('whitespace-nowrap', !isOpen && 'hidden')}>
            {capitalize(theme)}
          </span>
        </motion.div>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.1, ease: 'easeOut' },
          }}
          className="ml-auto text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400"
        >
          <span className={cn(!isOpen && 'hidden')}>
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </motion.div>
      </div>
      <select
        value={theme}
        onChange={handleThemeChange}
        className="absolute top-0 left-0 z-10 h-full w-full cursor-pointer text-gray-900 opacity-0 dark:bg-gray-900 dark:text-gray-50"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );

  return (
    <motion.aside
      initial={{ opacity: 0, x: -200 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className="sticky top-0 flex h-screen flex-col border-r border-gray-200 bg-gray-100 text-gray-600 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
    >
      <motion.nav
        animate={{
          width: isOpen ? 264 : 64,
          transition: { duration: 0.1, ease: 'easeOut' },
        }}
        className="flex flex-1 flex-col gap-2 p-3"
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.href}>
            <motion.div
              animate={{
                width: isOpen ? 240 : 40,
                transition: { duration: 0.1, ease: 'easeOut' },
              }}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 hover:text-gray-900 hover:shadow dark:hover:bg-gray-900 dark:hover:text-gray-50',
                link.active &&
                  'bg-gray-50 font-medium text-gray-900 shadow dark:bg-gray-900 dark:text-gray-50',
              )}
            >
              <span className="flex h-6 items-center">{link.icon}</span>
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  transition: { duration: 0.1, ease: 'easeOut' },
                }}
              >
                <span className={cn(!isOpen && 'hidden')}>{link.name}</span>
              </motion.div>
            </motion.div>
          </Link>
        ))}
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            {...(link.external && { target: '_blank', rel: 'noreferrer' })}
          >
            <motion.div
              animate={{
                width: isOpen ? 240 : 40,
                transition: { duration: 0.1, ease: 'easeOut' },
              }}
              className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 hover:text-gray-900 hover:shadow dark:hover:bg-gray-900 dark:hover:text-gray-50"
            >
              <span className="flex h-6 items-center">{link.icon}</span>
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  transition: { duration: 0.1, ease: 'easeOut' },
                }}
              >
                <span className={cn(!isOpen && 'hidden')}>{link.name}</span>
              </motion.div>
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  transition: { duration: 0.1, ease: 'easeOut' },
                }}
                className="ml-auto text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400"
              >
                <span className={cn(!isOpen && 'hidden')}>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </motion.div>
            </motion.div>
          </a>
        ))}
        <SelectTheme />
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="mt-auto flex items-center gap-3 px-3 py-2 hover:text-gray-900 dark:hover:text-gray-50"
        >
          <span className={cn('flex h-6 items-center', isOpen && 'rotate-180')}>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </button>
      </motion.nav>
    </motion.aside>
  );
}

type Theme = 'light' | 'dark' | 'system';
