import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Footer Grid - Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
                            OUTLIER
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
                            Creative agency yang membangun brand yang menentang gravitasi.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Layanan</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website Portfolio</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website UMKM</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Content Creation</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Perusahaan</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Karir</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Hubungi Kami</h4>
                        <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                            Siap meluncurkan proyek Anda?
                        </p>
                        <a href="mailto:hello@outlier.com" className="flex items-center gap-2 text-cyan-400 text-sm sm:text-base hover:text-cyan-300 transition-colors">
                            <Mail className="w-4 h-4" />
                            lierout641@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom - Responsive */}
                <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                        © 2026 <span className="text-cyan-400 font-semibold">Outlier</span>. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
                    >
                        <span>Kembali ke Atas</span>
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
