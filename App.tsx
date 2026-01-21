import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InstagramFeed from './components/InstagramFeed';
import Process, { Timeline } from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ProcessData from './components/ui/process-data';
import ThreeDMarqueeDemo from './components/marque';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-400 selection:text-black overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InstagramFeed />
        <div className="section-divider bg-gradient-to-r from-black via-gold-600/20 to-black h-px w-full" />
        <ProcessData />
        <div className="bg-black">
          <ThreeDMarqueeDemo /></div>
        <Testimonials />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;