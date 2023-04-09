import cn from '@/core/utils/cn';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, className }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(
        'rounded-lg bg-gray-900 px-5 py-3 font-semibold tracking-tight text-gray-50 ring-0 ring-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-4 dark:bg-gray-200 dark:text-gray-900 dark:ring-gray-600 dark:hover:bg-gray-50 sm:font-medium sm:tracking-normal',
        className,
      )}
    >
      {children}
    </motion.button>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
};
