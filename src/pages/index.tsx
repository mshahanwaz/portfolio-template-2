/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import Button from '@/components/Button';
import cn from '@/core/utils/cn';
import { DownloadIcon } from '@/assets/vectors/icons';
import example from '@/assets/images/example.png';
import Meta from '@/components/Meta';
import Animate from '@/components/Animate';

const GRID_SPANS = [
  'row-start-1 row-end-5 col-start-1 col-end-6',
  'row-start-1 row-end-3 col-start-6 col-end-8',
  'row-start-3 row-end-5 col-start-6 col-end-8',
  'row-start-5 row-end-7 col-start-1 col-end-4',
  'row-start-5 row-end-7 col-start-4 col-end-8',
];

export default function Home() {
  return (
    <>
      <Meta />

      <Animate className="space-y-20">
        <div className="wrapper flex flex-col gap-12 px-4 py-16">
          <h1>M. Shahanwaz</h1>
          <div className="flex flex-col-reverse items-start gap-8 lg:flex-row">
            <div className="w-full space-y-8 lg:w-2/3">
              <p>
                Hello there 👋, I am{' '}
                <strong className="font-semibold">Mohammad Shahanwaz</strong>, a
                fullstack web developer based in Delhi, currently working at{' '}
                <Link
                  href="https://www.bosscoderacademy.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-indigo-600 hover:underline hover:underline-offset-4 dark:text-indigo-400"
                >
                  Bosscoder Academy
                </Link>{' '}
                as a Frontend Intern. I am mostly experienced in frontend web
                development and a bit in designing. I like to make friendly and
                user-centric UIs for the projects I work on and then make them
                come to life with the help of code. Along with that, I also love
                to do competitive programming to keep my logical skills sharp.
              </p>
              <Link
                href="https://drive.google.com/uc?id=1b9qWEM1gYSLXMobeuvu9Jnq6YhRDwX7P&export=download"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex items-center gap-4">
                  <DownloadIcon className="h-4 w-4" />
                  <span>Resume</span>
                </Button>
              </Link>
            </div>
            <div className="space-border w-full overflow-hidden lg:w-1/3">
              <div className="overflow-hidden rounded-3xl">
                <motion.img
                  onContextMenu={(e) => e.preventDefault()}
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                  className="aspect-video w-full rounded-lg object-cover md:aspect-video lg:aspect-square lg:max-h-[248px]"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                  alt="Mohammad Shahanwaz"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-16 py-16">
          <div className="wrapper space-y-3 px-4">
            <h3>Skills</h3>
            <p>
              I have worked with a variety of technologies and tools in my 2+ yr
              of professional journey. Here are some of them.
            </p>
          </div>
          <div className="border-b border-gray-200 bg-pattern py-[98px] dark:border-gray-700 dark:bg-pattern-dark">
            <Banner />
          </div>
        </div>
        <div className="wrapper space-y-16 px-4 py-16">
          <div className="space-y-3 px-4">
            <h3>Mini Gallery</h3>
            <p className="text-lg">
              I love to capture moments so here are some of my best shots from
              my phone camera.
            </p>
          </div>
          <div className="space-border overflow-hidden">
            <div className="flex flex-col gap-2 overflow-hidden rounded-3xl md:grid md:aspect-[7/6] md:grid-cols-7 md:grid-rows-6">
              {GRID_SPANS.map((span, index) => (
                <div
                  key={index}
                  className={cn(
                    span,
                    'overflow-hidden rounded-lg md:aspect-auto',
                  )}
                >
                  <motion.img
                    onContextMenu={(e) => e.preventDefault()}
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                    className="aspect-video h-full w-full object-cover"
                    src={example.src}
                    alt="Gallery photo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
}
