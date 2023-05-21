/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import Button from '@/components/Button';
import cn from '@/core/utils/cn';
import { DownloadIcon } from '@/assets/svgs/icons';
import data from 'public/data.json';

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
      <Head>
        <title>M. Shahanwaz</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="space-y-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' },
        }}
      >
        <div className="wrapper flex flex-col gap-12 px-4 py-16">
          <h1>{data.fullName}</h1>
          <div className="flex flex-col-reverse items-start gap-8 lg:flex-row">
            <div className="w-full space-y-8 lg:w-2/3">
              <p>{data.homepage.bio}</p>
              <Link
                href={data.resume}
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
                  src={data.profilePicture}
                  alt={data.fullName}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-16 py-16">
          <div className="wrapper space-y-3 px-4">
            <h3>Skills</h3>
            <p>{data.homepage.skills.description}</p>
          </div>
          <div className="border-b border-gray-200 bg-pattern py-[98px] dark:border-gray-700 dark:bg-pattern-dark">
            <Banner />
          </div>
        </div>
        <div className="wrapper space-y-16 px-4 py-16">
          <div className="space-y-3 px-4">
            <h3>Mini Gallery</h3>
            <p className="text-lg">{data.homepage.gallery.description}</p>
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
                    src={data.homepage.gallery.photos[index]}
                    alt="Gallery photo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
