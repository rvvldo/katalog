import React from 'react';
import { ExternalLink, Palette, Heart, Code } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Fashion Outlier",
        description: "Modern fashion e-commerce platform dengan design yang stylish dan user experience premium.",
        category: "E-Commerce",
        tags: ["React", "UI/UX"],
        url: "https://fashion-outlier.vercel.app/",
        icon: Palette,
        gradient: "from-blue-900/40 to-cyan-900/40"
    },
    {
        id: 2,
        title: "MindCare",
        description: "Platform kesehatan mental dengan fitur konseling online dan resources untuk mental wellness.",
        category: "Healthcare",
        tags: ["React", "Wellness"],
        url: "https://mindcare-six.vercel.app/",
        icon: Heart,
        gradient: "from-cyan-900/40 to-teal-900/40"
    },
    {
        id: 3,
        title: "EduLasCode",
        description: "Platform pembelajaran coding interaktif untuk pemula dengan materi terstruktur.",
        category: "Education",
        tags: ["React", "EdTech"],
        url: "https://edulascode.vercel.app/",
        icon: Code,
        gradient: "from-slate-800 to-blue-900/50"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-10 sm:py-24 md:py-32 bg-transparent">
            <div className="container-wide">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-10 mb-8 md:mb-20">
                    <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
                        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-panel mb-4 md:mb-8">
                            <span className="text-cyan-400 text-[10px] md:text-sm font-bold uppercase tracking-widest">Karya Unggulan</span>
                        </div>
                        <h2 className="text-section text-white leading-tight">
                            Produk <span className="text-cyan-400">Digital</span> yang Membuka<br className="hidden md:block" /> Cakrawala Baru
                        </h2>
                    </div>
                </div>

                {/* Projects Layout  */}
                <div className="space-y-6 md:space-y-16">
                    {projects.map((project, idx) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={project.id}
                                className={`glass-panel overflow-hidden group hover:border-cyan-400/40 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-900/20`}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left side: Project Info */}
                                    <div className="lg:w-1/2 p-5 sm:p-10 md:p-16 flex flex-col justify-between order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10">
                                        <div>
                                            <div className="flex items-center gap-2.5 md:gap-4 mb-4 md:mb-8">
                                                <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                                                    <Icon className="w-4 h-4 md:w-6 md:h-6" />
                                                </div>
                                                <span className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-white text-[9px] md:text-xs font-bold uppercase tracking-widest">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 md:mb-6 group-hover:text-cyan-400 transition-colors tracking-tight leading-none">
                                                {project.title}
                                            </h3>

                                            <p className="text-[11px] sm:text-sm md:text-xl text-gray-400 mb-4 md:mb-10 leading-relaxed font-medium">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1.5 md:gap-3 mb-6 md:mb-10">
                                                {project.tags.map((tag, tagIdx) => (
                                                    <span
                                                        key={tagIdx}
                                                        className="px-2.5 py-1 md:px-4 md:py-2 rounded-full bg-white/5 text-gray-300 text-[10px] md:text-sm font-medium border border-white/5"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary-fashion w-fit gap-2 md:gap-3 text-[10px] sm:text-sm py-2 px-4"
                                        >
                                            Kunjungi Live Site
                                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>

                                    {/* Right side: Abstract Visual */}
                                    <div className={`lg:w-1/2 h-[120px] sm:h-[220px] md:h-[300px] lg:h-auto bg-gradient-to-br ${project.gradient} relative overflow-hidden order-1 lg:order-2 flex items-center justify-center`}>
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-[#050510]/80"></div>

                                        <div className="relative z-10 text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-black text-white/5 leading-none select-none group-hover:scale-110 transition-transform duration-1000">
                                            0{project.id}
                                        </div>

                                        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
