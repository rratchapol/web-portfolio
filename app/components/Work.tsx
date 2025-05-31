"use client"
import { useEffect, useRef } from "react";

const workExperience = [
	{
		company: "บริษัท A",
		logo: "/image/ashatech.jpg",
		position: "Intern Developer",
		period: "2022 - Present",
		details: "พัฒนาและดูแลระบบเว็บแอปพลิเคชันด้วย React และ Tailwind CSS เน้น UX/UI ที่ใช้งานง่ายและสวยงาม",
	},
	{
		company: "บริษัท B",
		logo: "/image/ashatech.jpg",
		position: "fullstack developer",
		period: "2021 - 2022",
		details: "ฝึกงานด้านพัฒนาเว็บไซต์และเรียนรู้การทำงานเป็นทีมในโปรเจกต์จริง",
	},
	{
		company: "ascend",
		logo: "/image/ascend.jpg",
		position: "Intern frontend Developer",
		period: "2021 - 2022",
		details: "ฝึกงานด้านพัฒนาเว็บไซต์และเรียนรู้การทำงานเป็นทีมในโปรเจกต์จริง",
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
			className="section-animate section-spacing"
		>
			
			<div className="max-w-4xl mx-auto">
				<h2 className="text-4xl font-bold space-text-gradient text-glow mb-12 text-center">
					Work Experience
				</h2>
				{/* <div className="w-full flex justify-center"> */}
				<div className="relative  ">
					<div className="absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-gradient-to-b from-indigo-400 to-purple-500 glow"></div>
					{workExperience.map((item, idx) => (
						<div key={idx} className={`relative mb-12 ${idx % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
							<div className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
								<div className="flex-1" />
								<div className="space-card w-full max-w-md p-6 animate-float">
									<div className="flex items-center gap-4 mb-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/30">
												<img
													src={item.logo}
													alt={item.company + ' logo'}
													className="w-full h-full object-cover"
												/>
											</div>
										</div>
										<div>
											<h3 className="text-xl font-bold text-slate-100">{item.company}</h3>
											<p className="text-indigo-400 font-medium">{item.position}</p>
											<p className="text-sm text-slate-400">{item.period}</p>
										</div>
									</div>
									<p className="text-slate-300 leading-relaxed">{item.details}</p>
								</div>
								<div className="flex-1" />
							</div>
						</div>
					))}
				</div>
			</div>
			{/* </div> */}
		</section>
	);
};

export default Work;
