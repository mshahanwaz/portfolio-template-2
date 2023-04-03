import Head from 'next/head';
import { motion } from 'framer-motion';
import cn from '@/core/utils/cn';

const TIMELINE = [
  {
    category: 'Lorem ipsum dolor sit amet',
    events: [
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?'
      },
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?'
      }
    ]
  },
  {
    category: 'Lorem ipsum dolor sit amet',
    events: [
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?'
      },
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?'
      }
    ]
  },
  {
    category: 'Lorem ipsum dolor sit amet',
    events: [
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?'
      },
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?'
      }
    ]
  }
];

const SIZE = 40;

export default function Timeline() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz - Timeline</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="space-y-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' }
        }}
      >
        <div className="wrapper flex flex-col gap-12 px-4 py-16">
          <h1 className="text-9xl">
            <span>Timeline</span>
          </h1>
          <div className="relative text-gray-700">
            <div className="flex">
              <div style={{ width: `${SIZE}%` }} />
              <div
                className="flex flex-col"
                style={{ width: `${100 - SIZE}%` }}
              >
                <div className="w-fit -translate-x-1/2 rounded-full border-2 py-1 px-4 text-sm font-medium text-gray-600">
                  Begin
                </div>
                <div className="h-20 w-0 -translate-x-1/2 border-l-2 border-dashed" />
              </div>
            </div>
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative flex">
                <div className="space-y-2 p-6" style={{ width: `${SIZE}%` }}>
                  <div className="h-5 w-full" />
                  <div className="text-lg font-medium text-gray-900">
                    {item.category}
                  </div>
                </div>
                <div
                  className="flex flex-col"
                  style={{ width: `${100 - SIZE}%` }}
                >
                  {item.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={cn(
                        'group relative flex flex-col gap-2 px-6 pt-6',
                        eventIndex === item.events.length - 1 &&
                          index !== TIMELINE.length - 1
                          ? 'pb-12'
                          : 'pb-6'
                      )}
                    >
                      <div className="text-sm font-medium text-gray-500">
                        {event.date}
                      </div>
                      <h2 className="relative text-2xl font-bold tracking-tight duration-1000 before:absolute before:-left-6 before:top-2 before:z-10 before:h-4 before:w-4 before:-translate-x-1/2 before:rounded-full before:bg-gray-300 before:content-[''] after:absolute after:-left-6 after:top-3 after:z-10 after:h-2 after:w-2 after:-translate-x-1/2 after:scale-0 after:rounded-full after:bg-gray-500 after:transition-transform after:content-[''] group-hover:after:scale-100">
                        {event.title}
                      </h2>
                      <p className="text-base">{event.description}</p>
                      <div className="absolute top-0 left-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex">
              <div style={{ width: `${SIZE}%` }} />
              <div
                className="flex flex-col"
                style={{ width: `${100 - SIZE}%` }}
              >
                <div className="h-20 w-0 -translate-x-1/2 border-l-2 border-dashed" />
                <div className="w-fit -translate-x-1/2 rounded-full border-2 py-1 px-4 text-sm font-medium text-gray-600">
                  Cooking more stuffs...
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
