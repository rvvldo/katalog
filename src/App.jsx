import React from 'react';
import Stars from './components/Stars';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Layer 1: Animated Stars (bottom) */}
      <Stars />

      {/* Layer 2: Galaxy Effects (middle) */}
      <GalaxyBackground />

      {/* Layer 10: Content (top) */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
