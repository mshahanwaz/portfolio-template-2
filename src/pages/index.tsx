import Head from 'next/head';
import { Sora } from 'next/font/google';
import Link from 'next/link';
import Button from '@/components/Button';

const sora = Sora({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-10 h-10 bg-black text-white">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/timeline">Timeline</Link>
        </div>
        <p className={sora.className}>Home</p>
        <Button />
      </main>
    </>
  );
}
