/* eslint-disable @next/next/no-img-element */
import { GitHubIcon } from '@/assets/svgs/icons';
import ArrowUpRightIcon from '@/assets/svgs/icons/ArrowUpRightIcon';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const PROJECTS = [
  {
    title: 'Noto App',
    description:
      'A simple and minimal notes + todo taking application with CRUD functionality along with custom key bindings.',
    image: [
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
    link: 'https://noto-app.vercel.app/',
    github: 'https://github.com/mshahanwaz/noto-app',
  },
  {
    title: 'Portfolio v4',
    description:
      'Newest iteration of my simple, aesthetic and minimal personal portfolio website to showcase my work and experience.',
    image: [
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
    link: 'https://mshahanwaz.vercel.app/',
    github: 'https://github.com/mshahanwaz/portfolio-v4',
  },
  {
    title: 'Amazon Clone',
    description:
      'Fully functional Amazon website clone with user authentication, payment gateway, and basket functionality.',
    image: [
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
    link: 'https://amazon-clone-mshahanwaz.vercel.app/',
    github: 'https://github.com/mshahanwaz/amazon-build',
  },
  {
    title: 'Image Processing in C++',
    description:
      'A terminal based image processing tool written in C++ to perform various image processing operations on .bmp file format.',
    image: [
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
    github: 'https://github.com/mshahanwaz/ip_cpp_2022',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - M. Shahanwaz</title>
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
          <h1>Projects</h1>
          <div className="space-y-12 text-gray-600 dark:text-gray-300">
            {PROJECTS.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="space-border overflow-hidden rounded-3xl"
              >
                <div className="flex flex-wrap gap-2 overflow-hidden rounded-3xl lg:grid lg:aspect-[2] lg:grid-cols-8 lg:grid-rows-6">
                  <div className="col-span-4 row-span-6 overflow-hidden rounded-lg">
                    <motion.img
                      onContextMenu={(e) => e.preventDefault()}
                      whileHover={{ scale: 1.25 }}
                      transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                      className="aspect-video h-full object-cover object-center lg:aspect-auto"
                      src={project.image[0]}
                      alt={project.title}
                    />
                  </div>
                  <div className="order-4 flex flex-col gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800 lg:order-2 lg:col-span-4 lg:row-span-3 lg:gap-2">
                    <h2 className="w-fit text-3xl font-bold text-gray-900 dark:text-gray-50">
                      {project.title}
                    </h2>
                    <p className="text-base">{project.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2 text-sm font-medium">
                      {project?.link && (
                        <Link
                          href={project.link}
                          className="flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-50"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span>Link</span>
                          <span>
                            <ArrowUpRightIcon className="h-4 w-4" />
                          </span>
                        </Link>
                      )}
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-1 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-50"
                        target="_blank"
                        rel="noreferrer noopener"
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
                        className="w-1/2 flex-1 overflow-hidden rounded-lg lg:col-span-2 lg:row-span-3 lg:w-full"
                      >
                        <motion.img
                          onContextMenu={(e) => e.preventDefault()}
                          whileHover={{ scale: 1.25 }}
                          transition={{
                            duration: 1,
                            ease: [0.5, 0.25, 0, 1],
                          }}
                          className="h-full object-cover object-center"
                          src={project.image[1 + index]}
                          alt={project.title}
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
