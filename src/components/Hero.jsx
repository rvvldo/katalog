import React from 'react';
import { Rocket, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto w-full text-center">
                {/* Badge - Responsive */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 sm:mb-8">
                    <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        Beyond The Ordinary
                    </span>
                </div>

                {/* Title - Very Responsive */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 text-white leading-tight">
                    OUTLIER
                </h1>

                {/* Subtitle - Responsive sizing */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 max-w-4xl mx-auto px-4">
                    Melangkah Lebih Jauh dari yang Biasa
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
                    <span className="text-cyan-400 font-medium">Kami menciptakan pengalaman digital</span> yang membawa brand Anda melampaui gravitasi
                </p>

                {/* CTA Buttons - Stack on mobile, row on tablet+ */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
                    <a
                        href="#pricing"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-base hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
                    >
                        <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                        Jelajahi Paket
                    </a>
                    <a
                        href="#services"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-cyan-400 text-white font-bold text-sm sm:text-base hover:bg-cyan-400/10 transition-all"
                    >
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                        Lihat Layanan
                    </a>
                </div>

                {/* Stats - Better responsive grid */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-white/10 px-4">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-cyan-400 mb-1 sm:mb-2">50+</div>
                        <div className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-cyan-400 mb-1 sm:mb-2">30+</div>
                        <div className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-cyan-400 mb-1 sm:mb-2">100%</div>
                        <div className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
