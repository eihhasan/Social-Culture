import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PointerHighlight } from './ui/pointer';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Main Background - Dark base */}
      <div className="absolute inset-0 bg-neutral-900" />

      {/* Enhanced Grid Pattern */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Gradient Orbs with Neon Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-gold-500/10 to-purple-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-gold-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none opacity-40" />

      {/* Neon Light Accents */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div> */}

      {/* Neon Corner Accents */}
      <div className="absolute top-8 left-8 w-32 h-32 border-t border-l border-gold-400/30 opacity-40"></div>
      <div className="absolute top-8 right-8 w-32 h-32 border-t border-r border-gold-400/30 opacity-40"></div>
      <div className="absolute bottom-8 left-8 w-32 h-32 border-b border-l border-purple-500/30 opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 border-b border-r border-purple-500/30 opacity-40"></div>

      {/* Floating Neon Particles */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-gold-400 rounded-full animate-bounce opacity-70">
        <div className="absolute inset-0 bg-gold-400 rounded-full blur-[2px]"></div>
      </div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-bounce delay-300 opacity-70">
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-[2px]"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gold-400 rounded-full animate-bounce delay-700 opacity-70">
        <div className="absolute inset-0 bg-gold-400 rounded-full blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Enhanced Badge with Neon Glow */}
        <div className="inline-block mb-8 px-6 py-2 rounded-full border border-gold-400/30 bg-gradient-to-r from-gold-400/10 to-transparent backdrop-blur-lg relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 to-transparent rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
          <div className="relative flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase neon-text">
              Digital Makeover Experts
            </span>
          </div>
        </div>

        {/* Enhanced Main Heading with Neon Glow */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-300 drop-shadow-2xl">
            WE SHAPE
          </span>
          <br />
          <span className="relative">
            <PointerHighlight>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,          // ⏱ 2 second delay
                  ease: "easeInOut", // smooth ease
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-500 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] inline-block"
              >
                SOCIAL CULTURE
              </motion.span>
            </PointerHighlight>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent blur-xl opacity-30 -z-10"></div>
          </span>
        </h1>

        {/* Enhanced Description with Subtle Glow */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed relative">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-lg">
            The premium digital marketing agency for brands that demand attention.
            From conceptualized video shoots to complete social media handling,
            we turn your digital presence into a legacy.
          </span>
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition hover:bg-slate-900">
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#services"
            className="px-8 py-3 rounded-full text-sm font-bold text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            EXPLORE SERVICES
          </a>

        </div>


      </div>
    </section>
  );
};

export default Hero;