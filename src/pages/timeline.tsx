import cn from '@/core/utils/cn';
import Meta from '@/components/Meta';
import Animate from '@/components/Animate';

const TIMELINE = [
  {
    category: 'Lorem ipsum dolor sit amet',
    events: [
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?',
      },
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?',
      },
    ],
  },
  {
    category: 'Lorem ipsum dolor sit amet',
    events: [
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?',
      },
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?',
      },
    ],
  },
  {
    category: 'Lorem ipsum dolor sit amet',
    events: [
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?',
      },
      {
        date: '04 April, 2023',
        title: 'I started to go to school',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore facere a amet consectetur nemo veritatis nesciunt quibusdam expedita voluptas?',
      },
    ],
  },
];

const SIZE = 50;

export default function Timeline() {
  return (
    <>
      <Meta title="Photography - M. Shahanwaz" />

      <Animate className="space-y-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-16">
          <h1 className="text-center">Timeline</h1>
          <div className="relative">
            <div className="flex">
              <div style={{ width: `${SIZE}%` }} />
              <div
                className="flex flex-col"
                style={{ width: `${100 - SIZE}%` }}
              >
                <div className="dark:text-gray-2000 w-fit -translate-x-1/2 rounded-full border-2 border-gray-200 py-1 px-4 text-center text-sm font-medium text-gray-400 dark:border-gray-700">
                  2002: Let&apos;s go 🚀
                </div>
                <div className="h-20 w-0 -translate-x-1/2 border-l-2 border-dashed border-gray-200 dark:border-gray-700" />
              </div>
            </div>
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative flex">
                <div
                  className="space-y-2 py-6 pr-4"
                  style={{ width: `${SIZE}%` }}
                >
                  <div className="h-5 w-full" />
                  <div className="text-base font-medium text-gray-500 dark:text-gray-400 sm:text-lg">
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
                        'group relative flex flex-col gap-2 pl-6 pt-6',
                        eventIndex === item.events.length - 1 &&
                          index !== TIMELINE.length - 1
                          ? 'pb-12'
                          : 'pb-6',
                      )}
                    >
                      <div className="text-sm font-medium text-gray-500">
                        {event.date}
                      </div>
                      <h2 className="relative text-lg font-bold tracking-tight transition-transform duration-1000 before:absolute before:-left-6 before:top-2 before:z-10 before:h-4 before:w-4 before:-translate-x-1/2 before:rounded-full before:bg-gray-300 before:content-[''] after:absolute after:-left-6 after:top-3 after:z-10 after:h-2 after:w-2 after:-translate-x-1/2 after:scale-0 after:rounded-full after:bg-gray-500 after:transition-transform after:content-[''] group-hover:after:scale-100 dark:before:bg-gray-600 dark:after:bg-gray-400 lg:text-2xl">
                        {event.title}
                      </h2>
                      <p className="text-sm sm:text-base">
                        {event.description}
                      </p>
                      <div className="absolute top-0 left-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 dark:bg-gray-700" />
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
                <div className="h-20 w-0 -translate-x-1/2 border-l-2 border-dashed border-gray-200 dark:border-gray-700" />
                <div className="dark:text-gray-2000 w-fit -translate-x-1/2 rounded-full border-2 border-gray-200 py-1 px-4 text-sm font-medium text-gray-400 dark:border-gray-700">
                  More stuffs on the way...
                </div>
              </div>
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
}
