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
            desc: 'Untuk perorangan atau startup yang ingin landing page / portfolio bisnis pertama mereka.',
            domain: 'Domain .my.id',
            hosting: 'Hosting Dewaweb',
            designFee: 'Rp 180.000',
            yearly: { first: 'Rp 650.000', renew: 'Rp 500.000' },
            quarterly: { first: 'Rp 306.000', renew: 'Rp 126.000' },
            features: ['Landing page / portfolio', 'Domain .my.id', 'Hosting Dewaweb', 'Desain responsif mobile', '2x revisi gratis'],
        },
        {
            id: 'pro',
            name: 'Pro',
            tagline: 'Standar Korporasi Global',
            icon: Zap,
            highlight: true,
            desc: 'Untuk individu & bisnis yang ingin website layak jual, presentabel, dan sesuai standar korporasi global.',
            domain: 'Domain .com',
            hosting: 'Hosting Dewaweb',
            designFee: 'Rp 500.000',
            yearly: { first: 'Rp 2.500.000', renew: 'Rp 2.000.000' },
            quarterly: { first: 'Rp 1.055.000', renew: 'Rp 555.000' },
            features: ['Website multi-halaman profesional', 'Domain .com internasional', 'Hosting Dewaweb premium', 'Desain korporat presentabel', '2x revisi gratis'],
        },
    ],
    addons: [
        { icon: Plus, title: 'Tambah Halaman', price: 'Rp 20.000 – 200.000', desc: 'Bergantung pada kompleksitas halaman.' },
        { icon: RefreshCw, title: 'Revisi Design', price: 'Rp 5.000 / komponen', desc: '2x gratis. Setelah itu dikenakan biaya per komponen.' },
        { icon: Palette, title: 'Tambah Fitur', price: 'Rp 10.000 – 400.000', desc: 'Fitur custom sesuai kebutuhan bisnis Anda.' },
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
                { name: 'Simple Motion Graphic', price: 'Rp 100.000', note: null },
                { name: 'Moderate Motion Graphic', price: 'Rp 250.000', note: null },
                { name: 'Slides / Presentation (8 halaman)', price: 'Rp 150.000 – 300.000', note: null },
                { name: 'Tambah halaman presentasi', price: 'Rp 20.000 – 40.000', note: null },
            ],
            revisionNote: 'Motion: 2x gratis, selanjutnya Rp 50.000/revisi · Slides: 2x gratis, selanjutnya Rp 10.000/halaman',
        },
        {
            title: 'Short Form Video',
            icon: Clapperboard,
            items: [
                { name: 'Simple', price: 'Rp 30.000 / konten', note: 'Revisi gratis' },
                { name: 'Narrated', price: 'Rp 50.000 / konten', note: '3x revisi gratis' },
                { name: 'From Scratch', price: 'Rp 80.000 / konten', note: '2x revisi gratis' },
            ],
            revisionNote: 'Biaya ekstra revisi: Rp 10.000/revisi (jika melebihi batas gratis)',
        },
    ],
};

/* ─── SUB-COMPONENTS ────────────────────────────────────── */

const BillingToggle = ({ billing, setBilling }) => (
    <div className="flex items-center justify-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 w-fit mx-auto mt-6">
        {['yearly', 'quarterly'].map((opt) => (
            <button
                key={opt}
                onClick={() => setBilling(opt)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${billing === opt
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
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
        <div>
            <p className="text-center text-gray-400 text-sm mb-2">
                Layanan pembuatan website untuk personal maupun korporasi.
            </p>
            <BillingToggle billing={billing} setBilling={setBilling} />

            {/* Package Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
                {websiteData.packages.map((pkg) => {
                    const Icon = pkg.icon;
                    const price = billing === 'yearly' ? pkg.yearly : pkg.quarterly;
                    return (
                        <div
                            key={pkg.id}
                            className={`relative flex flex-col rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${pkg.highlight
                                ? 'border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 bg-white/8'
                                : 'border border-white/10 bg-white/5'
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500 text-white text-xs font-bold shadow-lg">
                                        ★ Terpopuler
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Paket {pkg.name}</h3>
                                    <p className="text-xs text-gray-400">{pkg.tagline}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-4 leading-relaxed">{pkg.desc}</p>

                            {/* Specs */}
                            <div className="bg-white/5 border border-white/8 rounded-xl p-4 mb-4 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Domain</span>
                                    <span className="text-white font-medium">{pkg.domain}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Hosting</span>
                                    <span className="text-white font-medium">{pkg.hosting}</span>
                                </div>
                                <div className="h-px bg-white/8" />
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Jasa Design</span>
                                    <span className="text-cyan-400 font-bold">
                                        {pkg.designFee}{' '}
                                        <span className="text-gray-500 font-normal text-xs">(sekali bayar)</span>
                                    </span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <div className="text-3xl font-black text-cyan-400">{price.first}</div>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    {billing === 'yearly' ? 'Tahun pertama' : 'Triwulan pertama'}
                                    {' · '}Perpanjangan:{' '}
                                    <span className="text-gray-300 font-medium">{price.renew}</span>
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {pkg.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`mt-auto w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-200 block ${pkg.highlight
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 shadow-lg shadow-cyan-500/30'
                                    : 'bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-cyan-400/30'
                                    }`}
                            >
                                Pesan Paket {pkg.name}
                            </a>
                        </div>
                    );
                })}
            </div>

            {/* Add-ons */}
            <div className="mt-10 max-w-4xl mx-auto">
                <h4 className="text-white font-bold text-base mb-4 text-center">
                    <span className="text-cyan-400">+</span> Jasa Tambahan (Add-ons)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {websiteData.addons.map((a, i) => {
                        const Icon = a.icon;
                        return (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/20 transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                                        <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-white font-semibold text-sm">{a.title}</span>
                                </div>
                                <div className="text-cyan-400 font-bold text-sm mb-1">{a.price}</div>
                                <p className="text-gray-500 text-xs">{a.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const ContentTab = () => (
    <div>
        <p className="text-center text-gray-400 text-sm mb-8">
            Layanan pembuatan desain statis, dinamis, dan video pendek untuk konten Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contentData.categories.map((cat, ci) => {
                const Icon = cat.icon;
                return (
                    <div
                        key={ci}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/20 transition-all flex flex-col"
                    >
                        {/* Category header */}
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                                <Icon className="w-4 h-4" />
                            </div>
                            <h4 className="text-white font-bold text-base">{cat.title}</h4>
                        </div>

                        {/* Items */}
                        <ul className="space-y-3 flex-1">
                            {cat.items.map((item, ii) => (
                                <li key={ii} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <span className="text-gray-300 text-sm leading-snug">{item.name}</span>
                                        <span className="text-cyan-400 font-bold text-sm whitespace-nowrap">{item.price}</span>
                                    </div>
                                    {item.note && (
                                        <span className="text-xs text-gray-500 mt-0.5 block">{item.note}</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Revision note */}
                        {cat.revisionNote && (
                            <div className="mt-4 pt-4 border-t border-white/8">
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    <span className="text-gray-400 font-medium">Revisi: </span>
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
    <div className="max-w-xl mx-auto text-center py-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-5">
            <BarChart2 className="w-7 h-7 text-cyan-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Account Management</h3>
        <p className="text-gray-400 text-base mb-6 leading-relaxed">
            Layanan pengelolaan akun media sosial dan digital marketing profesional.
            Detail harga & paket akan segera diumumkan.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left max-w-sm mx-auto mb-7">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Yang akan tersedia:</p>
            {[
                'Manajemen media sosial',
                'Pembuatan jadwal konten',
                'Analisis performa akun',
                'Strategi pertumbuhan organik',
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 text-sm text-gray-300">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    {item}
                </div>
            ))}
        </div>
        <a
            href="mailto:lierout641@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-7 py-3 rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/25"
        >
            Tanyakan Harga
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
        <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                        <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Paket Layanan</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-white">
                        Pilih Paket Terbaik
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
                        Harga transparan, tanpa biaya tersembunyi.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Active Tab Content */}
                <div className="transition-all duration-300">
                    {ActiveComponent && <ActiveComponent />}
                </div>

                {/* Footer note */}
                <p className="text-center text-xs text-gray-500 mt-10">
                    Ada kebutuhan khusus atau ingin negosiasi?{' '}
                    <a
                        href="mailto:lierout641@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                        Hubungi kami langsung →
                    </a>
                </p>

            </div>
        </section>
    );
};

export default Pricing;
