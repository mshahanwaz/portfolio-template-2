import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <>
      <Head>
        <title>M. Shahanwaz | Timeline</title>
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
        <div className="container px-4 py-16 flex flex-col gap-12">
          <h1 className="text-9xl">
            <span>Timeline</span>
          </h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam
            fugit assumenda commodi in unde ratione aperiam totam id dicta?
            Tempora autem ab non id aperiam voluptatibus, quo blanditiis ipsam
            maxime cum, odit tenetur voluptas dolor doloribus omnis quidem amet
            magni illum. Perspiciatis itaque aperiam nulla ullam sequi ipsa
            rerum autem rem. Eligendi quidem eius dolorum nisi alias quis
            nesciunt harum eos soluta eaque doloremque mollitia nobis
            praesentium velit neque, reiciendis ratione consequuntur cum. Soluta
            nesciunt ipsam voluptatem, omnis eos reiciendis aliquid culpa
            corrupti, provident eius quas, autem incidunt eum temporibus!
            Expedita harum blanditiis esse voluptates aspernatur repudiandae
            aliquam vel.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam
            fugit assumenda commodi in unde ratione aperiam totam id dicta?
            Tempora autem ab non id aperiam voluptatibus, quo blanditiis ipsam
            maxime cum, odit tenetur voluptas dolor doloribus omnis quidem amet
            magni illum. Perspiciatis itaque aperiam nulla ullam sequi ipsa
            rerum autem rem. Eligendi quidem eius dolorum nisi alias quis
            nesciunt harum eos soluta eaque doloremque mollitia nobis
            praesentium velit neque, reiciendis ratione consequuntur cum. Soluta
            nesciunt ipsam voluptatem, omnis eos reiciendis aliquid culpa
            corrupti, provident eius quas, autem incidunt eum temporibus!
            Expedita harum blanditiis esse voluptates aspernatur repudiandae
            aliquam vel.
          </span>
        </div>
      </motion.div>
    </>
  );
}
