/* eslint-disable @next/next/no-img-element */
import MainLayout from '@/layouts/MainLayout';

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
    <MainLayout>
      <div className="">
        <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-10">
          <h1 className="text-9xl font-semibold">
            <span>Projects</span>
          </h1>
          <div className="grid grid-cols-1 gap-5">
            {/* write jsx below for each project in portfolio */}
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex gap-4 bg-gray-100 p-4 rounded-md"
              >
                <div className="max-w-[200px]">
                  <img
                    className="w-full aspect-square object-cover rounded-lg"
                    src={project.image}
                    alt="project"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <p className="text-gray-500">{project.description}</p>
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
      </div>
    </MainLayout>
  );
}
