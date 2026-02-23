import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Beranda', href: '#' },
        { name: 'Layanan', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Paket', href: '#pricing' },
        { name: 'Kontak', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo - Responsive sizing */}
                    <a href="#" className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
                        OUTLIER
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm lg:text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm lg:text-base hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
                        >
                            Pesan Sekarang
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/5 animate-fadeIn">
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-4 py-3 text-white hover:bg-white/5 hover:text-cyan-400 rounded-lg transition-all"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="block mx-4 mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-semibold"
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
