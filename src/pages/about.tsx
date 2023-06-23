import Meta from '@/components/Meta';
import Animate from '@/components/Animate';

export default function About() {
  return (
    <>
      <Meta title="About - M. Shahanwaz" />

      <Animate className="space-y-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-16">
          <h1>About</h1>
          <div className="space-y-8">
            <p>
              Hi there 👋, I am <strong>Mohammad Shahanwaz</strong>. I am a
              full-stack web developer based in Delhi who is passionate about
              building exceptional web experiences. Welcome to my personal
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
      </Animate>
    </>
  );
}
