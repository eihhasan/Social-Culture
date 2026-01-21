import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      text: "Social Culture completely transformed our Instagram aesthetics. The video quality is on par with TV commercials, and the engagement skyrocketed beyond our expectations. Truly a game-changer for our brand.",
      author: "Rahul Sharma",
      role: "Brand Owner",
      rating: 5,
      size: "large"
    },
    {
      text: "Professional setup. We just had to walk in and speak. Seamless experience.",
      author: "Priya Mehta",
      role: "Life Coach",
      rating: 5,
      size: "small"
    },
    {
      text: "Our digital makeover brought 300% more leads in 2 months. They truly understand how to capture the audience's attention in the digital age.",
      author: "Amit Kumar",
      role: "Developer",
      rating: 5,
      size: "medium"
    },
    {
      text: "Exceptional creative vision. They don't just create content; they build a complete ecosystem for your brand to thrive in.",
      author: "Sneha Kapur",
      role: "Founder",
      rating: 5,
      size: "medium"
    },
    {
      text: "The team is incredible. Their attention to detail in lighting and sound was world-class.",
      author: "Vikram Singh",
      role: "Educator",
      rating: 5,
      size: "small"
    },
    {
      text: "Authenticity is hard to find in marketing. Social Culture found our unique voice and amplified it across all platforms with stunning visuals.",
      author: "Ananya Roy",
      role: "Artist",
      rating: 5,
      size: "large"
    },
    {
      text: "The results speak for themselves. Amazing growth!",
      author: "Zoya Khan",
      role: "Fashion Blogger",
      rating: 5,
      size: "small"
    },
    {
      text: "Impactful storytelling that resonates with the culture.",
      author: "Arjun Das",
      role: "Musician",
      rating: 5,
      size: "medium"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(nextSlide, 2000);
      return () => clearInterval(timer);
    }
  }, [isMobile, nextSlide]);

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(255,215,0,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 mb-4">
            <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
            <span className="text-[10px] font-black tracking-widest text-[#FFD700] uppercase">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Voice of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600">The Culture</span>
          </h2>
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          <div className="relative overflow-hidden min-h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="relative p-8 rounded-3xl bg-neutral-900 border border-white/5 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <Quote className="text-gold-400 w-10 h-10 opacity-30" />
                    <div className="flex gap-1">
                      {[...Array(testimonials[activeSlide].rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                    "{testimonials[activeSlide].text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-gold-400 font-black text-lg shadow-lg">
                      {testimonials[activeSlide].author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-none mb-1.5">{testimonials[activeSlide].author}</p>
                      <p className="text-gold-400/50 text-[10px] font-black uppercase tracking-widest">{testimonials[activeSlide].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold-400 hover:text-gold-400 transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-300 rounded-full ${activeSlide === i ? 'w-8 bg-gold-400' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold-400 hover:text-gold-400 transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden lg:block columns-3 gap-6 space-y-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`break-inside-avoid group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${t.size === 'large' ? 'pt-8' : t.size === 'medium' ? 'pt-4' : 'pt-0'
                }`}
            >
              <div className="absolute inset-0 bg-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/5 group-hover:border-gold-400/20 transition-colors" />

              <div className={`relative p-6 flex flex-col justify-between ${t.size === 'large' ? 'min-h-[280px]' : t.size === 'medium' ? 'min-h-[200px]' : 'min-h-[160px]'
                }`}>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <Quote className="text-gold-400 w-6 h-6 opacity-30" />
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-2.5 h-2.5 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                  </div>

                  <p className={`text-white/90 font-medium leading-relaxed mb-8 ${t.size === 'large' ? 'text-lg md:text-xl' : 'text-sm md:text-base'
                    }`}>
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-gold-400 font-black text-sm">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold leading-none mb-1.5">{t.author}</p>
                      <p className="text-gold-400/50 text-[9px] font-black uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gold-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;