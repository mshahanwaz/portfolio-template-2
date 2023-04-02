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
  UserIcon
} from '@/assets/svgs/icons';
import ChevronRightIcon from '@/assets/svgs/icons/ChevronRightIcon';
import ChevronDownIcon from '@/assets/svgs/icons/ChevronDownIcon';
import { motion } from 'framer-motion';
import GitHubIcon from '@/assets/svgs/icons/GitHubIcon';
import LinkedInIcon from '@/assets/svgs/icons/LinkedInIcon';
import ExternalIcon from '@/assets/svgs/icons/ExternalIcon';
import InstagramIcon from '@/assets/svgs/icons/InstagramIcon';
import ArrowUpRightIcon from '@/assets/svgs/icons/ArrowUpRightIcon';

export default function Sidebar() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);

  const NAV_LINKS = [
    {
      name: 'Home',
      href: '/',
      icon: <HomeIcon className="h-4 w-4" />,
      active: pathname === '/'
    },
    {
      name: 'About',
      href: '/about',
      icon: <UserIcon className="h-4 w-4" />,
      active: pathname.includes('/about')
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <CPUIcon className="h-4 w-4" />,
      active: pathname.includes('/projects')
    },
    {
      name: 'Timeline',
      href: '/timeline',
      icon: <LogIcon className="h-4 w-4" />,
      active: pathname.includes('/timeline')
    },
    {
      name: 'Blogs',
      href: '/blogs',
      icon: <PenIcon className="h-4 w-4" />,
      active: pathname.includes('/blogs')
    },
    {
      name: 'Photography',
      href: '/photography',
      icon: <CameraIcon className="h-4 w-4" />,
      active: pathname.includes('/photography')
    }
  ];

  const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      href: 'https://github.com/mshahanwaz',
      icon: <GitHubIcon className="h-4 w-4" />,
      external: true
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mshahanwaz',
      icon: <LinkedInIcon className="h-4 w-4" />,
      external: true
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/imshahanwaz',
      icon: <InstagramIcon className="h-4 w-4" />,
      external: true
    },
    {
      name: 'Email',
      href: 'mailto:mohdshahanwaz55@gmail.com',
      icon: <MailIcon className="h-4 w-4" />,
      external: true
    }
  ];

  const SelectTheme = () => (
    <div className="group relative flex items-center rounded-lg px-3 py-2 hover:bg-white hover:text-gray-900 hover:shadow">
      <div className="flex w-full items-center gap-3">
        <span className="flex h-6 items-center">
          <SunIcon className="h-4 w-4" />
        </span>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.1, ease: 'easeOut' }
          }}
        >
          <span className={cn('whitespace-nowrap', !isOpen && 'hidden')}>
            Light theme
          </span>
        </motion.div>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.1, ease: 'easeOut' }
          }}
          className="ml-auto text-gray-400 group-hover:text-gray-500"
        >
          <span className={cn(!isOpen && 'hidden')}>
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </motion.div>
      </div>
      <select className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0">
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
    </div>
  );

  return (
    <motion.aside
      initial={{ opacity: 0, x: -200 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      className="sticky top-0 flex h-screen flex-col border-r border-gray-200 bg-gray-100 text-gray-600 backdrop-blur-md"
    >
      <motion.nav
        animate={{
          width: isOpen ? 264 : 64,
          transition: { duration: 0.1, ease: 'easeOut' }
        }}
        className="flex flex-1 flex-col gap-2 p-3"
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.href}>
            <motion.div
              animate={{
                width: isOpen ? 240 : 40,
                transition: { duration: 0.1, ease: 'easeOut' }
              }}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-900 hover:shadow',
                link.active && 'bg-white font-medium text-gray-900 shadow'
              )}
            >
              <span className="flex h-6 items-center">{link.icon}</span>
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  transition: { duration: 0.1, ease: 'easeOut' }
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
                transition: { duration: 0.1, ease: 'easeOut' }
              }}
              className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-900 hover:shadow"
            >
              <span className="flex h-6 items-center">{link.icon}</span>
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  transition: { duration: 0.1, ease: 'easeOut' }
                }}
              >
                <span className={cn(!isOpen && 'hidden')}>{link.name}</span>
              </motion.div>
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  transition: { duration: 0.1, ease: 'easeOut' }
                }}
                className="ml-auto text-gray-400 group-hover:text-gray-500"
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
          className="mt-auto flex items-center gap-3 px-3 py-2 hover:text-gray-900"
        >
          <span className={cn('flex h-6 items-center', isOpen && 'rotate-180')}>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </button>
      </motion.nav>
    </motion.aside>
  );
}
