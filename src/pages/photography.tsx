/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Head from 'next/head';

const IMAGES = [
  'https://images.unsplash.com/photo-1680151459595-1491bcaafbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80',
  'https://images.unsplash.com/photo-1680121231530-b8e6043e9448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  'https://images.unsplash.com/photo-1680201976645-a9aef59e8094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  'https://images.unsplash.com/photo-1679798237908-7b08ba087455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1680029532150-088cd9e9638c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  'https://images.unsplash.com/photo-1679823571624-85963f19724f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
  'https://images.unsplash.com/photo-1436892777614-be9a19edb568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
];

export default function photography() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz - Photography</title>
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
        <div className="flex flex-col gap-12 px-4 py-16">
          <h1 className="wrapper">Photography</h1>
          <div className="space-border overflow-hidden">
            <div className="flex flex-col gap-2 overflow-hidden rounded-3xl md:flex-row">
              <div className="flex flex-1 flex-col items-stretch gap-2">
                {IMAGES.map(
                  (img, i) =>
                    i % 3 === 1 && (
                      <div
                        key={i}
                        className="flex-1 overflow-hidden rounded-lg"
                      >
                        <motion.img
                          onContextMenu={(e) => e.preventDefault()}
                          whileHover={{ scale: 1.25 }}
                          transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                          className="h-full w-full object-cover"
                          src={img}
                          alt="gallery shots"
                        />
                      </div>
                    ),
                ).filter(Boolean)}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                {IMAGES.map(
                  (img, i) =>
                    i % 3 === 0 && (
                      <div
                        key={i}
                        className="flex-1 overflow-hidden rounded-lg"
                      >
                        <motion.img
                          onContextMenu={(e) => e.preventDefault()}
                          whileHover={{ scale: 1.25 }}
                          transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                          className="h-auto w-full object-cover"
                          src={img}
                          alt="gallery shots"
                        />
                      </div>
                    ),
                ).filter(Boolean)}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                {IMAGES.map(
                  (img, i) =>
                    i % 3 === 2 && (
                      <div
                        key={i}
                        className="flex-1 overflow-hidden rounded-lg"
                      >
                        <motion.img
                          onContextMenu={(e) => e.preventDefault()}
                          whileHover={{ scale: 1.25 }}
                          transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                          className="h-full w-full object-cover"
                          src={img}
                          alt="gallery shots"
                        />
                      </div>
                    ),
                ).filter(Boolean)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
