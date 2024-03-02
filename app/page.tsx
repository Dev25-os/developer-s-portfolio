import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center p-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ContactMe />
    </div>
  );
}
