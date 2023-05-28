import React from 'react';
import cn from '@/core/utils/cn';
import { SunIcon } from '@/assets/vectors/icons';
import ChevronDownIcon from '@/assets/vectors/icons/ChevronDownIcon';
import { motion } from 'framer-motion';
import { capitalize } from '@/core/utils/string';
import MoonIcon from '@/assets/vectors/icons/MoonIcon';
import MonitorIcon from '@/assets/vectors/icons/MonitorIcon';

export const SelectTheme = ({ theme, isOpen, handleThemeChange }: any) => (
  <div className="group relative flex items-center rounded-lg px-3 py-2 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 ">
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
      className="absolute top-0 left-0 z-10 h-full w-full cursor-pointer text-gray-900 opacity-0 dark:bg-gray-700 dark:text-gray-50"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
);
