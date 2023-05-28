/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import example from '@/assets/images/example.png';
import Meta from '@/components/Meta';
import Animate from '@/components/Animate';

const IMAGES = Array(10).fill(example.src);

export default function photography() {
  return (
    <>
      <Meta title="Photography - M. Shahanwaz" />

      <Animate className="space-y-20">
        <div className="flex flex-col gap-12 px-4 py-16">
          <h1 className="mx-auto w-full max-w-4xl">Photography</h1>
          <div className="space-border overflow-hidden">
            <div className="flex flex-col gap-2 overflow-hidden rounded-3xl md:flex-row">
              <div className="flex flex-1 flex-col items-stretch gap-2">
                {IMAGES.map(
                  (img, i) =>
                    i % 2 === 0 && (
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
                    i % 2 === 1 && (
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
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
}
