"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-transparent glass-card border-b border-slate-700/50 shadow-lg backdrop-blur-md animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 drop-shadow-glow hover:scale-105 transition-transform tracking-tight"
          >
            Ratchapol Rujiwatch
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Work", "Projects", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-200 hover:text-cyan-400 font-semibold tracking-wide px-2 py-1 rounded transition-all duration-200 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {item}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 text-white font-bold shadow hover:from-cyan-400 hover:to-fuchsia-400 border border-cyan-200/20 transition-all duration-200 backdrop-blur-md"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
