import React from 'react';
import { Check, Zap, Star, Trophy } from 'lucide-react';

const packages = [
    {
        name: "Small",
        price: "5 Juta",
        description: "Sempurna untuk startup kecil",
        features: [
            "Single Page Website",
            "Mobile Responsive",
            "3 Kali Revisi",
            "1 Bulan Support"
        ],
        icon: Zap,
        highlight: false
    },
    {
        name: "Medium",
        price: "12 Juta",
        description: "Ideal untuk bisnis berkembang",
        features: [
            "Multi-page Website (5-7 Halaman)",
            "SEO Optimization",
            "5 Kali Revisi",
            "3 Bulan Support"
        ],
        icon: Star,
        highlight: true
    },
    {
        name: "High",
        price: "25 Juta+",
        description: "Solusi untuk brand mapan",
        features: [
            "Custom Web Application",
            "Advanced Analytics",
            "Unlimited Revisions",
            "6 Bulan Support"
        ],
        icon: Trophy,
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
            <div className="max-w-7xl mx-auto">
                {/* Header - Responsive */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4 sm:mb-6">
                        <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Paket Layanan</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-white px-4">
                        Pilih Paket Terbaik
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Temukan paket yang sempurna untuk brand Anda
                    </p>
                </div>

                {/* Pricing Cards - Responsive Grid */}
                {/* Mobile: 1 col, Tablet: 2 cols (Medium highlighted full width), Desktop: 3 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, idx) => {
                        const Icon = pkg.icon;
                        return (
                            <div
                                key={idx}
                                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-8 hover:-translate-y-2 transition-all ${pkg.highlight
                                        ? 'border-2 border-cyan-400 md:col-span-2 lg:col-span-1 lg:scale-105 shadow-xl shadow-cyan-500/20'
                                        : 'border border-white/10'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {pkg.highlight && (
                                    <div className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 rounded-full bg-cyan-500 text-white text-xs font-bold mb-4">
                                        <Star className="w-3 h-3" fill="currentColor" />
                                        Terpopuler
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4 sm:mb-5">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>

                                {/* Package Info */}
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                                    {pkg.name}
                                </h3>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-2">
                                    {pkg.price}
                                </div>
                                <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">
                                    {pkg.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-6 sm:mb-8">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all ${pkg.highlight
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 shadow-lg shadow-cyan-500/30'
                                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-cyan-400/30'
                                    }`}>
                                    Pilih {pkg.name}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
