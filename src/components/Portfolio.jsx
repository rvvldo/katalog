import React, { useState } from 'react';
import { ExternalLink, Palette, Heart, Code } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Fashion",
        description: "Modern fashion e-commerce platform dengan design yang stylish dan user experience premium.",
        category: "Website / UI & UX",
        tags: ["React", "UI/UX", "E-Commerce"],
        url: "https://fashion-outlier.vercel.app/",
        icon: Palette,
        background: "/thumbnail/fashion.webp"
    },
    {
        id: 2,
        title: "MindCare",
        description: "Platform kesehatan mental dengan fitur konseling online dan resources untuk mental wellness.",
        category: "Website / UI & UX",
        tags: ["React", "Wellness", "Healthcare"],
        url: "https://mindcare-six.vercel.app/",
        icon: Heart,
        background: "/thumbnail/mindcare.webp"
    },
    {
        id: 3,
        title: "EDULAD",
        description: "Platform Edukasi Lestari Alam Digital.",
        category: "Website / UI & UX",
        tags: ["React", "EdTech", "Education"],
        url: "https://edulascode.vercel.app/",
        icon: Code,
        background: "/thumbnail/edulad.webp"
    },
    {
        id: 4,
        title: "Portofolio Akuntan",
        description: "Portofolio digital untuk memperlihatkan kinerja dan prestasi saya.",
        category: "Website / UI & UX",
        tags: ["React", "Portfolio"],
        url: "https://portofolio-outlier.vercel.app/",
        icon: Code,
        background: "/thumbnail/portofolio.webp"
    },
    {
        id: 5,
        title: "UMKM",
        description: "Platform untuk memudahkan pengelolaan UMKM.",
        category: "Website / UI & UX",
        tags: ["React", "UMKM"],
        url: "https://warung-barokah-rasa.vercel.app/",
        icon: Code,
        background: "/thumbnail/umkm.webp"
    },
    {
        id: 6,
        title: "Toko Bunga",
        description: "Toko bunga online dengan fitur e-commerce dan desain yang modern.",
        category: "Website / UI & UX",
        tags: ["React", "E-Commerce"],
        url: "http://verdantia.outlier.web.id/",
        icon: Code,
        background: "/thumbnail/tokobunga.webp"
    }
];

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Website / UI & UX', 'Content Creation'];

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <section id="portfolio" className="py-10 sm:py-24 md:py-32 bg-transparent">
            <div className="container-wide">

                {/* Header */}
                <div className="flex flex-col items-center justify-center w-full mb-6 md:mb-12">
                    <div className="text-center w-full flex justify-center">
                        <h2 className="text-section text-white text-center leading-tight">
                            Produk <span className="text-cyan-400">Digital</span> yang Kami Buat
                        </h2>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-10 md:mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wider transition-all duration-300 border ${activeTab === category
                                ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                : "bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {category === 'All' ? 'Semua Kategori' : category}
                        </button>
                    ))}
                </div>

                {/* Projects Layout  */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 md:gap-8">
                        {filteredProjects.map((project, idx) => {
                            const Icon = project.icon;
                            return (
                                <div
                                    key={project.id}
                                    className={`glass-panel overflow-hidden group hover:border-cyan-400/40 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col`}
                                >
                                    {/* Top side: Abstract Visual (Moved up for better grid looking) */}
                                    <div className="h-[100px] sm:h-[180px] md:h-[240px] relative overflow-hidden flex items-center justify-center bg-gray-900 w-full shrink-0">

                                        {/* Iframe Thumbnail Container */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className="w-[1440px] h-[1080px] shrink-0 origin-center scale-[0.3] sm:scale-[0.4] md:scale-[0.5] lg:scale-[0.6]">
                                                <iframe
                                                    src={project.url}
                                                    title={`${project.title} live preview`}
                                                    className="w-full h-full border-0"
                                                    loading="lazy"
                                                    tabIndex="-1"
                                                />
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-[#050510]/80 pointer-events-none"></div>

                                        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                                    </div>

                                    {/* Bottom side: Project Info */}
                                    <div className="p-3 sm:p-6 md:p-8 flex flex-col justify-between flex-1 border-t border-white/10">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3 md:mb-5">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-md md:rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 flex-shrink-0">
                                                    <Icon className="w-3 h-3 md:w-5 md:h-5" />
                                                </div>
                                                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[7px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest line-clamp-1">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className="text-sm sm:text-2xl md:text-3xl font-black text-white mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors tracking-tight leading-tight line-clamp-2">
                                                {project.title}
                                            </h3>

                                            <p className="text-[9px] sm:text-xs md:text-sm text-gray-400 mb-3 md:mb-6 leading-snug font-medium line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 md:mb-6">
                                                {project.tags.map((tag, tagIdx) => (
                                                    <span
                                                        key={tagIdx}
                                                        className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 text-gray-300 text-[8px] sm:text-[10px] font-medium border border-white/5"
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
                                            className="btn-secondary-fashion w-full sm:w-fit justify-center gap-1.5 md:gap-2 text-[8px] sm:text-xs md:text-sm py-1.5 sm:py-2 px-3"
                                        >
                                            Live
                                            <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="glass-panel w-full py-16 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-4">
                            <Palette className="w-8 h-8 text-cyan-400/50" />
                        </div>
                        <h4 className="text-white font-bold text-lg lg:text-xl mb-2">Segera Datang</h4>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-sm">Proyek untuk kategori ini masih dalam tahap pengerjaan dan akan segera dipublikasikan.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
