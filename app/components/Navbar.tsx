"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 hover:scale-105 transition-transform"
          >
            MyResume
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Work", "Projects", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {item}
              </Link>
              
            ))}
             <button>resume</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
