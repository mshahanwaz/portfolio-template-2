import Head from 'next/head';
import { Sora } from 'next/font/google';
import Link from 'next/link';

const sora = Sora({ subsets: ['latin'] });

export default function Timeline() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz | Timeline</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="inline-flex gap-4">
          <Link href="/">Back</Link>
        </div>
        <p className={sora.className}>Timeline</p>
      </main>
    </>
  );
}
