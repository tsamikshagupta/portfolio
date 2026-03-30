import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import SystemThinking from "../components/sections/SystemThinking";
import Skills from "../components/sections/Skills";

const Impact = dynamic(() => import("../components/sections/Impact"));
const FeaturedProjects = dynamic(() => import("../components/sections/FeaturedProjects"));
const ProjectLibrary = dynamic(() => import("../components/sections/ProjectLibrary"));
const Experience = dynamic(() => import("../components/sections/Experience"));
const Contact = dynamic(() => import("../components/sections/Contact"));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SystemThinking />
        <Skills />
        <Impact />
        <FeaturedProjects />
        <ProjectLibrary />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
