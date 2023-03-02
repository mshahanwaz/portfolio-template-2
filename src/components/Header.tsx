import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="h-16 p-4 flex items-center bg-gray-100 backdrop-blur-md border-b border-gray-200">
      <div className="inline-flex gap-2 items-center bg-gray-200 text-gray-600 rounded-full backdrop-blur text-sm px-4 py-1 hover:bg-gray-300">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <span>/</span>
        <Link href="/about" className="hover:text-black">
          About
        </Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-black">
          Projects
        </Link>
      </div>
    </header>
  );
}
