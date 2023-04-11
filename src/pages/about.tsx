/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz - About</title>
        <meta name="description" content="Professional portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className="wrapper flex flex-col gap-12 px-4 py-16">
          <h1>About</h1>
          <div className="space-border overflow-hidden">
            <div className="flex flex-wrap gap-2 overflow-hidden rounded-3xl sm:flex-nowrap">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-lg">
                    <motion.img
                      onContextMenu={(e) => e.preventDefault()}
                      whileHover={{ scale: 1.25 }}
                      transition={{ duration: 1, ease: [0.5, 0.25, 0, 1] }}
                      className="h-full w-full object-cover"
                      src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                      alt="my photo"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="space-y-8">
            <p>
              Hi there 👋, I am{' '}
              <strong className="font-semibold">Mohammad Shahanwaz</strong>. I
              am a full-stack web developer based in Delhi who is passionate
              about building exceptional web experiences. Welcome to my personal
              space. Here you will find my projects, blogs, and other stuff that
              I am working on. I am a self-taught developer who loves to learn
              new things and explore different technologies. I am currently
              working as a full-stack developer at a startup. I am also a
              freelance developer. I have worked on many projects and have
              experience in different technologies. I am always open to new
              opportunities and challenges. I am also a competitive programmer.
            </p>
            <p>
              Here, I basically share my thoughts, ideas and experiments with
              new technologies. I also write about my experiences and share my
              learnings. I love to work on collaborative projects and I am
              always open to new opportunities. If you have any project in mind
              or want to collaborate, feel free to contact me 📥.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
