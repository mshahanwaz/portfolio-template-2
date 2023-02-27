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
        <h1>Hello</h1>
      </MainLayout>
    </>
  );
}
