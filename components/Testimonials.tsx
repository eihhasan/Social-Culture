import React from 'react';
import { Quote, Star, ArrowUpRight } from 'lucide-react';

const Testimonials: React.FC = () => {
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
            Voice of <span className="text-transparent bg-clip-text bg-gold-400 to-amber-600">The Culture</span>
          </h2>
        </div>

        {/* Dynamic Masonry Grid with Random Heights */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-5xl mx-auto">
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