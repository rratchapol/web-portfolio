"use client"
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // TODO: Add real email sending logic here
  };

  return (
    <section ref={ref} id="contact" className="section-animate section-spacing relative min-h-[40vh] flex items-center justify-center">
      {/* Floating heading and background effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <h2 className="text-4xl font-bold space-text-gradient text-glow mb-12 text-center">Contact</h2>
      </div>
      {/* <div className="space-card p-4 sm:p-6 md:p-10 max-w-3xl w-full mx-auto relative overflow-hidden backdrop-blur-lg bg-gradient-to-br from-black/50 via-blue-950/60 to-purple-950/60 border border-blue-200/10 shadow-2xl animate-fade-in-up"> */}
        <div>         
        <div className="px-2 sm:px-6 md:px-10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 text-4xl md:text-5xl animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <a href="https://github.com/rratchapol" target="_blank" rel="noopener noreferrer" className="rounded-full p-4 bg-gradient-to-tr from-slate-800 via-cyan-900 to-blue-900 text-cyan-300 hover:from-cyan-500 hover:to-blue-500 hover:text-white border border-cyan-400/30 shadow-lg hover:scale-110 transition-all duration-200" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ratchapol-rujiwach" target="_blank" rel="noopener noreferrer" className="rounded-full p-4 bg-gradient-to-tr from-slate-800 via-blue-900 to-fuchsia-900 text-blue-300 hover:from-blue-500 hover:to-fuchsia-500 hover:text-white border border-blue-400/30 shadow-lg hover:scale-110 transition-all duration-200" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/ratchapol.rujiwach.9" target="_blank" rel="noopener noreferrer" className="rounded-full p-4 bg-gradient-to-tr from-slate-800 via-blue-900 to-blue-700 text-blue-200 hover:from-blue-400 hover:to-blue-600 hover:text-white border border-blue-400/30 shadow-lg hover:scale-110 transition-all duration-200" title="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@ratchapolrujiwach4801" target="_blank" rel="noopener noreferrer" className="rounded-full p-4 bg-gradient-to-tr from-slate-800 via-red-900 to-fuchsia-900 text-red-300 hover:from-red-500 hover:to-fuchsia-500 hover:text-white border border-red-400/30 shadow-lg hover:scale-110 transition-all duration-200" title="YouTube">
              <FaYoutube />
            </a>
            {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="rounded-full p-4 bg-gradient-to-tr from-slate-800 via-fuchsia-900 to-cyan-900 text-pink-300 hover:from-fuchsia-500 hover:to-cyan-500 hover:text-white border border-fuchsia-400/30 shadow-lg hover:scale-110 transition-all duration-200" title="Instagram">
              <FaInstagram />
            </a> */}
          </div>
          {sent ? (
            <div className="text-green-400 font-semibold text-center py-6 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อ!</div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Contact;
