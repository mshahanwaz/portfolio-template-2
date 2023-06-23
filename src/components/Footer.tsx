import nextjs from '@/assets/vectors/logos/nextjs.svg';
import tailwind from '@/assets/vectors/logos/tailwind.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
      <div className=" mx-auto flex w-full max-w-4xl flex-col items-center gap-1 p-8">
        <p className="text-base font-medium text-gray-900 dark:text-gray-200">
          M. Shahanwaz &copy; {new Date().getFullYear()}
        </p>
        <div className="inline-flex items-center">
          Built with{' '}
          <Image
            className="mx-2 object-contain dark:invert"
            width={20}
            height={20}
            src={nextjs.src}
            alt="nextjs"
          />{' '}
          NextJS and{' '}
          <Image
            className="mx-2 object-contain"
            width={20}
            height={20}
            src={tailwind.src}
            alt="tailwind css"
          />{' '}
          TailwindCSS
        </div>
      </div>
    </footer>
  );
}
