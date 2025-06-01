"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-blue-950/80 via-blue-900/60 to-transparent py-8 border-t border-blue-200/10 shadow-inner animate-fade-in rounded-t-2xl backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <span className="text-slate-300 text-sm md:text-base tracking-wide">© {new Date().getFullYear()} <span className="font-semibold text-cyan-300">TaoResume</span>. All rights reserved.</span>
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/rratchapol" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ratchapol-rujiwach" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:rratchapol@email.com" className="hover:text-fuchsia-400 transition-colors" title="Email"><FaEnvelope /></a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 mt-2">Made with <span className="text-pink-400">♥</span> by Ratchapol Rujiwatch</div>
    </footer>
  );
};

export default Footer;
