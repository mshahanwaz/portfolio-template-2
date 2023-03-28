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
import ChevronDownIcon from '@/assets/svgs/icons/ChevronDownIcon';
import { motion } from 'framer-motion';
import GitHubIcon from '@/assets/svgs/icons/GitHubIcon';
import LinkedInIcon from '@/assets/svgs/icons/LinkedInIcon';
import ExternalIcon from '@/assets/svgs/icons/ExternalIcon';
import InstagramIcon from '@/assets/svgs/icons/InstagramIcon';

export default function Sidebar() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);

  const NAV_LINKS = [
    {
      name: 'Home',
      href: '/',
      icon: <HomeIcon className="w-4 h-4" />,
      active: pathname === '/',
    },
    {
      name: 'About',
      href: '/about',
      icon: <UserIcon className="w-4 h-4" />,
      active: pathname.includes('/about'),
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <CPUIcon className="w-4 h-4" />,
      active: pathname.includes('/projects'),
    },
    {
      name: 'Timeline',
      href: '/timeline',
      icon: <LogIcon className="w-4 h-4" />,
      active: pathname.includes('/timeline'),
    },
    {
      name: 'Blogs',
      href: '/blogs',
      icon: <PenIcon className="w-4 h-4" />,
      active: pathname.includes('/blogs'),
    },
    {
      name: 'Photography',
      href: '/photography',
      icon: <CameraIcon className="w-4 h-4" />,
      active: pathname.includes('/photography'),
    },
  ];

  const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      href: 'https://github.com/mshahanwaz',
      icon: <GitHubIcon className="w-4 h-4" />,
      external: true,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mshahanwaz',
      icon: <LinkedInIcon className="w-4 h-4" />,
      external: true,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/imshahanwaz',
      icon: <InstagramIcon className="w-4 h-4" />,
      external: true,
    },
    {
      name: 'Email',
      href: 'mailto:mohdshahanwaz55@gmail.com',
      icon: <MailIcon className="w-4 h-4" />,
      external: true,
    },
  ];

  const SelectTheme = () => (
    <div className="group relative flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-white hover:text-black hover:shadow">
      <div className="w-full flex items-center gap-3">
        <span className="h-6 flex items-center">
          <SunIcon className="w-4 h-4" />
        </span>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.1, ease: 'easeOut' },
          }}
        >
          <span className={cn('whitespace-nowrap', !isOpen && 'hidden')}>
            Light theme
          </span>
        </motion.div>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.1, ease: 'easeOut' },
          }}
          className="ml-auto text-gray-400 group-hover:text-gray-500"
        >
          <span className={cn(!isOpen && 'hidden')}>
            <ChevronDownIcon className="w-4 h-4" />
          </span>
        </motion.div>
      </div>
      <select className="absolute inset-0 w-full h-full opacity-0 appearance-none cursor-pointer">
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
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className="sticky top-0 h-screen flex flex-col bg-gray-100 backdrop-blur-md border-r border-gray-200"
    >
      <motion.nav
        animate={{
          width: isOpen ? 264 : 64,
          transition: { duration: 0.1, ease: 'easeOut' },
        }}
        className="flex-1 flex flex-col gap-2 p-3"
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.href}>
            <motion.div
              animate={{
                width: isOpen ? 240 : 40,
                transition: { duration: 0.1, ease: 'easeOut' },
              }}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow',
                link.active
                  ? 'bg-white text-black font-medium shadow'
                  : 'text-gray-600'
              )}
            >
              <span className="h-6 flex items-center">{link.icon}</span>
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
              className="group flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-white hover:text-black hover:shadow"
            >
              <span className="h-6 flex items-center">{link.icon}</span>
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
                className="ml-auto text-gray-400 group-hover:text-gray-500"
              >
                <span className={cn(!isOpen && 'hidden')}>
                  <ExternalIcon className="w-4 h-4" />
                </span>
              </motion.div>
            </motion.div>
          </a>
        ))}
        <SelectTheme />
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="mt-auto flex items-center px-3 py-2 gap-3 text-gray-600 hover:text-black"
        >
          <span className={cn('h-6 flex items-center', isOpen && 'rotate-180')}>
            <ChevronRightIcon className="w-4 h-4" />
          </span>
        </button>
      </motion.nav>
    </motion.aside>
  );
}
