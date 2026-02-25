import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Paket', href: '#pricing' },
    { name: 'Kontak', href: '#contact' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/60 backdrop-blur-2xl shadow-lg border-b border-white/10 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container-wide">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-black tracking-tight text-white hover:opacity-80 transition-opacity">
                        OUTLIER
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <a
                            href="#diskusi"
                            className="btn-primary-fashion"
                        >
                            Pesan
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors border border-white/10 backdrop-blur-sm bg-white/5"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 glass-panel p-4 animate-fadeIn">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-6 py-4 text-white hover:bg-white/5 hover:text-cyan-400 rounded-xl transition-all font-bold uppercase tracking-widest text-center text-sm"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn-primary-fashion w-full justify-center mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
