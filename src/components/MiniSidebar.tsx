import cn from '@/core/utils/cn';
import Equalizer from './Equalizer';
import GitHubIcon from '@/assets/svgs/icons/GitHubIcon';
import LinkedInIcon from '@/assets/svgs/icons/LinkedInIcon';
import TwitterIcon from '@/assets/svgs/icons/TwitterIcon';
import InstagramIcon from '@/assets/svgs/icons/InstagramIcon';

const links = [
  {
    href: '#',
    icon: (props: any) => <Equalizer {...props} />,
  },
  {
    href: '#',
    icon: (props: any) => <GitHubIcon {...props} />,
  },
  {
    href: '#',
    icon: (props: any) => <LinkedInIcon {...props} />,
  },
  {
    href: '#',
    icon: (props: any) => <TwitterIcon {...props} />,
  },
  {
    href: '#',
    icon: (props: any) => <InstagramIcon {...props} />,
  },
];

export default function MiniSidebar() {
  return (
    <aside className="flex w-16 flex-col items-center gap-2 border-l border-gray-200 bg-gray-100/80 p-2 backdrop-blur-md dark:border-gray-700">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={cn(
            'group grid aspect-square w-full place-items-center rounded-full border border-gray-200 bg-gray-100 hover:bg-gray-200 dark:border-gray-700',
            index === 1 && 'mt-auto',
          )}
        >
          {link.icon({
            className: 'w-5 h-5 fill-gray-600 group-hover:fill-black',
            // playing: true,
          })}
        </a>
      ))}
    </aside>
  );
}
