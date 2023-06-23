import Meta from '@/components/Meta';
import Animate from '@/components/Animate';
import delhi_1 from '@/assets/images/photography/delhi_1.jpg';
import delhi_2 from '@/assets/images/photography/delhi_2.jpg';
import goa_1 from '@/assets/images/photography/goa_1.jpg';
import goa_2 from '@/assets/images/photography/goa_2.jpg';
import goa_3 from '@/assets/images/photography/goa_3.jpg';
import goa_4 from '@/assets/images/photography/goa_4.jpg';
import goa_5 from '@/assets/images/photography/goa_5.jpg';
import goa_6 from '@/assets/images/photography/goa_6.jpg';
import rajasthan_1 from '@/assets/images/photography/rajasthan_1.jpg';
import rajasthan_2 from '@/assets/images/photography/rajasthan_2.jpg';
import rajasthan_3 from '@/assets/images/photography/rajasthan_3.jpg';
import rajasthan_4 from '@/assets/images/photography/rajasthan_4.jpg';
import rajasthan_5 from '@/assets/images/photography/rajasthan_5.jpg';
import Image from 'next/image';

const PHOTOS: any = [
  delhi_1,
  delhi_2,
  goa_1,
  goa_2,
  goa_3,
  goa_4,
  goa_5,
  goa_6,
  rajasthan_1,
  rajasthan_2,
  rajasthan_3,
  rajasthan_4,
  rajasthan_5,
];

export default function photography() {
  return (
    <>
      <Meta title="Photography - M. Shahanwaz" />

      <Animate className="space-y-20">
        <div className="flex flex-col gap-12 px-4 py-16">
          <h1 className="mx-auto w-full max-w-4xl">Photography</h1>
          <div className="space-border space-y-2 overflow-hidden rounded-3xl">
            <div className="space-y-2 overflow-hidden rounded-3xl">
              <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex-1 space-y-2">
                  {PHOTOS.map(
                    (img: any, i: number) =>
                      !(i % 2) &&
                      i !== PHOTOS.length - 1 && (
                        <div
                          key={i}
                          className="relative aspect-square w-full overflow-hidden rounded-lg"
                        >
                          <Image
                            fill
                            className="object-cover"
                            src={img.src}
                            alt="gallery shots"
                            onContextMenu={(e) => e.preventDefault()}
                            loading="lazy"
                            sizes="100vw"
                          />
                        </div>
                      ),
                  ).filter(Boolean)}
                </div>
                <div className="flex-1 space-y-2">
                  {PHOTOS.map(
                    (img: any, i: number) =>
                      i % 2 && (
                        <div
                          key={i}
                          className="relative aspect-square w-full overflow-hidden rounded-lg"
                        >
                          <Image
                            fill
                            className="object-cover"
                            src={img.src}
                            alt="gallery shots"
                            onContextMenu={(e) => e.preventDefault()}
                            loading="lazy"
                            sizes="100vw"
                          />
                        </div>
                      ),
                  ).filter(Boolean)}
                </div>
              </div>
              {PHOTOS.length % 2 && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    fill
                    className="object-cover"
                    src={PHOTOS[PHOTOS.length - 1].src}
                    alt="gallery shots"
                    onContextMenu={(e) => e.preventDefault()}
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
}
