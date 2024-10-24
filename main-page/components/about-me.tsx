import Title from "./shared/title";

const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="About me" subtitle="Meet me" />

      <div className="container mx-auto">
        <p className="my-8 text-center">
          Hello! I am a passionate Computer Engineering graduate from the Universitat Autónoma de Barcelona, specializing in software development. I am currently pursuing a Master&apos;s in Artificial Intelligence, which allows me to delve deeper into advanced technologies and broaden my perspective in this exciting field.
          I love solving problems and finding innovative solutions. I am always looking to learn and grow in the tech landscape, and I am excited to contribute to projects that make a difference.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;