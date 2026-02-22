import React from 'react';

const GalaxyBackground = () => {
    return (
        <>
            {/* Fixed background layer */}
            <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
                {/* Large Nebula Clouds - Very visible */}
                <div
                    className="absolute -top-40 -right-40 w-[1000px] h-[1000px] rounded-full blur-[150px] bg-cyan-500 animate-float"
                    style={{
                        opacity: 0.15,
                        animationDuration: '20s'
                    }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full blur-[120px] bg-blue-600 animate-float"
                    style={{
                        opacity: 0.12,
                        animationDuration: '25s',
                        animationDelay: '5s'
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] bg-purple-600 animate-float"
                    style={{
                        opacity: 0.1,
                        animationDuration: '30s',
                        animationDelay: '10s'
                    }}
                />

                {/* Small glowing orbs */}
                <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full blur-[60px] bg-cyan-400" style={{ opacity: 0.2 }} />
                <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full blur-[50px] bg-blue-500" style={{ opacity: 0.15 }} />

                {/* Orbital Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="absolute rounded-full border-2 border-cyan-400/10 animate-spin-slow"
                        style={{
                            width: '60vw',
                            height: '60vw',
                            animationDuration: '40s',
                        }}
                    />
                    <div
                        className="absolute rounded-full border border-blue-400/5 animate-spin-slow"
                        style={{
                            width: '80vw',
                            height: '80vw',
                            animationDuration: '55s',
                            animationDirection: 'reverse',
                        }}
                    />
                    <div
                        className="absolute rounded-full border border-purple-400/5 animate-spin-slow"
                        style={{
                            width: '100vw',
                            height: '100vw',
                            animationDuration: '70s',
                        }}
                    />
                </div>

                {/* Static glowing particles */}
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                    />
                ))}

                {/* Grid with perspective - more visible */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.08) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                        transform: 'perspective(800px) rotateX(60deg) scale(2)',
                        transformOrigin: 'center top',
                        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                        opacity: 0.6,
                    }}
                />
            </div>
        </>
    );
};

export default GalaxyBackground;
