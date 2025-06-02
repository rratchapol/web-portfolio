"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import SpaceBackground3DWrapper from "./components/SpaceBackground3DWrapper";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 วินาที
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#0a1124]">
      <div className="relative mb-6">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-30 blur-xl animate-pulse"></span>
        <span className="absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-20 blur-lg animate-pulse"></span>
        <div className="w-20 h-20 border-4 border-cyan-400 border-t-fuchsia-500 border-b-blue-500 rounded-full animate-spin shadow-lg"></div>
      </div>
      <span className="text-cyan-200 text-lg font-semibold tracking-widest animate-pulse">Loading...</span>
    </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-transparent">
        <SpaceBackground3DWrapper />
        <About />
        <Education />
        <TechStack />
        <Work />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
