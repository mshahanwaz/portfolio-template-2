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
        <div className="inline-flex gap-2 text-sm">
          <Link href="/about">About</Link>/{' '}
          <Link href="/projects">Projects</Link>/{' '}
          <Link href="/timeline">Timeline</Link>
        </div>
        <p className={sora.className}>Home</p>
      </main>
    </>
  );
}
