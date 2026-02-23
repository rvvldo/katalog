import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden">
            <div className="container-wide w-full flex flex-col items-center justify-center text-center z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel mb-5 md:mb-8 animate-fadeIn">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-cyan-400 text-[9px] md:text-xs font-bold uppercase tracking-widest">
                        Beyond The Ordinary
                    </span>
                </div>

                {/* Massive Title */}
                <h1 className="text-giant text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 mb-2 md:mb-6 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    OUTLIER
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-lg md:text-3xl text-gray-300 font-medium mb-2 md:mb-4 max-w-4xl mx-auto animate-fadeIn px-4" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                    Melangkah Lebih Jauh dari yang Biasa
                </p>

                <p className="text-xs sm:text-sm md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeIn px-2 md:px-4" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    Kami menciptakan pengalaman digital yang membawa brand Anda melampaui gravitasi dengan desain premium dan teknologi terkini.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-10 md:mb-20 animate-fadeIn w-full max-w-[250px] sm:max-w-none" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                    <a href="#pricing" className="btn-primary-fashion w-full sm:w-auto justify-center text-[10px] md:text-sm py-2.5 md:py-4">
                        Jelajahi Paket
                    </a>
                    <a href="#services" className="btn-secondary-fashion w-full sm:w-auto justify-center text-[10px] md:text-sm py-2.5 md:py-4">
                        Lihat Layanan
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-6 w-full max-w-4xl mx-auto animate-fadeIn px-2" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    <div className="glass-panel py-4 md:py-8 px-4 md:px-6 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-3xl md:text-5xl font-black text-cyan-400 mb-0.5 md:mb-2">10+</div>
                        <div className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-widest font-bold">Proyek</div>
                    </div>
                    <div className="glass-panel py-4 md:py-8 px-4 md:px-6 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-3xl md:text-5xl font-black text-cyan-400 mb-0.5 md:mb-2">5+</div>
                        <div className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-widest font-bold">Klien</div>
                    </div>
                    <div className="glass-panel py-4 md:py-8 px-4 md:px-6 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-3xl md:text-5xl font-black text-cyan-400 mb-0.5 md:mb-2">100%</div>
                        <div className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-widest font-bold">Kepuasan</div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <a href="#services" className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors animate-bounce">
                    <ArrowDown className="w-4 h-4 md:w-6 md:h-6" />
                </a>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-cyan-900/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10"></div>
        </section>
    );
};

export default Hero;
