import About from "./components/About";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-transparent">
      <About />
      <TechStack />
      <Work />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}
