"use client"
import { useEffect, useRef } from "react";

const education = [
  {
    school: "King Mongkut's Institute of Technology Ladkrabang",
    faculty: "Computer Engineering",
    year: "2021 - 2025",
  },
];

const Education = () => {
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
    <section ref={ref} id="education" className="section-animate section-spacing relative min-h-[40vh] flex items-center justify-center">
      {/* Floating heading and background effect */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
				<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
				<h2 className="text-4xl font-bold space-text-gradient text-glow mb-12 text-center">Education</h2>
			</div>
      <div className="space-card p-6 sm:p-10 max-w-3xl w-full mx-auto relative overflow-hidden backdrop-blur-lg bg-gradient-to-br from-black/50 via-blue-950/60 to-purple-950/60 border border-blue-200/10 shadow-2xl animate-fade-in-up">
        <div className="px-2 sm:px-6 md:px-10">
          <ul className="space-y-8">
            {education.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row items-center gap-6 bg-black/40 rounded-2xl shadow-lg p-6 sm:p-8 card-hover border border-blue-100/20 hover:border-blue-300/60 transition-all backdrop-blur-md group animate-fade-in-up"
                style={{animationDelay: `${0.15 * idx + 0.2}s`, animationFillMode: 'both'}}>
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-fuchsia-500/20 shadow-md overflow-hidden group-hover:scale-105 transition-transform border-2 border-blue-200/20">
                  <img src="/image/kmitl.png" alt="KMITL Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-2 drop-shadow-glow tracking-wide">{item.school}</h3>
                  <span className="text-blue-400 font-semibold block mb-2 text-lg">{item.faculty}</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-900/40 text-blue-200 text-xs font-semibold border border-blue-400/20 shadow mb-2">{item.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
