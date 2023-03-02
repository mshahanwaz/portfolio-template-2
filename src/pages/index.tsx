import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';

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
        <div className="m-4 p-4 bg-green-200">
          <h1 className="text-9xl font-semibold flex flex-col">
            <span>M.</span>
            <span>Shahanwaz</span>
          </h1>
        </div>
      </MainLayout>
    </>
  );
}
