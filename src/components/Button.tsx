import cn from '@/core/utils/cn';
import React, { ReactNode } from 'react';

export default function Button({ children, className }: Props) {
  return (
    <button
      className={cn(
        'px-5 py-3 rounded-lg font-medium bg-black text-white ring-0 ring-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-900',
        className
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
