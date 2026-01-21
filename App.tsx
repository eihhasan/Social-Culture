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
import { motion } from 'framer-motion';
import {
  Camera,
  Video,
  Mic,
  Users,
  TrendingUp,
  Heart,
  Share2,
  MessageCircle,
  Star,
  Target,
  Zap,
  Sparkles,
  Edit,
  Scissors,
  Palette,
  BarChart
} from 'lucide-react'; // Digital Marketing Icons
import { Instagram, Facebook, Youtube, Twitter } from './components/ui/BrandIcons';

const FloatingSocialIcons = () => {
  const symbols = [
    { icon: Instagram, delay: 0, size: "text-4xl", position: { top: "10%", left: "10%" } },
    { icon: Facebook, delay: 0.5, size: "text-3xl", position: { top: "20%", right: "15%" } },
    { icon: Youtube, delay: 1, size: "text-5xl", position: { top: "60%", left: "5%" } },
    { icon: Twitter, delay: 1.5, size: "text-3xl", position: { top: "40%", right: "10%" } },
    { icon: Camera, delay: 2, size: "text-4xl", position: { top: "80%", left: "20%" } },
    { icon: Video, delay: 2.5, size: "text-6xl", position: { top: "30%", left: "80%" } },
    { icon: Mic, delay: 3, size: "text-5xl", position: { top: "70%", right: "25%" } },
    { icon: Star, delay: 3.5, size: "text-3xl", position: { top: "15%", left: "60%" } },
    { icon: Heart, delay: 4, size: "text-4xl", position: { top: "85%", right: "5%" } },
    { icon: MessageCircle, delay: 4.5, size: "text-5xl", position: { top: "50%", left: "40%" } },
    { icon: Share2, delay: 5, size: "text-2xl", position: { top: "25%", left: "30%" } },
    { icon: Users, delay: 5.5, size: "text-6xl", position: { top: "45%", right: "30%" } },
    { icon: TrendingUp, delay: 6, size: "text-3xl", position: { top: "35%", left: "70%" } },
    { icon: Target, delay: 6.5, size: "text-4xl", position: { top: "75%", right: "40%" } },
    { icon: Zap, delay: 7, size: "text-2xl", position: { top: "55%", left: "15%" } },
    { icon: Sparkles, delay: 7.5, size: "text-7xl", position: { top: "90%", left: "50%" } },
    { icon: Edit, delay: 8, size: "text-3xl", position: { top: "5%", right: "35%" } },
    { icon: Scissors, delay: 8.5, size: "text-4xl", position: { top: "65%", left: "85%" } },
    { icon: Palette, delay: 9, size: "text-4xl", position: { top: "25%", right: "60%" } },
    { icon: BarChart, delay: 9.5, size: "text-3xl", position: { top: "45%", left: "90%" } },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {symbols.map((Symbol, index) => (
        <motion.div
          key={index}
          className={`absolute ${Symbol.size}`}
          style={{
            ...Symbol.position,
            color: "rgba(255, 215, 0, 0.6)",
            filter: "drop-shadow(0 0 12px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 24px rgba(255, 215, 0, 0.4))",
          }}
          initial={{ opacity: 0, y: 100, rotate: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.8, 0.4, 0.9, 0.3, 0.7],
            y: [-100, -200, -300, -400, -500, -600],
            x: [0, Math.random() * 120 - 60, Math.random() * 180 - 90, Math.random() * 100 - 50],
            rotate: [0, 180, 360, 540, 720, 900],
            scale: [0.5, 1.2, 0.8, 1.5, 0.6, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: Symbol.delay,
            ease: "easeInOut",
          }}
        >
          <Symbol.icon />
        </motion.div>
      ))}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-400 selection:text-black overflow-x-hidden font-sans relative">
      {/* Add the FloatingSocialIcons here */}
      <FloatingSocialIcons />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <InstagramFeed />
        <div className="section-divider bg-gradient-to-r from-black via-gold-600/20 to-black h-px w-full" />
        <ProcessData />
        <div className="bg-black">
          <ThreeDMarqueeDemo />
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;