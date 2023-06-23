import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowUpRightIcon from '@/assets/vectors/icons/ArrowUpRightIcon';
import Meta from '@/components/Meta';
import Animate from '@/components/Animate';
import Image from 'next/image';
import cn from '@/core/utils/cn';
import noto from '@/assets/images/projects/noto.png';
import portfolio from '@/assets/images/projects/portfolio.png';
import amazon from '@/assets/images/projects/amazon.png';

const PROJECTS = [
  {
    title: 'Noto App',
    description:
      'A simple and minimal notes + todo taking application with CRUD functionality along with custom key bindings.',
    image: noto.src,
    link: 'https://noto-app.vercel.app/',
    github: 'https://github.com/mshahanwaz/noto-app',
  },
  {
    title: 'Portfolio v4',
    description:
      'Newest iteration of my simple, aesthetic and minimal personal portfolio website to showcase my work and experience.',
    image: portfolio.src,
    link: 'https://mshahanwaz.vercel.app/',
    github: 'https://github.com/mshahanwaz/portfolio-v4',
  },
  {
    title: 'Amazon Clone',
    description:
      'Fully functional Amazon website clone with user authentication, payment gateway, and basket functionality.',
    image: amazon.src,
    link: 'https://amazon-clone-mshahanwaz.vercel.app/',
    github: 'https://github.com/mshahanwaz/amazon-build',
  },
];

export default function Projects() {
  return (
    <>
      <Meta title="Projects - M. Shahanwaz" />

      <Animate>
        <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-16">
          <h1>Projects</h1>
          <div className="space-y-12 text-gray-600 dark:text-gray-300">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} index={i} project={project} />
            ))}
          </div>
        </div>
      </Animate>
    </>
  );
}

function ProjectCard({ project, index }: any) {
  return (
    <div
      className={cn(
        'relative flex flex-wrap gap-4 lg:flex-nowrap',
        index % 2 ? 'flex-row-reverse' : 'flex-row',
      )}
    >
      <div className="space-border w-full overflow-hidden">
        <div className="relative aspect-[1440/1024] overflow-hidden rounded-3xl">
          <Image
            fill
            className="object-cover"
            src={project.image}
            alt={project.title}
            onContextMenu={(e) => e.preventDefault()}
            loading="lazy"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="sticky top-4 h-fit space-y-4 rounded-3xl bg-gray-100 p-6 dark:bg-gray-800 lg:w-[600px]">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2 text-sm font-medium">
          {project?.link && (
            <Link
              href={project.link}
              className="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-50"
              target="_blank"
              rel="noreferrer"
            >
              <span>Link</span>
              <span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </Link>
          )}
          <Link
            href={project.github}
            className="flex items-center gap-1 rounded-full bg-gray-200 px-4 py-1 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span>
            <span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>
        <p className="text-base">{project.description}</p>
      </div>
    </div>
  );
}
