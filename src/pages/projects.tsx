import Head from 'next/head';
import { Sora } from 'next/font/google';
import Link from 'next/link';

const sora = Sora({ subsets: ['latin'] });

export default function Projects() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz | Projects</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex items-center gap-2">
          <Link href="/">Back</Link>
        </div>
        <p className={sora.className}>Projects</p>
      </main>
    </>
  );
}
