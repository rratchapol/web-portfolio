"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import ClientOnlyStarField from "./ClientOnlyStarField"; // Adjust the import path as necessary

const About = () => {
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
    <section ref={ref} id="about" className="section-animate section-spacing min-h-screen flex items-center justify-center">
      <div className="space-card p-4 sm:p-8 md:p-10 max-w-1000xl w-full mx-auto relative overflow-hidden backdrop-blur-lg bg-black/30 animate-fade-in-up">
        <div className="absolute inset-0 opacity-30">
          {/* Render star field only on client to avoid hydration mismatch */}
          <ClientOnlyStarField />
        </div>
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-500 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-purple-500 blur-2xl animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8 group flex items-center justify-center animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            {/* Outer neon ring */}
            <span className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-70 animate-pulse-slow"></span>
            {/* Middle glowing ring */}
            <span className="absolute w-[280px] h-[280px] rounded-full border-8 border-cyan-400/60 shadow-[0_0_80px_20px_rgba(34,211,238,0.4)] animate-glow"></span>
            {/* Inner white border */}
            <span className="absolute w-[240px] h-[240px] rounded-full border-4 border-white/40 shadow-[0_0_40px_10px_rgba(255,255,255,0.15)]"></span>
            <Image
              src="/image/profile.png"
              alt="Profile Picture"
              width={220}
              height={220}
              className="rounded-full border-4 border-white/30 shadow-2xl object-cover relative z-10 animate-float hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-md"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold space-text-gradient text-glow mb-4 text-center animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>Ratchapol Rujiwatch</h1>
          <h2 className="text-xl md:text-2xl text-blue-400 font-light mb-4 animate-fade-in-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>Full Stack Developer</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl text-center mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            Hello! My name is <span className="font-semibold text-cyan-300">Ratchapol Rujiwatch</span> (Tao).<br/>
            <br/>
            I am a <span className="font-semibold text-blue-300">Full Stack Developer</span> passionate about building innovative,<br className="hidden md:inline"/> user-friendly web applications.<br/>
            <br/>
            I love to learn new technologies, solve real-world problems, and collaborate with talented people to create meaningful digital experiences.
          </p>
         
          <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 text-white text-base font-semibold shadow-lg tracking-wide backdrop-blur-md border border-cyan-200/20">
              "Keep learning, keep building, keep dreaming."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
