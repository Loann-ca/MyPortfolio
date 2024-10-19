import AboutMe from "@/components/about-me";
import Skills from "@/components/skills";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className= "pb-40">
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
    </main>
  );
}
