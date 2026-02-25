import React from 'react';
import { Code, Layout, Palette, Share2, Video, Megaphone } from 'lucide-react';

const servicesData = [
    {
        category: "Produksi Profil",
        items: [
            { title: "Web LandingPage", icon: Share2, desc: "Buat landing page yang menarik dan informatif." },
            { title: "Web App", icon: Layout, desc: "Buat aplikasi web yang berfungsi dengan baik." },
            { title: "UI/UX Design", icon: Palette, desc: "Desain antarmuka user-friendly." }
        ]
    },
    {
        category: "Creative Service",
        items: [
            { title: "Account Management", icon: Megaphone, desc: "Pengelolaan akun media sosial." },
            { title: "Content Creation", icon: Video, desc: "Konten engaging untuk identitas brand." }
        ]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-12 sm:py-24 md:py-32 bg-transparent relative">
            <div className="container-wide">

                {/* Header */}
                <div className="mb-0 sm:mb-20 flex flex-col items-center text-center w-full">
                    <h2 className="text-section text-white mb-3 md:mb-6 leading-tight">
                        Solusi{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Digital Premium
                        </span>
                    </h2>

                    <p className="text-xs md:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed mx-auto mb-6">
                        Kombinasi desain eksklusif dan fungsionalitas teknologi untuk menaikkan level brand Anda.
                    </p>
                </div>

                {/* Services layout - Large bento style cards */}
                <div className="space-y-6 md:space-y-16">
                    {servicesData.map((category, idx) => (
                        <div key={idx} className="glass-panel p-5 sm:p-10 md:p-16 hover:border-cyan-400/40 transition-colors duration-500">

                            {/* Category Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8 mb-6 md:mb-16 border-b border-white/10 pb-4 md:pb-12 text-center md:text-left">
                                <h3 className="text-xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                    {category.category}
                                </h3>
                                <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
                            </div>

                            {/* Grid format inside the big card */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
                                {category.items.map((item, itemIdx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={itemIdx}
                                            className="group flex flex-row sm:flex-col items-center sm:items-start text-left gap-4 md:gap-6"
                                        >
                                            <div className="w-12 h-12 md:w-20 md:h-20 flex-shrink-0 rounded-[12px] md:rounded-[24px] bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                                <Icon className="w-5 h-5 md:w-8 md:h-8" />
                                            </div>

                                            <div>
                                                <h4 className="text-sm md:text-2xl font-bold mb-1 md:mb-4 text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                                                    {item.title}
                                                </h4>
                                                <p className="text-[11px] sm:text-xs md:text-lg text-gray-400 leading-relaxed sm:max-w-none mx-auto sm:mx-0">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
