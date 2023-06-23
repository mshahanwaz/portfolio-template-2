import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Blogs() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>M. Shahanwaz - Blogs</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="space-y-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' },
        }}
      >
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-9xl">
            <span>{slug}</span>
          </h1>
          <div className="">{slug}</div>
        </div>
      </motion.div>
    </>
  );
}
