"use client";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import SpaceBackground3DWrapper from "./components/SpaceBackground3DWrapper";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-transparent">
      {/* <SpaceBackground3DWrapper /> */}
      <About />
      <Education />
      <TechStack />
      <Work />
      <Project />
      <Contact />
    </div>
  );
}
