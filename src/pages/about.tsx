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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quaerat eius dignissimos. Tenetur dolorum quia iusto nihil nam
              sequi ullam, ducimus ipsum amet commodi, adipisci ab nobis minima
              ut? Ipsa possimus aliquam explicabo exercitationem error
              laudantium, aliquid quisquam quis recusandae repellendus eaque
              obcaecati culpa, ipsum velit tenetur blanditiis maxime facere
              placeat harum incidunt accusantium, perspiciatis molestiae
              nesciunt assumenda. Quidem iste provident eveniet inventore
              beatae! Ipsam necessitatibus sunt, natus earum odit a labore
              debitis iure qui ad sapiente facilis. Nihil officiis mollitia
              aspernatur ad repellendus enim ipsam beatae, doloribus quibusdam
              provident distinctio nam illum reiciendis dolorum voluptas minima
              aperiam. Magni, velit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quaerat eius dignissimos. Tenetur dolorum quia iusto nihil nam
              sequi ullam, ducimus ipsum amet commodi, adipisci ab nobis minima
              ut? Ipsa possimus aliquam explicabo exercitationem error
              laudantium, aliquid quisquam quis recusandae repellendus eaque
              obcaecati culpa, ipsum velit tenetur blanditiis maxime facere
              placeat harum incidunt accusantium, perspiciatis molestiae
              nesciunt assumenda. Quidem iste provident eveniet inventore
              beatae! Ipsam necessitatibus sunt, natus earum odit a labore
              debitis iure qui ad sapiente facilis. Nihil officiis mollitia
              aspernatur ad repellendus enim ipsam beatae, doloribus quibusdam
              provident distinctio nam illum reiciendis dolorum voluptas minima
              aperiam. Magni, velit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quaerat eius dignissimos. Tenetur dolorum quia iusto nihil nam
              sequi ullam, ducimus ipsum amet commodi, adipisci ab nobis minima
              ut? Ipsa possimus aliquam explicabo exercitationem error
              laudantium, aliquid quisquam quis recusandae repellendus eaque
              obcaecati culpa, ipsum velit tenetur blanditiis maxime facere
              placeat harum incidunt accusantium, perspiciatis molestiae
              nesciunt assumenda. Quidem iste provident eveniet inventore
              beatae! Ipsam necessitatibus sunt, natus earum odit a labore
              debitis iure qui ad sapiente facilis. Nihil officiis mollitia
              aspernatur ad repellendus enim ipsam beatae, doloribus quibusdam
              provident distinctio nam illum reiciendis dolorum voluptas minima
              aperiam. Magni, velit!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
