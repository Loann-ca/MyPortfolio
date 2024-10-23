import AboutMe from "@/components/about-me";
import Skills from "@/components/skills";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import ContactMe from "@/components/contact-me";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <main className= "pb-40">
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </main>
  );
}
