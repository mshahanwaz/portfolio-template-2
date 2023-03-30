/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

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
      <div className="container px-4 py-16 flex flex-col gap-12">
        <h1 className="text-9xl">
          <div>Photography</div>
        </h1>
        <div className="grid grid-cols-2 gap-5">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <img
                key={i}
                className="rounded-2xl border border-gray-200 p-2 w-full object-cover bg-gray-50 hover:bg-gray-100"
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt="my photo"
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
}
