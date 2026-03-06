import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="w-full relative mt-8 md:mt-5 glass-panel !rounded-none bg-gray-900/40 backdrop-blur-2xl border-t border-white/5 pt-12 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12">
            <div className="container-wide">

                {/* Footer Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-10 md:mb-20">

                    {/* Brand — full width on mobile */}
                    <div className="col-span-2 lg:col-span-1 pb-8 border-b border-white/10 lg:border-0 lg:pb-0">
                        <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tighter mb-3 leading-none">
                            OUTLIER
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-6 max-w-xs">
                            Creative agency yang membangun brand eksklusif di era digital.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" aria-label="Instagram" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all text-white hover:-translate-y-1 duration-300">
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" aria-label="Twitter" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all text-white hover:-translate-y-1 duration-300">
                                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all text-white hover:-translate-y-1 duration-300">
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-widest mb-4 sm:mb-6">Layanan</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 font-medium text-sm sm:text-base">
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website Portfolio</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website UMKM</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Content Creation</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-widest mb-4 sm:mb-6">Perusahaan</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 font-medium text-sm sm:text-base">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
                            <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Karir</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 sm:col-span-1 lg:col-span-1">
                        <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-widest mb-4 sm:mb-6">Hubungi Kami</h4>
                        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-5">
                            Siap meluncurkan proyek fenomenal?
                        </p>
                        <a
                            href="mailto:lierout641@gmail.com"
                            className="inline-flex items-center gap-3 text-cyan-400 text-sm sm:text-base font-semibold hover:text-cyan-300 transition-colors group"
                        >
                            <div className="w-9 h-9 rounded-full bg-cyan-900/40 flex items-center justify-center border border-cyan-500/20 flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span>lierout641@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 md:pt-10 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-widest text-center sm:text-left">
                        © 2026 <span className="text-cyan-400 font-black">OUTLIER</span>. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="btn-secondary-fashion py-2.5 px-5 sm:py-3 sm:px-6 gap-2 text-xs sm:text-sm"
                    >
                        Kembali Atas
                        <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
