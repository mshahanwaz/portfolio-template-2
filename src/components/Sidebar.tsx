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
  UserIcon,
} from '@/assets/vectors/icons';
import ChevronRightIcon from '@/assets/vectors/icons/ChevronRightIcon';
import { motion } from 'framer-motion';
import GitHubIcon from '@/assets/vectors/icons/GitHubIcon';
import LinkedInIcon from '@/assets/vectors/icons/LinkedInIcon';
import InstagramIcon from '@/assets/vectors/icons/InstagramIcon';
import ArrowUpRightIcon from '@/assets/vectors/icons/ArrowUpRightIcon';
import { SelectTheme } from './SelectTheme';
import TwitterIcon from '@/assets/vectors/icons/TwitterIcon';

type Theme = 'light' | 'dark' | 'system';

export default function Sidebar({ hidden, setHidden }: Props) {
  const { pathname } = useRouter();

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
    // {
    //   name: 'Timeline',
    //   href: '/timeline',
    //   icon: <LogIcon className="h-4 w-4" />,
    //   active: pathname.includes('/timeline'),
    // },
    // {
    //   name: 'Blogs',
    //   href: '/blogs',
    //   icon: <PenIcon className="h-4 w-4" />,
    //   active: pathname.includes('/blogs'),
    // },
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
      name: 'Twitter',
      href: 'https://twitter.com/imshahanwaz',
      icon: <TwitterIcon className="h-4 w-4" />,
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

  const [theme, setTheme] = React.useState<Theme>('system');
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsOpen(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleOpen = () => {
    if (isMobile) {
      setHidden(!hidden);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleThemeChange = (e: any) => {
    if (typeof window !== 'undefined') {
      const { value } = e.target;
      console.log(value);
      setTheme(value);
      if (value === 'dark') {
        window.localStorage.setItem('theme', 'dark');
      } else if (value === 'light') {
        window.localStorage.setItem('theme', 'light');
      } else {
        window.localStorage.removeItem('theme');
      }
      fetchSystemTheme();
    }
  };

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

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', () =>
          setIsMobile(window.innerWidth < 768),
        );
      }
    };
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      });
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', () => {});
      }
    };
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme');
      if (typeof localTheme === 'string') {
        setTheme(localTheme as Theme);
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

  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: '-100%' }}
        animate={{
          opacity: 1,
          x: isMobile ? (hidden ? '-100%' : 0) : 0,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        className="fixed top-0 left-0 z-40 flex h-screen flex-col border-r border-gray-200 bg-gray-100 text-gray-500 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 md:sticky"
      >
        <motion.nav
          animate={{
            width: isOpen ? 264 : 64,
            transition: { duration: 0.1, ease: 'easeOut' },
          }}
          className="flex flex-1 flex-col gap-2 p-3"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              title={link.name}
              onClick={() => setHidden(isMobile)}
            >
              <motion.div
                animate={{
                  width: isOpen ? 240 : 40,
                  transition: { duration: 0.1, ease: 'easeOut' },
                }}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50',
                  link.active &&
                    'bg-gray-200 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-50',
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
              title={link.name}
            >
              <motion.div
                animate={{
                  width: isOpen ? 240 : 40,
                  transition: { duration: 0.1, ease: 'easeOut' },
                }}
                className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50"
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
          <SelectTheme {...{ theme, isOpen, handleThemeChange }} />
          <button
            onClick={handleOpen}
            className="group mt-auto flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50"
          >
            <span
              className={cn('flex h-6 items-center', isOpen && 'rotate-180')}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </span>
            <motion.div
              animate={{
                opacity: isOpen ? 1 : 0,
                transition: { duration: 0.1, ease: 'easeOut' },
              }}
              className={cn(
                'flex w-full items-center justify-between',
                !isOpen && 'hidden',
              )}
            >
              <span>Close</span>
              <span className="text-xs font-semibold leading-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400">
                ESC
              </span>
            </motion.div>
          </button>
        </motion.nav>
      </motion.aside>
      <motion.div
        animate={{
          opacity: hidden ? 0 : 1,
          transition: { duration: 0.3, ease: 'linear' },
        }}
        className={cn(
          'fixed top-0 right-0 z-30 h-full w-full bg-gray-900/50 md:hidden',
          hidden && 'hidden',
        )}
        onClick={handleOpen}
      />
    </>
  );
}

type Props = {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
};
