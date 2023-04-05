/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

const IMAGES = [
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://source.unsplash.com/random',
  'https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1468487422149-5edc5034604f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://source.unsplash.com/random',
];

export default function photography() {
  return (
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
        <h1 className="wrapper text-9xl">
          <div>Photography</div>
        </h1>
        <div className="space-border overflow-hidden">
          <div className="flex gap-2 overflow-hidden rounded-3xl">
            <div className="flex flex-1 flex-col gap-2">
              {IMAGES.map(
                (img, i) =>
                  i % 2 && (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <img
                        className="hover-scale w-full object-cover"
                        src={img}
                        alt="my photo"
                      />
                    </div>
                  ),
              ).filter(Boolean)}
            </div>
            <div className="flex flex-1 flex-col gap-2">
              {IMAGES.map(
                (img, i) =>
                  !(i % 2) && (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <img
                        className="hover-scale w-full object-cover"
                        src={img}
                        alt="my photo"
                      />
                    </div>
                  ),
              ).filter(Boolean)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
