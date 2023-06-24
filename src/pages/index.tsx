import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/components/Banner';
import Button from '@/components/Button';
import cn from '@/core/utils/cn';
import { DownloadIcon } from '@/assets/vectors/icons';
import profile_pic from '@/assets/images/profile_pic.png';
import Meta from '@/components/Meta';
import Animate from '@/components/Animate';
import rajasthan_1 from '@/assets/images/photography/rajasthan_1.jpg';
import rajasthan_5 from '@/assets/images/photography/rajasthan_5.jpg';
import delhi_1 from '@/assets/images/photography/delhi_1.jpg';
import delhi_2 from '@/assets/images/photography/delhi_2.jpg';
import goa_1 from '@/assets/images/photography/goa_1.jpg';

const GRID_SPANS = [
  'row-start-1 row-end-5 col-start-1 col-end-6',
  'row-start-1 row-end-3 col-start-6 col-end-8',
  'row-start-3 row-end-5 col-start-6 col-end-8',
  'row-start-5 row-end-7 col-start-1 col-end-4',
  'row-start-5 row-end-7 col-start-4 col-end-8',
];

const PHOTOS = [rajasthan_1, rajasthan_5, delhi_1, delhi_2, goa_1];

export default function Home() {
  return (
    <>
      <Meta />

      <Animate className="space-y-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-16">
          <h1>M. Shahanwaz</h1>
          <div className="flex flex-col-reverse items-start gap-8 lg:flex-row">
            <div className="w-full space-y-8 lg:w-2/3">
              <p>
                Hello there 👋, I am <strong>Mohammad Shahanwaz</strong>, a
                fullstack web developer based in Delhi, currently working at{' '}
                <Link
                  href="https://www.bosscoderacademy.com/"
                  className="font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
                  target="_blank"
                >
                  Bosscoder Academy
                </Link>{' '}
                as a full-time software developer. I am mostly experienced in
                frontend web development and a bit in designing. I like to make
                friendly and user-centric UIs for the projects I work on and
                then make them come to life with some bunch of div&apos;s. Along
                with that, I also love to do competitive programming to keep up
                with my logical skills.
              </p>
              <Link
                href="https://drive.google.com/uc?id=1fzVJPfUibrSxIqS63to6bn3DRCeOBQ9L&export=download"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex items-center gap-4">
                  <DownloadIcon className="h-4 w-4" />
                  <span>Resume</span>
                </Button>
              </Link>
            </div>
            <div className="space-border w-full overflow-hidden lg:w-1/3">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  fill
                  className="object-cover"
                  src={profile_pic.src}
                  alt="Mohammad Shahanwaz"
                  onContextMenu={(e) => e.preventDefault()}
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-16 py-16">
          <div className="mx-auto w-full max-w-4xl space-y-3 px-4">
            <h3>Skills</h3>
            <p>
              I have worked with a variety of technologies and tools in the
              course of my professional journey. Here are some of them.
            </p>
          </div>
          <div className="border-b border-gray-200 bg-pattern py-[98px] dark:border-gray-700 dark:bg-pattern-dark">
            <Banner />
          </div>
        </div>
        <div className="mx-auto w-full max-w-4xl space-y-16 px-4 py-16">
          <div className="space-y-3 px-4">
            <h3>Mini Gallery</h3>
            <p>
              I love to capture unique and aesthetic nature photos. Here are
              some of my best shots from my phone camera.
            </p>
          </div>
          <div className="space-border overflow-hidden">
            <div className="flex flex-col gap-2 overflow-hidden rounded-3xl md:grid md:aspect-[7/6] md:grid-cols-7 md:grid-rows-6">
              {GRID_SPANS.map((span, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative aspect-square w-full overflow-hidden rounded-lg md:aspect-auto',
                    span,
                  )}
                >
                  <Image
                    fill
                    className="object-cover"
                    src={PHOTOS[index].src}
                    alt="gallery shots"
                    onContextMenu={(e) => e.preventDefault()}
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
}
