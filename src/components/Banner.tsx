import {
  ts,
  redux,
  recoil,
  nodejs,
  mongodb,
  firebase,
  express,
  tailwind,
  nextjs,
  reactjs,
  mui,
  github,
  gitlab,
  vscode,
} from '@/assets/vectors/logos';
import cn from '@/core/utils/cn';
import Image from 'next/image';

const TECHNOLOGIES = [
  {
    src: reactjs.src,
    name: 'ReactJS',
  },
  {
    src: nextjs.src,
    name: 'NextJS',
    invert: true,
  },
  {
    src: ts.src,
    name: 'TypeScript',
  },
  {
    src: tailwind.src,
    name: 'TailwindCSS',
  },
  {
    src: mui.src,
    name: 'Material UI',
  },

  {
    src: redux.src,
    name: 'Redux',
  },
  {
    src: recoil.src,
    name: 'Recoil',
    invert: true,
  },
  {
    src: nodejs.src,
    name: 'NodeJS',
  },
  {
    src: express.src,
    name: 'ExpressJS',
  },
  {
    src: mongodb.src,
    name: 'MongoDB',
  },
  {
    src: firebase.src,
    name: 'Firebase',
  },
  {
    src: github.src,
    name: 'GitHub',
    invert: true,
  },
  {
    src: gitlab.src,
    name: 'GitLab',
  },
  {
    src: vscode.src,
    name: 'VSCode',
  },
];

export default function Banner() {
  return (
    <div className="group relative h-[60px] overflow-hidden">
      <div className="h-inherit group-hover:pause absolute top-0 left-0 animate-banner whitespace-nowrap">
        {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
          <div
            key={index}
            className="h-inherit inline-flex min-w-[300px] items-center justify-center gap-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
            title={tech.name}
          >
            <div className="h-inherit relative aspect-square">
              <Image
                className={cn(
                  'h-inherit inline max-w-none',
                  tech.invert && 'dark:invert',
                )}
                src={tech.src}
                alt={tech.name}
                fill
              />
            </div>
            <span className="text-lg font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
