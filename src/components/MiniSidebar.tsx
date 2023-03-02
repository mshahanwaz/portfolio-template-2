import cn from '@/core/utils/cn';
import Equalizer from './Equalizer';
import GitHubIcon from '@/assets/svgs/GitHubIcon';
import LinkedInIcon from '@/assets/svgs/LinkedInIcon';
import TwitterIcon from '@/assets/svgs/TwitterIcon';
import InstagramIcon from '@/assets/svgs/InstagramIcon';

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
    <aside className="w-16 p-2 flex flex-col gap-2 items-center bg-gray-100 border-l border-gray-200 backdrop-blur-md">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={cn(
            'w-full aspect-square bg-gray-200 grid place-items-center rounded-full hover:bg-gray-300 group',
            index === 1 && 'mt-auto'
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
