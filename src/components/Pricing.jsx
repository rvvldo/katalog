import React, { useState } from 'react';
import { Check, Globe, Zap, Plus, RefreshCw, Palette, Image, Video, Clapperboard, BarChart2, ChevronRight } from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────────── */
const websiteData = {
    packages: [
        {
            id: 'basic',
            name: 'Basic',
            tagline: 'Personal & Startup',
            icon: Globe,
            highlight: false,
            desc: 'Landing page / portfolio bisnis pertama.',
            domain: 'Domain .my.id',
            hosting: 'Hosting Dewaweb',
            designFee: 'Rp 180.000',
            yearly: { first: 'Rp 650.000' },
            quarterly: { first: 'Rp 306.000' },
            features: ['Landing page / portfolio', 'Domain .my.id', 'Hosting Dewaweb', 'Desain responsif mobile', '2x revisi gratis'],
        },
        {
            id: 'pro',
            name: 'Pro',
            tagline: 'Standar Korporasi',
            icon: Zap,
            highlight: true,
            desc: 'Website layak jual, standar korporasi global.',
            domain: 'Domain .com',
            hosting: 'Hosting Dewaweb',
            designFee: 'Rp 500.000',
            yearly: { first: 'Rp 2.500.000' },
            quarterly: { first: 'Rp 1.055.000' },
            features: ['Website multi-halaman', 'Domain .com', 'Hosting premium', 'Desain korporat', '2x revisi gratis'],
        },
    ],
    addons: [
        { icon: Plus, title: 'Tambah Halaman', price: 'Rp 20.000 – 200.000', desc: 'Bergantung kompleksitas halaman.' },
        { icon: RefreshCw, title: 'Revisi Design', price: 'Rp 5.000 / komponen', desc: 'Sesuai batas revisi paket.' },
        { icon: Palette, title: 'Tambah Fitur', price: 'Rp 10.000 – 400.000', desc: 'Sesuai kebutuhan spesifik Anda.' },
    ],
};

const contentData = {
    categories: [
        {
            title: 'Static Designs',
            icon: Image,
            items: [
                { name: 'Poster / Infographic', price: 'Rp 50.000 / konten', note: null },
            ],
            revisionNote: null,
        },
        {
            title: 'Dynamic Designs',
            icon: Palette,
            items: [
                { name: 'Simple Motion', price: 'Rp 100.000', note: null },
                { name: 'Moderate Motion', price: 'Rp 250.000', note: null },
                { name: 'Slides (8 hal)', price: 'Rp 150.000 – 300.000', note: null },
                { name: 'Extra hal slides', price: 'Rp 20.000 – 40.000', note: null },
            ],
            revisionNote: 'Motion: 2x gratis, lnjt 50k/rev · Slides: 2x gratis, lnjt 10k/hal',
        },
        {
            title: 'Short Form Video',
            icon: Clapperboard,
            items: [
                { name: 'Simple', price: 'Rp 30.000 / video', note: 'Revisi gratis' },
                { name: 'Narrated', price: 'Rp 50.000 / video', note: '3x revisi gratis' },
                { name: 'From Scratch', price: 'Rp 80.000 / video', note: '2x revisi gratis' },
            ],
            revisionNote: 'Ekstra revisi: Rp 10.000 (jika melewati gratis)',
        },
    ],
};

/* ─── SUB-COMPONENTS ────────────────────────────────────── */

const BillingToggle = ({ billing, setBilling }) => (
    <div className="flex items-center justify-center gap-1 glass-panel rounded-full p-1 w-fit mx-auto mt-4 mb-8 sm:mb-16 shadow-2xl">
        {['yearly', 'quarterly'].map((opt) => (
            <button
                key={opt}
                onClick={() => setBilling(opt)}
                className={`px-4 py-1.5 sm:px-8 sm:py-3 rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-all duration-400 ${billing === opt
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                    }`}
            >
                {opt === 'yearly' ? 'Tahunan' : 'Triwulan'}
            </button>
        ))}
    </div>
);

const WebsiteTab = () => {
    const [billing, setBilling] = useState('yearly');
    return (
        <div className="animate-fadeIn w-full max-w-[1400px] mx-auto">
            <BillingToggle billing={billing} setBilling={setBilling} />

            {/* Package Cards Large */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-12 w-full">
                {websiteData.packages.map((pkg) => {
                    const Icon = pkg.icon;
                    const price = billing === 'yearly' ? pkg.yearly : pkg.quarterly;
                    return (
                        <div
                            key={pkg.id}
                            className={`glass-panel p-5 sm:p-10 md:p-12 lg:p-16 relative hover:-translate-y-2 transition-transform duration-500 ${pkg.highlight ? 'border-2 border-cyan-400/50 shadow-2xl shadow-cyan-900/20' : ''
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 right-3 sm:right-4 md:right-10 -translate-y-1/2 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full bg-cyan-500 text-white text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Paket Unggulan
                                </div>
                            )}

                            {/* Info */}
                            <div className="flex flex-col mb-5 md:mb-10 text-center sm:text-left items-center sm:items-start">
                                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[12px] md:rounded-[20px] bg-gradient-to-br from-cyan-900/60 to-blue-900/60 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 md:mb-6">
                                    <Icon className="w-5 h-5 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-1">
                                    {pkg.name}
                                </h3>
                                <p className="text-[11px] sm:text-base md:text-lg text-gray-400">{pkg.tagline}</p>
                            </div>

                            <p className="text-xs sm:text-base md:text-xl text-gray-300 mb-5 md:mb-10 leading-relaxed font-medium min-h-[3rem] sm:min-h-[4rem] text-center sm:text-left">
                                {pkg.desc}
                            </p>

                            {/* Price massive */}
                            <div className="mb-6 md:mb-12 border-b border-white/10 pb-5 md:pb-12 text-center sm:text-left">
                                <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tighter mb-1 leading-none">
                                    {price.first}
                                </div>
                                <p className="text-[10px] sm:text-base text-gray-400 uppercase tracking-widest font-bold mt-2 sm:mt-4 flex flex-col sm:flex-row gap-0.5 sm:gap-2 justify-center sm:justify-start">
                                    <span>{billing === 'yearly' ? 'Tahun pertama' : 'Triwulan 1'}</span>

                                </p>
                            </div>

                            {/* Specs Table Format */}
                            <div className="mb-6 md:mb-12 space-y-2 md:space-y-4">
                                <h5 className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-3 md:mb-6 text-center sm:text-left">Paket Meliputi:</h5>
                                <div className="flex justify-between items-center py-1.5 sm:py-2.5 md:py-3 border-b border-white/5 flex-wrap sm:flex-nowrap">
                                    <span className="text-gray-400 text-[11px] sm:text-sm md:text-lg">Domain</span>
                                    <span className="text-white font-bold text-[11px] sm:text-sm md:text-lg text-right">{pkg.domain}</span>
                                </div>
                                <div className="flex justify-between items-center py-1.5 sm:py-2.5 md:py-3 border-b border-white/5 flex-wrap sm:flex-nowrap">
                                    <span className="text-gray-400 text-[11px] sm:text-sm md:text-lg">Hosting</span>
                                    <span className="text-white font-bold text-[11px] sm:text-sm md:text-lg text-right">{pkg.hosting}</span>
                                </div>
                                <div className="flex justify-between items-center py-1.5 sm:py-2.5 md:py-3 border-b border-white/5 flex-wrap sm:flex-nowrap">
                                    <span className="text-gray-400 text-[11px] sm:text-sm md:text-lg">Design (1x)</span>
                                    <span className="text-cyan-400 font-black text-[11px] sm:text-sm md:text-lg text-right">{pkg.designFee}</span>
                                </div>
                            </div>

                            {/* Features list */}
                            <ul className="mb-8 md:mb-14 space-y-2 md:space-y-4">
                                {pkg.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm md:text-lg text-gray-300 font-medium justify-center sm:justify-start">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                        </div>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#diskusi"
                                className={`w-full py-3 sm:py-4 md:py-6 shadow-lg flex items-center justify-center uppercase tracking-widest font-bold text-[10px] sm:text-sm md:text-base ${pkg.highlight
                                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-[12px] sm:rounded-[16px] md:rounded-[24px] hover:scale-105 transition-transform duration-300'
                                    : 'btn-secondary-fashion border-white/10 text-white rounded-[12px] sm:rounded-[16px] md:rounded-[24px]'
                                    }`}
                            >
                                Pesan Sekarang
                            </a>
                        </div>
                    );
                })}
            </div>

            {/* Add-ons */}
            <div className="mt-12 sm:mt-16 md:mt-24">
                <h4 className="text-lg md:text-2xl font-black text-white mb-6 md:mb-10 text-center uppercase tracking-widest">
                    <span className="text-cyan-400">+</span> Add-ons Ekstra
                </h4>
                <div className="grid grid-cols-3 gap-2 md:gap-6 px-2 sm:px-0">
                    {websiteData.addons.map((a, i) => {
                        const Icon = a.icon;
                        return (
                            <div key={i} className="glass-panel p-3 sm:p-6 md:p-8 text-center hover:border-cyan-400/30 transition-colors">
                                <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto rounded-[8px] sm:rounded-2xl bg-cyan-900/30 flex items-center justify-center text-cyan-400 border border-cyan-500/10 mb-2 md:mb-6">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                                <h5 className="text-[9px] sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2 tracking-tight leading-tight">{a.title}</h5>
                                <div className="text-cyan-400 font-black text-[8px] sm:text-base md:text-lg mb-1 md:mb-4">{a.price.split(' ')[0] + ' ' + (a.price.split(' ')[1] || '')}</div>
                                <p className="text-gray-400 text-[7px] sm:text-sm md:text-base leading-tight sm:leading-relaxed">{a.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const ContentTab = () => (
    <div className="animate-fadeIn w-full max-w-[1400px] mx-auto mt-6">
        <p className="text-center text-gray-400 text-xs sm:text-base md:text-2xl mb-8 md:mb-16 font-medium max-w-3xl mx-auto px-2">
            Solusi visual berkelas untuk mengemas konten Anda lebih premium.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            {contentData.categories.map((cat, ci) => {
                const Icon = cat.icon;
                return (
                    <div
                        key={ci}
                        className="glass-panel p-5 sm:p-10 hover:border-cyan-400/40 transition-all flex flex-col"
                    >
                        {/* Category header massive */}
                        <div className="flex flex-col items-center text-center gap-3 md:gap-6 mb-6 md:mb-12 border-b border-white/10 pb-5 md:pb-10">
                            <div className="w-14 h-14 md:w-20 md:h-20 rounded-[16px] md:rounded-[24px] bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                <Icon className="w-5 h-5 md:w-8 md:h-8" />
                            </div>
                            <h4 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter">
                                {cat.title}
                            </h4>
                        </div>

                        {/* Items listed cleanly */}
                        <ul className="space-y-3 md:space-y-6 flex-1 mb-5 md:mb-8">
                            {cat.items.map((item, ii) => (
                                <li key={ii} className="flex flex-col gap-1 md:gap-2 bg-white/5 p-3 md:p-5 rounded-[12px] md:rounded-2xl border border-white/5 text-center sm:text-left">
                                    <span className="text-white font-bold text-[12px] sm:text-base md:text-lg">{item.name}</span>
                                    <span className="text-cyan-400 font-black text-[13px] sm:text-lg md:text-xl">{item.price}</span>
                                    {item.note && (
                                        <span className="text-[10px] sm:text-sm text-gray-400 font-medium">{item.note}</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Revision Note isolated */}
                        {cat.revisionNote && (
                            <div className="p-4 md:p-6 rounded-[12px] md:rounded-2xl bg-cyan-900/20 border border-cyan-500/10 mt-auto text-center sm:text-left">
                                <p className="text-[10px] sm:text-xs md:text-sm text-white leading-relaxed font-medium">
                                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-[9px] md:text-xs block mb-1 md:mb-2">Notice Revisi</span>
                                    {cat.revisionNote}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    </div>
);

const AccountTab = () => (
    <div className="animate-fadeIn max-w-3xl mx-auto text-center py-10 md:py-20 px-4 md:px-8 glass-panel shadow-2xl shadow-cyan-900/10 mt-6">
        <div className="w-14 h-14 md:w-24 md:h-24 rounded-[16px] md:rounded-[30px] bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 flex items-center justify-center mx-auto mb-5 md:mb-10">
            <BarChart2 className="w-6 h-6 md:w-10 md:h-10 text-cyan-400" />
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-3 md:mb-6 uppercase tracking-tighter leading-tight">
            Account Management
        </h3>
        <p className="text-gray-400 text-xs sm:text-base md:text-xl md:text-2xl mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Layanan pengelolaan akun media sosial dan digital marketing profesional level atas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-w-2xl mx-auto mb-8 md:mb-16 text-left">
            {[
                'Manajemen Sosmed',
                'Analisis Performa Akun',
                'Pembuatan Jadwal Konten',
                'Strategi Organik Pertumbuhan',
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 p-3 md:p-5 rounded-[12px] md:rounded-2xl">
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-white font-bold text-[11px] sm:text-sm md:text-base">{item}</span>
                </div>
            ))}
        </div>

        <a
            href="mailto:lierout641@gmail.com"
            className="btn-primary-fashion w-full sm:w-auto text-[11px] sm:text-sm md:text-lg py-3 px-6 md:py-5 md:px-12 justify-center"
        >
            Konsultasi Harga Sekarang
        </a>
    </div>
);

/* ─── MAIN COMPONENT ────────────────────────────────────── */

const tabs = [
    { id: 'website', label: 'Website', Component: WebsiteTab },
    { id: 'content', label: 'Content', Component: ContentTab },
    { id: 'account', label: 'Account Management', Component: AccountTab },
];

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('website');
    const ActiveComponent = tabs.find((t) => t.id === activeTab)?.Component;

    return (
        <section id="pricing" className="py-12 sm:py-24 md:py-32 bg-transparent relative z-10">
            <div className="container-wide">

                {/* Header Large Scale */}
                <div className="text-center mb-10 md:mb-28">


                    <h2 className="text-section text-white mb-3 md:mb-6">
                        Pilih <span className="text-cyan-400">Paket</span> <br className="block sm:hidden" /> Terbaik
                    </h2>

                    <p className="text-xs sm:text-base md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed px-2">
                        Kami menjamin tidak ada biaya tersembunyi.
                    </p>
                </div>

                {/* Tab Switcher - Huge Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 md:mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 sm:px-6 md:px-12 py-2 sm:py-3.5 md:py-4 flex-1 sm:flex-none sm:w-auto rounded-full text-[9px] sm:text-[11px] md:text-sm font-bold uppercase tracking-widest transition-all duration-400 ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-xl shadow-cyan-900/20 scale-100 sm:scale-105'
                                : 'glass-panel text-gray-400 border-white/10 hover:text-white hover:border-cyan-400/30'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Active Tab Content */}
                <div className="transition-all duration-500">
                    {ActiveComponent && <ActiveComponent />}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
