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
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
        <div className="container px-4 py-16 flex flex-col gap-12">
          <h1 className="text-9xl">
            <span>About</span>
          </h1>
          <div className="flex items-center gap-5">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  className="rounded-2xl border border-gray-200 p-2 h-[200px] flex-1 object-cover bg-gray-50 hover:bg-gray-100"
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  alt="my photo"
                />
              ))}
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
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span className="p-2 border border-gray-200 bg-gray-100 rounded-lg shadow">
                <SunIcon className="w-5 h-5 text-gray-700" />
              </span>
              <span className="font-bold text-xl">Work Experience</span>
            </div>
            <div className="flex flex-col gap-10">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-5"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4">
                        <img
                          className="rounded-full border border-gray-200 p-1 h-20 aspect-square object-cover bg-gray-50 hover:bg-gray-100"
                          src="https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg"
                          alt="profile pic"
                        />
                        <div className="">
                          <h3 className="font-semibold text-lg">
                            Bosscoder Academy
                          </h3>
                          <p className="text-gray-700">Full Stack Developer</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-6 py-4 flex flex-col gap-2">
                        <li>Something about this work</li>
                        <li>Something about this work</li>
                        <li>Something about this work</li>
                        <li>Something about this work</li>
                        <li>Something about this work</li>
                      </ul>
                    </div>
                    <div className="">
                      <img
                        className="rounded-2xl border border-gray-200 p-2 h-[200px] flex-1 object-cover bg-gray-50 hover:bg-gray-100"
                        src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
                        alt="event pic"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
