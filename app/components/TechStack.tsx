"use client"
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { SiTypescript, SiGoland, SiC, SiAngular, SiNextdotjs, SiLaravel } from "react-icons/si";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ClientOnlyStarField from "./ClientOnlyStarField";

const techStack = {
  languages: [
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Go", icon: <SiGoland className="text-cyan-600" /> },
    { name: "C", icon: <SiC className="text-blue-800" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Javascript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Typescript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
  ],
  frameworks: [
    { name: "Angular", icon: <SiAngular className="text-red-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "Echo", icon: <Image src="/image/echo.png" alt="Echo" width={32} height={32} className="mb-1" /> },
  ],
};

const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} id="techstack" className="section-animate section-spacing relative min-h-[60vh] flex items-center justify-center">
      {/* Space/Star background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <h2 className="text-4xl font-bold space-text-gradient text-glow mb-12 text-center">Tech Stack</h2>
      </div>
      <div className="space-card p-4 sm:p-8 md:p-10 max-w-1000xl w-full mx-auto relative overflow-hidden backdrop-blur-lg bg-black/30 animate-fade-in-up">

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <div className="space-card p-6 bg-purple-500 border border-purple-500 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center tracking-wide">Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {techStack.languages.map((lang, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white/20 rounded-xl shadow p-4 w-28 h-28 justify-center card-hover border border-blue-100/30 hover:border-blue-400/80 transition-all duration-300 neon-glow">
                <span className="text-3xl mb-2 animate-float-slow drop-shadow-glow">{lang.icon}</span>
                <span className="text-sm font-medium text-gray-100 mt-1 text-center tracking-wide">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-card p-6 bg-white/10 border border-purple-200/20 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center tracking-wide">Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {techStack.frameworks.map((fw, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white/20 rounded-xl shadow p-4 w-28 h-28 justify-center card-hover border border-purple-100/30 hover:border-fuchsia-400/80 transition-all duration-300 neon-glow">
                <span className="text-3xl mb-2 animate-float-slow drop-shadow-glow">{fw.icon}</span>
                <span className="text-sm font-medium text-gray-100 mt-1 text-center tracking-wide">{fw.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
