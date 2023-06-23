import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BLOGS = [
  {
    id: 1,
    slug: 'blog-1',
    title: 'Blog 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque ea rem, nostrum non et vero saepe quas repudiandae quis eos perspiciatis nemo, corrupti praesentium quasi veniam, facere laborum molestias.',
    date: '9 days ago',
  },
  {
    id: 2,
    slug: 'blog-2',
    title: 'Blog 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque ea rem, nostrum non et vero saepe.',
    date: '3 days ago',
  },
  {
    id: 3,
    slug: 'blog-3',
    title: 'Blog 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque ea rem, nostrum non et vero saepe quas repudiandae quis eos perspiciatis nemo, corrupti praesentium quasi veniam, facere laborum molestias.',
    date: '4 days ago',
  },
  {
    id: 4,
    slug: 'blog-4',
    title: 'Blog 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque ea rem, nostrum non et vero saepe quas repudiandae quis eos perspiciatis nemo, corrupti praesentium quasi veniam, facere laborum molestias.',
    date: '5 days ago',
  },
  {
    id: 5,
    slug: 'blog-5',
    title: 'Blog 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque ea rem, nostrum non et vero saepe quas repudiandae quis eos perspiciatis nemo, corrupti praesentium quasi veniam, facere laborum molestias.',
    date: '6 days ago',
  },
];

export default function Blogs() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz - Blogs</title>
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
          transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' },
        }}
      >
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-9xl">
            <span>Blogs</span>
          </h1>
          <div className="grid grid-cols-2 gap-12">
            {BLOGS.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="space-border overflow-hidden"
              >
                <div className="flex h-52 gap-2 overflow-hidden rounded-3xl">
                  <div className="aspect-square h-full w-32 shrink-0 rounded-lg bg-gray-100 dark:bg-gray-800" />
                  <div className="flex flex-col gap-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h2 className="block text-2xl">{blog.title}</h2>
                    <p className="block text-base line-clamp-3">
                      {blog.description}
                    </p>
                    <span className="mt-auto block text-sm text-gray-500 dark:text-gray-400">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
