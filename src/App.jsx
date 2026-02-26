import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ButtonWa from './components/buttons/ButtonWa';

function App() {

  return (
    <div className="min-h-screen relative">

      {/* Layer 10: Content (top) */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Footer />
        <ButtonWa />
      </div>
    </div>
  );
}

export default App;
