import Banner from '@/components/Banner';
import MainLayout from '@/layouts/MainLayout';
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
        <div className="mb-20 max-w-4xl w-full mx-auto p-4 flex flex-col gap-10 bg-white">
          <h1 className="text-9xl font-semibold flex flex-col">
            <span>M.</span>
            <span>Shahanwaz</span>
          </h1>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat
            nihil magnam inventore harum, dolore tenetur. Illo error nisi
            excepturi eos ducimus. Debitis, accusamus necessitatibus nemo
            suscipit culpa assumenda tempore? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vero, aliquid quidem quae placeat
            dignissimos aliquam? Sint consectetur odit asperiores veniam
            consequatur doloribus minima laboriosam suscipit. Quod veniam nobis
            itaque non?
          </p>
        </div>
        <Banner />
        <div className="mt-40 bg-black w-full h-56"></div>
      </MainLayout>
    </>
  );
}
