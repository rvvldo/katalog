import React from 'react';
import { ExternalLink, Code, Palette, Heart } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Fashion Outlier",
        description: "Modern fashion e-commerce platform dengan design yang stylish dan user experience yang premium.",
        category: "E-Commerce",
        tags: ["React", "UI/UX", "E-Commerce"],
        url: "https://fashion-outlier.vercel.app/",
        icon: Palette,
        gradient: "from-pink-500 to-purple-600"
    },
    {
        id: 2,
        title: "MindCare",
        description: "Platform kesehatan mental dengan fitur konseling online dan resources untuk mental wellness.",
        category: "Healthcare",
        tags: ["React", "Health Tech", "Wellness"],
        url: "https://mindcare-six.vercel.app/",
        icon: Heart,
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        id: 3,
        title: "EduLasCode",
        description: "Platform pembelajaran coding interaktif untuk pemula dengan materi lengkap dan terstruktur.",
        category: "Education",
        tags: ["React", "EdTech", "Learning"],
        url: "https://edulascode.vercel.app/",
        icon: Code,
        gradient: "from-orange-500 to-red-600"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4 sm:mb-6">
                        <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Portfolio Kami</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-white px-4">
                        Project Unggulan
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Lihat beberapa karya terbaik yang telah kami ciptakan untuk klien kami
                    </p>
                </div>

                {/* Projects Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                    {projects.map((project, idx) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={project.id}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Project Preview - Gradient Background */}
                                <div className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                                    {/* Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Visit Link */}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>

                                    {/* Number */}
                                    <div className="absolute bottom-4 right-4 text-7xl font-black text-white/10">
                                        0{project.id}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-5 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-3 py-1 rounded-full bg-white/5 text-cyan-400 text-xs font-medium border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Visit Button */}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors group/link"
                                    >
                                        <span>Lihat Project</span>
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-12 sm:mt-14 md:mt-16 text-center">
                    <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-sm sm:text-base">
                            Tertarik untuk membuat project seperti ini?
                            <a href="#contact" className="text-cyan-400 hover:text-cyan-300 font-semibold ml-2 hover:underline">
                                Hubungi kami sekarang
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
