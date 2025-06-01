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
		demo: "https://your-portfolio-demo.com",
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
			className="section-animate section-spacing space-card p-8 mx-auto mt-8 animate-fade-in-up perspective-800"
		>
			<div className="max-w-5xl mx-auto px-4">
				<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
				<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
				<h2 className="text-4xl font-bold space-text-gradient text-glow mb-12 text-center">Projects</h2>
				<div className="grid gap-8 md:grid-cols-2">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="bg-black/40 rounded-2xl shadow-lg p-6 card-hover border border-cyan-100/20 hover:border-cyan-400/80 transition-all backdrop-blur-md animate-pop-3d tilt-3d "
							style={{animationDelay: `${0.15 * idx + 0.2}s`, animationFillMode: 'both'}}
						>
							<div className="flex justify-center">
							<Image
								src={project.image}
								alt={project.name}
								width={300}
								height={300}
								className="mb-4 drop-shadow-md "
							/>
							</div>
							<h3 className="text-lg font-bold mb-2 text-blue-200 text-center">
								{project.name}
							</h3>
							<p className="text-gray-300 mb-4 text-center">
								{project.description}
							</p>
							<div className="flex gap-4">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-white flex items-center gap-1 hover:scale-110 transition"
								>
									<FaGithub /> <span>GitHub</span>
								</a>
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-600 flex items-center gap-1 hover:scale-110 transition"
								>
									<FaExternalLinkAlt /> <span>Live Demo</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Project;
