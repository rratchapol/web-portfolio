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
    <section ref={ref} id="contact" className="section-animate section-spacing space-card p-4 sm:p-6 md:p-10 max-w-3xl w-full mx-auto mt-8 animate-fade-in-up">
      <div className="px-2 sm:px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 gradient-text text-center drop-shadow-lg tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>Contact</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 text-2xl md:text-3xl animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors hover:scale-110">
            <FaFacebook />
          </a>
          <a href="https://youtube.com/@yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors hover:scale-110">
            <FaYoutube />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors hover:scale-110">
            <FaInstagram />
          </a>
        </div>
        {sent ? (
          <div className="text-green-400 font-semibold text-center py-6 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อ!</div>
        ) : null}
      </div>
    </section>
  );
};

export default Contact;
