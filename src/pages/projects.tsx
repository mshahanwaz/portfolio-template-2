/* eslint-disable @next/next/no-img-element */
import { GitHubIcon } from '@/assets/svgs/icons';
import ArrowUpRightIcon from '@/assets/svgs/icons/ArrowUpRightIcon';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const projects = [
  {
    title: 'Project 1',
    brief:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: [
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
    link: 'https://google.com',
    github: 'https://github.com',
    techs: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Project 1',
    brief:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: [
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
    link: 'https://google.com',
    github: 'https://github.com',
    techs: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz - Projects</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <h1 className="text-9xl">
            <span>Projects</span>
          </h1>
          <div className="space-y-12 text-gray-600 dark:text-gray-300">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="space-border overflow-hidden rounded-3xl"
              >
                <div className="grid aspect-[4/2] grid-cols-8 grid-rows-6 gap-2 overflow-hidden rounded-3xl">
                  <div className="col-span-4 row-span-6 overflow-hidden rounded-lg">
                    <motion.img
                      whileHover={{ scale: 1.25 }}
                      transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                      className="h-full object-cover object-center"
                      src={project.image[0]}
                      alt="project"
                    />
                  </div>
                  <div className="col-span-4 row-span-3 flex flex-col gap-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h2 className="w-fit text-3xl font-bold text-gray-900 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-700">
                      <Link href={`/projects/${projectIndex}`}>
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-base line-clamp-3">{project.brief}</p>
                    <div className="mt-auto flex flex-wrap gap-2 text-sm font-medium">
                      <Link
                        href={project.link}
                        className="flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-50"
                      >
                        <span>Link</span>
                        <span>
                          <ArrowUpRightIcon className="h-4 w-4" />
                        </span>
                      </Link>
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-1 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-50"
                      >
                        <span>Github</span>
                        <span>
                          <ArrowUpRightIcon className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  {Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="col-span-2 row-span-3 overflow-hidden rounded-lg"
                      >
                        <motion.img
                          whileHover={{ scale: 1.25 }}
                          transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                          className="h-full object-cover object-center"
                          src={project.image[1 + index]}
                          alt="project"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
