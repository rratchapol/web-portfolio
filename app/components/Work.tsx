"use client"
import { useEffect, useRef } from "react";

const workExperience = [
	{
		company: "Asha Tech Corporation",
		logo: "/image/ashatech.jpg",
		position: "Intern Developer",
		period: "2024 - 2024",
		tech :"(Angular, Tailwind CSS)",
		details: "* Developed internal CRM systems for influencer and customer management using Angular.\n * Integrated Google Login and created dynamic FormArray forms for data input.\n * Worked on projects for Gorillaideas and National Cancer Institute (NCI), including user role-based permission systems, API integration, and responsive UI design.\n * Contributed to inventory and employee management systems, gaining hands-on experience with organizational workflows and internal system architecture.",
	},
	{
		company: "Asha Tech Corporation",
		logo: "/image/ashatech.jpg",
		position: "fullstack developer",
		period: "2024 - 2025",
		tech :"(Angular, Tailwind CSS, Laravel)",
		details: "* Developed an internal admin system using Angular and Tailwind.\n * Built key components such as dashboards with charts, calendars, data tables, and dynamic forms.\n * Integrated map features to display locations using latitude and longitude.",
	},
	{
		company: "Ascend Co., Ltd.",
		logo: "/image/ascend.jpg",
		position: "Intern frontend Developer",
		period: "2025 - Present",
		tech :"(React, Next.js, Tailwind CSS,)",
		details: "* Developed a CRM system and web integrated with LINE LIFF platform for SOS Wasty.\n * Built responsive UI using Next.js, Tailwind CSS, and Ant Design.\n * Implemented dynamic charts with Chart.js and connected frontend to RESTful APIs.",
	},
];

const Work = () => {
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
			id="work"
			className="section-animate section-spacing relative min-h-[80vh] flex items-center justify-center"
		>
			<div className="max-w-3xl w-full mx-auto relative">
				<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
				<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
				<h2 className="text-4xl font-bold space-text-gradient text-glow mb-16 text-center relative z-10">
					Work Experience
				</h2>
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-indigo-400 to-fuchsia-500 opacity-60 z-0"></div>
					<div className="flex flex-col gap-16 items-center">
						{workExperience.map((item, idx) => (
							<div key={idx} className="relative flex items-center group z-10 min-h-[180px] w-full justify-center">
								<div className="w-full max-w-2xl">
									<div className="space-card p-7 md:p-10 bg-gradient-to-br from-black/60 via-slate-900/70 to-blue-950/60 rounded-3xl shadow-2xl border border-cyan-200/10 backdrop-blur-lg hover:shadow-cyan-400/20 transition-all duration-300 animate-fade-in-up">
										<div className="flex items-center gap-4 mb-3">
											<div className="flex-shrink-0">
												<div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/30">
													<img
														src={item.logo}
														alt={item.company + ' logo'}
														className="w-full h-full object-cover"
													/>
												</div>
											</div>
											<div>
												<h3 className="text-2xl font-bold text-cyan-200 mb-1 drop-shadow-glow">{item.company}</h3>
												<div className="flex flex-wrap gap-2 mb-1">
													<span className="px-3 py-1 rounded-full bg-indigo-700/40 text-indigo-200 text-xs font-semibold tracking-wide border border-indigo-400/20 shadow">{item.position}</span>
													<span className="px-3 py-1 rounded-full bg-blue-400 text-black text-xs font-semibold tracking-wide border border-indigo-400/20 shadow">{item.tech}</span>
													<span className="px-3 py-1 rounded-full bg-slate-700/40 text-slate-200 text-xs font-medium border border-slate-400/20 shadow">{item.period}</span>
												</div>
												
											</div>
										</div>
										{/* เปลี่ยนจาก <p> เป็น <ul> ถ้า details เป็น bullet list */}
										{item.details.trim().startsWith("*") ? (
										<ul className="text-slate-200 leading-relaxed text-sm md:text-base mt-2 list-disc list-outside pl-5 space-y-1">
											{item.details
											.split('\n')
											.filter(line => line.trim().startsWith('*'))
											.map((line, i) => (
												<li key={i}>
												{line.replace(/^\s*\*\s?/, '')}
												</li>
											))}
										</ul>
										) : (
										<p className="text-slate-200 leading-relaxed text-sm md:text-base mt-2">
											{item.details}
										</p>
										)}

									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
