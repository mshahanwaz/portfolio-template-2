import cn from '@/core/utils/cn';

const musicBars = [
  {
    delay: '300ms',
    height: '10px',
  },
  {
    delay: '700ms',
    height: '18px',
  },
  {
    delay: '500ms',
    height: '10px',
  },
];

export default function Equalizer({ playing }: Props) {
  return (
    <div className="m-auto flex items-center gap-1">
      {musicBars.map((bar, index) => (
        <div
          key={index}
          className={cn(
            'w-0.5 bg-gray-600 group-hover:bg-black',
            playing ? 'animate-equalizer' : 'animate-none'
          )}
          style={{ animationDelay: bar.delay, height: bar.height }}
        />
      ))}
    </div>
  );
}

export type Props = {
  playing?: boolean;
};
