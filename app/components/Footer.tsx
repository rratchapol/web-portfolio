"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-blue-100 to-white py-6 mt-12 border-t border-blue-100 shadow-inner animate-fade-in rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <span className="text-gray-600 text-sm">© {new Date().getFullYear()} MyResume. All rights reserved.</span>
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 hover:scale-125 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:scale-125 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="hover:text-red-600 hover:scale-125 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
