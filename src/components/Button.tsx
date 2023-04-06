import cn from '@/core/utils/cn';
import React, { ReactNode } from 'react';

export default function Button({ children, className }: Props) {
  return (
    <button
      className={cn(
        'rounded-lg bg-gray-900 px-5 py-3 font-medium text-gray-50 ring-0 ring-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-4 dark:bg-gray-50 dark:text-gray-900 dark:ring-gray-600 dark:hover:bg-gray-100',
        className,
      )}
    >
      {children}
    </button>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
};
