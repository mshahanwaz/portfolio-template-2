import nextjs from '@/assets/vectors/logos/nextjs.svg';
import tailwind from '@/assets/vectors/logos/tailwind.svg';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
      <div className=" mx-auto flex w-full max-w-4xl flex-col items-center gap-1 p-8">
        <p className="text-base font-medium text-gray-900 dark:text-gray-50">
          M. Shahanwaz &copy; {new Date().getFullYear()}
        </p>
        <div className="inline-flex items-center">
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
        </div>
      </div>
    </footer>
  );
}
