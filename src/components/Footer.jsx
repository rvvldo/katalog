import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="w-full relative mt-8 md:mt-5 glass-panel !rounded-none bg-gray-900/40 backdrop-blur-2xl border-t border-white/5 pt-8 pb-6 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12">
            <div className="container-wide">


                {/* Footer Grid - Large scale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-16 lg:gap-24 mb-6 md:mb-20 text-center sm:text-left">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1 border-b border-white/10 pb-6 sm:border-0 sm:pb-0">
                        <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 md:mb-8 leading-none">
                            OUTLIER
                        </h3>
                        <p className="text-gray-400 text-[9px] sm:text-base md:text-lg font-medium leading-relaxed mb-4 md:mb-10 max-w-[200px] sm:max-w-sm mx-auto sm:mx-0">
                            Creative agency yang membangun brand eksklusif di era digital.
                        </p>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start">
                            <a href="#" className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all text-white hover:-translate-y-2 duration-300">
                                <Instagram className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all text-white hover:-translate-y-2 duration-300">
                                <Twitter className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all text-white hover:-translate-y-2 duration-300">
                                <Linkedin className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[11px] sm:text-base md:text-lg font-black text-white uppercase tracking-widest mb-3 md:mb-8">Layanan</h4>
                        <ul className="space-y-2 sm:space-y-4 md:space-y-6 text-gray-400 font-medium text-[9px] sm:text-base md:text-lg flex flex-col items-center sm:items-start">
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website Portfolio</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website UMKM</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Content Creation</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[11px] sm:text-base md:text-lg font-black text-white uppercase tracking-widest mb-3 md:mb-8 mt-4 sm:mt-0">Perusahaan</h4>
                        <ul className="space-y-2 sm:space-y-4 md:space-y-6 text-gray-400 font-medium text-[9px] sm:text-base md:text-lg flex flex-col items-center sm:items-start">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
                            <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Karir</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="sm:col-span-2 lg:col-span-1 pt-4 border-t border-white/10 sm:pt-0 sm:border-0">
                        <h4 className="text-[11px] sm:text-base md:text-lg font-black text-white uppercase tracking-widest mb-3 md:mb-8">Hubungi Kami</h4>
                        <p className="text-gray-400 text-[9px] sm:text-base md:text-lg font-medium leading-relaxed mb-3 md:mb-8">
                            Siap meluncurkan proyek fenomenal?
                        </p>
                        <a href="mailto:lierout641@gmail.com" className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 text-cyan-400 text-[10px] sm:text-lg md:text-xl font-bold hover:text-cyan-300 transition-colors mx-auto sm:mx-0 w-fit">
                            <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-cyan-900/40 flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 h-5" />
                            </div>
                            <span className="truncate">lierout641@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Wide Bar */}
                <div className="pt-4 md:pt-12 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-3 md:gap-8">
                    <p className="text-gray-500 text-[8px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-center md:text-left mt-2 sm:mt-0">
                        © 2026 <span className="text-cyan-400 font-black">OUTLIER</span>. All right reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="btn-secondary-fashion py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 gap-1.5 md:gap-4 bg-white/5 border-white/10 text-[8px] sm:text-xs md:text-sm"
                    >
                        Kembali Atas
                        <ArrowUp className="w-2.5 h-2.5 md:w-5 md:h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
