import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content: "Desain website e-commerce kami yang baru sangat luar biasa. Tim mampu menangkap esensi brand premium kami dan menerjemahkannya ke dalam user experience yang mulus. Konversi penjualan meningkat 40% setelah peluncuran.",
        author: "Sarah L.",
        role: "Founder, Fashion Outlier",
        rating: 5,
        delay: "0.1s"
    },
    {
        id: 2,
        content: "Sebagai klinik kesehatan mental, kami butuh platform yang menenangkan namun profesional. Mereka mengeksekusi visi kami dengan sangat sempurna. Sangat direkomendasikan untuk siapa saja yang butuh UI/UX berkelas.",
        author: "Dr. Adrian M.",
        role: "Direktur Klinik, MindCare",
        rating: 5,
        delay: "0.2s"
    },
    {
        id: 3,
        content: "Kolaborasi yang sangat efisien! Proses pembuatannya cepat namun hasilnya sangat detail. Desain yang diberikan benar-benar sesuai dengan standar korporasi internasional yang kami butuhkan.",
        author: "Kelvin T.",
        role: "Product Manager, TechNova",
        rating: 5,
        delay: "0.3s"
    },
    {
        id: 4,
        content: "Platform edukasi kami kini jauh lebih interaktif dan mudah diakses oleh murid-murid berkat redesign dari tim ini. Animasi dan elemen desainnya membuat proses belajar jadi tidak membosankan.",
        author: "Dian P.",
        role: "EduLasCode",
        rating: 4,
        delay: "0.4s"
    },
    {
        id: 5,
        content: "Layanan account management mereka benar-benar membantu bisnis kami berkembang. Pertumbuhan organik dan strategi kontennya sangat tepat sasaran dan memberikan hasil nyata.",
        author: "Budi S.",
        role: "Owner, Kopi Senja",
        rating: 5,
        delay: "0.5s"
    },
    {
        id: 6,
        content: "Pembuatan short video untuk campaign terbaru kami sangat on-point. Visualnya menarik dan editingnya profesional. Engagement di media sosial melonjak tajam.",
        author: "Nina R.",
        role: "Marketing Manager",
        rating: 5,
        delay: "0.6s"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate how many slides there are (3 cards per slide on desktop, 1 on mobile)
    const cardsPerSlide = windowWidth >= 1024 ? 3 : 1;
    const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

    // Reset index to 0 when screen resizes to prevent out-of-bounds
    useEffect(() => {
        setActiveIndex(0);
    }, [cardsPerSlide]);

    // Auto rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 8000);
        return () => clearInterval(interval);
    }, [activeIndex, totalSlides]);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Get the current slide's testimonials
    const getCurrentTestimonials = () => {
        const startIndex = activeIndex * cardsPerSlide;
        return testimonials.slice(startIndex, startIndex + cardsPerSlide);
    };

    return (
        <section id="testimonials" className="py-12 sm:py-24 md:py-32 bg-transparent relative z-10 w-full overflow-hidden">
            <div className="container-wide">

                {/* Header Large Scale */}
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="text-section text-white mb-3 md:mb-6">
                        Kepercayaan <span className="text-cyan-400">Klien</span>
                    </h2>

                    <p className="text-xs sm:text-base md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed px-2">
                        Dampak nyata dari sentuhan kreatif dan teknologi premium yang kami berikan.
                    </p>
                </div>

                {/* Main Carousel Container */}
                <div className="max-w-[1400px] mx-auto relative px-4 sm:px-12 md:px-20">

                    {/* Navigation Buttons (Desktop Absolute, Mobile hidden/bottom) */}
                    <button
                        onClick={handlePrev}
                        className="hidden sm:flex absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full glass-panel items-center justify-center text-white hover:text-cyan-400 hover:scale-110 transition-all z-20"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="hidden sm:flex absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full glass-panel items-center justify-center text-white hover:text-cyan-400 hover:scale-110 transition-all z-20"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Testimonial Cards Grid */}
                    <div className="overflow-hidden">
                        <div
                            className={`grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-500 min-h-[400px] lg:min-h-[380px] ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                        >
                            {getCurrentTestimonials().map((testimonial, idx) => (
                                <div key={testimonial.id} className="glass-panel p-6 sm:p-8 md:p-10 relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">

                                    {/* Decorative Quote Icon Background */}
                                    <div className="absolute top-4 right-4 text-white/[0.03] group-hover:text-cyan-500/[0.05] transition-colors duration-500 transform rotate-12">
                                        <Quote size={60} className="sm:w-[80px] sm:h-[80px]" />
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4 md:mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed mb-6 md:mb-8 flex-grow">
                                            "{testimonial.content}"
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4 mt-auto">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-900/60 to-blue-900/60 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-black text-sm md:text-base uppercase flex-shrink-0">
                                                {testimonial.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h5 className="text-sm md:text-base font-bold text-white tracking-tight">
                                                    {testimonial.author}
                                                </h5>
                                                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-8 md:mt-12">
                        {[...Array(totalSlides)].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (isAnimating) return;
                                    setIsAnimating(true);
                                    setActiveIndex(idx);
                                    setTimeout(() => setIsAnimating(false), 500);
                                }}
                                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${activeIndex === idx
                                    ? 'w-6 md:w-8 bg-cyan-400'
                                    : 'w-1.5 md:w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex sm:hidden justify-center gap-4 mt-6">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-cyan-400 active:scale-95 transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-cyan-400 active:scale-95 transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
                {/* Huge CTA Banner */}
                <section id="diskusi">
                    <div className="glass-panel relative overflow-hidden p-6 sm:p-14 md:p-24 lg:p-32 rounded-[16px] md:rounded-[40px] mb-12 md:mb-24 lg:mb-32 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-16 border-cyan-500/20 text-center lg:text-left mt-40">
                        <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] bg-cyan-900/40 blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none z-0"></div>

                        <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
                            <h2 className="text-section text-white leading-[1.1] mb-5 md:mb-8">
                                Revolusi <span className="text-cyan-400">Digital</span><br className="block sm:hidden" /> Anda<br className="hidden md:block" /> Dimulai<br className="hidden lg:block" /> Dari Sini.
                            </h2>
                        </div>

                        <div className="relative z-10 flex-shrink-0 w-full lg:w-auto mt-2 sm:mt-0">
                            <button onClick={() => window.open("https://wa.me/62881026176985", "_blank")} className="btn-primary-fashion py-3 px-6 md:py-6 md:px-12 text-[11px] sm:text-sm md:text-lg w-full lg:w-auto justify-center">
                                Mulai Diskusi
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Testimonials;
