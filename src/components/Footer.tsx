/* eslint-disable @next/next/no-img-element */
import ClockIcon from '@/assets/svgs/icons/ClockIcon';
import ReactIcon from '@/assets/svgs/icons/ReactIcon';
import React from 'react';
import nextjs from '@/assets/svgs/logos/nextjs.svg';
import tailwind from '@/assets/svgs/logos/tailwind.svg';

export default function Footer() {
  const [currentTime, setCurrentTime] = React.useState(
    new Date().toLocaleTimeString()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className="mt-20 text-center text-sm text-gray-600">
      <div className=" mx-auto flex w-full max-w-4xl flex-col items-center gap-1 p-8">
        <p className="text-base font-medium text-gray-900">
          M. Shahanwaz &copy; {new Date().getFullYear()}
        </p>
        <p className="inline-flex items-center">
          Built with{' '}
          <img
            className="mx-2 h-5 w-5 object-contain"
            src={nextjs.src}
            alt="nextjs"
          />{' '}
          NextJS and{' '}
          <img
            className="mx-2 h-5 w-5 object-contain"
            src={tailwind.src}
            alt="tailwind css"
          />{' '}
          TailwindCSS
        </p>
      </div>
    </footer>
  );
}
