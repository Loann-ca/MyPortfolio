import AboutMe from "@/components/about-me";
import Skills from "@/components/skills";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import ContactMe from "@/components/contact-me";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <main className="flex-grow pb-40"> 
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
