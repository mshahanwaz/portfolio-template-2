import Link from 'next/link';
import React from 'react';

const currentRoutes = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
];

export default function Header() {
  return (
    <header className="sticky top-0 shrink-0 h-16 px-6 flex items-center gap-4 bg-gray-100/80 backdrop-blur-md border-b border-gray-200 z-10">
      <div className="px-4 py-1 flex gap-2 items-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-sm border border-gray-200">
        {currentRoutes.map((route, index) => (
          <React.Fragment key={index}>
            <Link href={route.href} className="hover:text-black">
              {route.name}
            </Link>
            {index !== currentRoutes.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
