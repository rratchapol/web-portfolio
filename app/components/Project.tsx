"use client"
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";

const projects = [
	{
		name: "Portfolio Website",
		description: "เว็บไซต์แนะนำตัวเอง Responsive ด้วย Next.js และ Tailwind CSS.",
		image: "/image/project/gorilla_ideas.png",
		github: "https://github.com/rratchapol/web-portfolio.git",
		// demo: "https://your-portfolio-demo.com",
		tech: ["Next.js", "TailwindCSS", "TypeScript"],
	},
	{
		name: "Task Manager App",
		description: "แอปจัดการงานแบบ Kanban พร้อมระบบ Drag & Drop.",
		image: "/image/project/gorilla_ideas.png",
		// github: "https://github.com/rratchapol/web-portfolio.git",
		// demo: "https://your-taskmanager-demo.com",
		tech: ["React", "TypeScript", "DndKit"],
	},
	{
		name: "Task Manager App",
		description: "แอปจัดการงานแบบ Kanban พร้อมระบบ Drag & Drop.",
		image: "/image/project/gorilla_ideas.png",
		github: "https://github.com/rratchapol/web-portfolio.git",
		demo: "https://your-taskmanager-demo.com",
	},
	{
		name: "Task Manager App",
		description: "แอปจัดการงานแบบ Kanban พร้อมระบบ Drag & Drop.",
		image: "/image/project/gorilla_ideas.png",
		github: "https://github.com/rratchapol/web-portfolio.git",
		demo: "https://your-taskmanager-demo.com",
	},
];

const Project = () => {
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
		<section
			ref={ref}
			id="projects"
			className="section-animate section-spacing relative min-h-[60vh] flex items-center justify-center"
		>
			{/* Space/Star background + Floating heading */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
				<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
				<h2 className="text-4xl font-bold space-text-gradient text-glow mb-12 text-center">Projects</h2>
			</div>
			<div className="space-card p-8 max-w-5xl w-full mx-auto relative overflow-hidden backdrop-blur-lg bg-gradient-to-br from-black/40 via-slate-900/60 to-blue-950/60 animate-fade-in-up border border-cyan-200/10 shadow-2xl">
				<div className="grid gap-10 md:grid-cols-2">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="group bg-gradient-to-br from-slate-900/80 to-blue-900/60 rounded-3xl shadow-xl p-6 card-hover border border-cyan-100/20 hover:border-cyan-400/80 transition-all backdrop-blur-md animate-pop-3d tilt-3d hover:scale-[1.03] hover:shadow-cyan-400/30 relative overflow-hidden"
							style={{animationDelay: `${0.15 * idx + 0.2}s`, animationFillMode: 'both'}}
						>
							{/* Glow effect */}
							<div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/10 to-blue-400/20 opacity-0 group-hover:opacity-60 transition-all duration-500 pointer-events-none z-0" />
							<div className="flex justify-center mb-4 relative z-10">
								<Image
									src={project.image}
									alt={project.name}
									width={260}
									height={180}
									className="rounded-xl shadow-lg border-2 border-cyan-200/20 group-hover:border-cyan-400/60 transition-all duration-300 object-cover aspect-video bg-black/30"
								/>
							</div>
							<h3 className="text-xl font-bold mb-2 text-cyan-200 text-center drop-shadow-glow tracking-wide">
								{project.name}
							</h3>
							<div className="flex flex-wrap gap-2 justify-center mb-3">
								{project.tech && project.tech.map((t, i) => (
									<span key={i} className="px-2 py-0.5 text-xs rounded-full bg-cyan-800/60 text-cyan-100 border border-cyan-400/30 font-mono tracking-tight shadow-sm">
										{t}
									</span>
								))}
							</div>
							<p className="text-gray-200 mb-5 text-center min-h-[48px]">
								{project.description}
							</p>
							<div className="flex gap-4 justify-center mt-2 z-10">
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 via-slate-800 to-cyan-900 text-gray-200 hover:from-cyan-700 hover:to-blue-700 border border-cyan-400/30 hover:border-cyan-300 flex items-center gap-2 font-semibold shadow hover:shadow-cyan-400/20 transition-all duration-200 backdrop-blur-md"
									>
										<FaGithub /> <span>GitHub</span>
									</a>
								)}
								{project.demo && (
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-700 via-blue-700 to-fuchsia-700 text-white hover:from-cyan-400 hover:to-blue-400 border border-cyan-400/30 hover:border-cyan-200 flex items-center gap-2 font-semibold shadow hover:shadow-fuchsia-400/20 transition-all duration-200 backdrop-blur-md"
									>
										<FaExternalLinkAlt /> <span>Live Demo</span>
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Project;
