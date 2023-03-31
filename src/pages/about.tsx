/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { SunIcon } from '@/assets/svgs/icons';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz | About</title>
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
        <div className="wrapper px-4 py-16 flex flex-col gap-12">
          <h1 className="text-9xl">
            <span>About</span>
          </h1>
          <div className="space-border flex items-center gap-2">
            <span className="overflow-hidden rounded-l-3xl rounded-r-lg">
              <motion.img
                whileHover={{ scale: 1.25 }}
                className="object-cover"
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt="my photo"
              />
            </span>
            <span className="overflow-hidden rounded-r-3xl rounded-l-lg">
              <motion.img
                whileHover={{ scale: 1.25 }}
                className="object-cover"
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt="my photo"
              />
            </span>
          </div>
          <div className="text-gray-700 flex flex-col gap-5">
            <p className="">
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
            <p className="">
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
            <p className="">
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
