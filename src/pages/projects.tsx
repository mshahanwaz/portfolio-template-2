/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    link: 'https://google.com',
    github: 'https://github.com',
    techs: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    link: 'https://google.com',
    github: 'https://github.com',
    techs: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    link: 'https://google.com',
    github: 'https://github.com',
    techs: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
];

export default function Projects() {
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
      <div className="wrapper px-4 py-16 flex flex-col gap-12">
        <h1 className="text-9xl">
          <span>Projects</span>
        </h1>
        <div className="grid grid-cols-1 gap-5">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="flex gap-4 bg-gray-100 p-4 rounded-md"
            >
              <div className="w-80">
                <img
                  className="h-full inline object-center object-cover rounded-lg"
                  src={project.image}
                  alt="project"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold">
                    {projectIndex}. {project.title}
                  </h2>
                  <p className="text-gray-700">{project.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Techs</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Links</h3>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-200 px-2 py-1 rounded-md"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-200 px-2 py-1 rounded-md"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
