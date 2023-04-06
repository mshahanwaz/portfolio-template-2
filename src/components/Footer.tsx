/* eslint-disable @next/next/no-img-element */
import nextjs from '@/assets/svgs/logos/nextjs.svg';
import tailwind from '@/assets/svgs/logos/tailwind.svg';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-300">
      <div className=" mx-auto flex w-full max-w-4xl flex-col items-center gap-1 p-8">
        <p className="text-base font-medium text-gray-900 dark:text-gray-50">
          M. Shahanwaz &copy; {new Date().getFullYear()}
        </p>
        <p className="inline-flex items-center">
          Built with{' '}
          <img
            className="mx-2 h-5 w-5 object-contain dark:invert"
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
