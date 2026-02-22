import React from 'react';
import { Code, Layout, Palette, Share2, Video, Megaphone } from 'lucide-react';

const servicesData = [
    {
        category: "Produksi Profil",
        items: [
            { title: "Website Portfolio", icon: Share2, desc: "Tampilkan karya terbaik dengan portfolio yang memukau." },
            { title: "Company Page", icon: Layout, desc: "Halaman perusahaan yang profesional dan modern." },
            { title: "UI/UX Design", icon: Palette, desc: "Desain antarmuka yang user-friendly dan estetis." },
            { title: "Landing Page", icon: Code, desc: "Halaman landing dengan konversi tinggi." }
        ]
    },
    {
        category: "Creative Service",
        items: [
            { title: "Advertisements", icon: Megaphone, desc: "Iklan visual yang memikat untuk social media." },
            { title: "Content Creation", icon: Video, desc: "Konten engaging untuk memperkuat brand identity." }
        ]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Header - Responsive */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4 sm:mb-6">
                        <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Layanan Kami</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-white px-4">
                        Solusi Digital Premium
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Kombinasi sempurna antara kreativitas dan teknologi
                    </p>
                </div>

                {/* Services - Responsive Grid */}
                <div className="space-y-12 sm:space-y-14 md:space-y-16">
                    {servicesData.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-cyan-400 px-4 sm:px-0">
                                {category.category}
                            </h3>

                            {/* Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                                {category.items.map((item, itemIdx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={itemIdx}
                                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-400/30 hover:-translate-y-2 transition-all"
                                        >
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4">
                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>

                                            <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                                {item.desc}
                                            </p>
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
