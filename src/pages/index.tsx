/* eslint-disable @next/next/no-img-element */
import Banner from '@/components/Banner';
import MainLayout from '@/layouts/MainLayout';
import { PhotoIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="relative">
          <div className="w-40 h-40 bg-gray-400 absolute top-10 left-0 -z-10" />
          <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-10">
            <h1 className="text-9xl font-semibold flex flex-col">
              <span>M.</span>
              <span>Shahanwaz</span>
            </h1>
            <div className="flex items-center gap-8">
              <div className="">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  quaerat nihil magnam inventore harum, dolore tenetur. Illo
                  error nisi excepturi eos ducimus. Debitis, accusamus
                  necessitatibus nemo suscipit culpa assumenda tempore? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  aliquid quidem quae placeat dignissimos aliquam? Sint
                  consectetur odit asperiores veniam consequatur doloribus
                  minima laboriosam suscipit. Quod veniam nobis itaque non?
                </p>
              </div>
              <div className="shrink-0">
                <img
                  className="rounded-2xl border border-gray-200 p-2 h-[200px] aspect-video object-cover bg-gray-50 hover:bg-gray-100"
                  src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
            </div>
            <p className="relative before:content-['→'] before:absolute before:right-[calc(100%+10px)] before:bottom-0.5">
              Below are the technologies and tools that I use or work on:
            </p>
          </div>
          <div className="mt-20">
            <Banner />
          </div>
          <div className="mt-20 p-4 max-w-4xl w-full mx-auto">
            <div className="flex items-center gap-4">
              <span className="p-2 border border-gray-200 bg-gray-100 rounded-lg shadow">
                <PhotoIcon className="w-5 h-5 text-gray-600" />
              </span>
              <span className="font-semibold text-lg">My little gallery</span>
            </div>
            <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    className="rounded-2xl border border-gray-200 p-2 w-full aspect-video object-cover hover:bg-gray-100"
                    src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                ))}
            </div>
          </div>
          {/* <div className=" bg-black absolute inset-0 -z-10"></div> */}
        </div>
      </MainLayout>
    </>
  );
}
