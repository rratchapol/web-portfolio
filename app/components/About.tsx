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
      <div className="space-card p-4 sm:p-8 md:p-10 max-w-3xl w-full mx-auto relative overflow-hidden backdrop-blur-lg bg-black/30 animate-fade-in-up">
        <div className="absolute inset-0 opacity-30">
          {/* Render star field only on client to avoid hydration mismatch */}
          <ClientOnlyStarField />
        </div>
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-500 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-purple-500 blur-2xl animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8 group flex items-center justify-center animate-scale-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            {/* Animated glowing ring */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 animate-pulse-slow"></span>
            </span>
            {/* Neon border and shadow */}
            <span className="absolute w-[180px] h-[180px] rounded-full border-4 border-blue-400/60 shadow-[0_0_40px_10px_rgba(99,102,241,0.4)] animate-glow"></span>
            <Image
              src="/image/profile.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full border-4 border-white/20 shadow-2xl object-cover relative z-10 animate-float hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold space-text-gradient text-glow mb-4 text-center animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>Ratchapol Rujiwatch</h1>
          <h2 className="text-xl md:text-2xl text-blue-400 font-light mb-4 animate-fade-in-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>Full Stack Developer & Space Enthusiast</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl text-center mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            Crafting beautiful, responsive web applications with a passion for clean code and innovative solutions.
            Specializing in React, Next.js, and Node.js with 5 years of professional experience.
          </p>
          <div className="flex gap-6 text-2xl animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
            { [
              { icon: <FaGithub />, href: "https://github.com/johndoe", label: "GitHub", color: "text-slate-400 hover:text-slate-200" },
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/johndoe", label: "LinkedIn", color: "text-blue-400 hover:text-blue-300" },
              { icon: <FaEnvelope />, href: "mailto:john@doe.com", label: "Email", color: "text-purple-400 hover:text-purple-300" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.color} transition-all duration-300 hover:scale-110 hover:rotate-6`}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            )) }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
