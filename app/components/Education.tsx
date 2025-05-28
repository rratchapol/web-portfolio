"use client"
import { useEffect, useRef } from "react";

const education = [
  {
    school: "มหาวิทยาลัยตัวอย่าง",
    faculty: "คณะวิศวกรรมศาสตร์",
    year: "2018 - 2022",
    details: "จบการศึกษาระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์ เกรดเฉลี่ย 3.50",
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
    <section ref={ref} id="education" className="section-animate section-spacing space-card p-4 sm:p-8 max-w-3xl w-full mx-auto mt-8 animate-fade-in-up">
      <div className="px-2 sm:px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 gradient-text text-center drop-shadow-lg tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>Education</h2>
        <ul className="space-y-6">
          {education.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row items-center gap-4 bg-black/40 rounded-2xl shadow-lg p-4 sm:p-6 card-hover border border-blue-100/20 hover:border-blue-300/60 transition-all backdrop-blur-md group animate-fade-in-up"
              style={{animationDelay: `${0.15 * idx + 0.2}s`, animationFillMode: 'both'}}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white/10 shadow-md overflow-hidden group-hover:scale-105 transition-transform">
                <img src="/image/kmitl.png" alt="KMITL Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold text-blue-200 mb-1 drop-shadow">{item.school}</h3>
                <span className="text-blue-400 font-medium block mb-1">{item.faculty}</span>
                <span className="block text-xs text-gray-400 mb-2">{item.year}</span>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">{item.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
