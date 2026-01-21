import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/Card';
import {
  Instagram,
  Video,
  Mic,
  Camera,
  Sparkles,
  Palette,
  MonitorPlay
} from 'lucide-react';

const Skeleton = ({ img }: { img: string }) => (
  // Increased height from min-h-[6rem] to h-64 (16rem) for bigger images
  <div className="flex flex-1 w-full h-64 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 overflow-hidden relative group">
    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
    <img src={img} alt="Service preview" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
  </div>
);

const items = [
  {
    title: "Digital Makeover",
    description: "Complete Insta, FB & YouTube Handling. We overhaul your online presence to align with your brand's true potential.",
    header: <Skeleton img="/makeover.jpg" />,
    icon: <Sparkles className="h-4 w-4 text-gold-400" />,
  },
  {
    title: "Conceptualised Video Shoots",
    description: "Professional video production with high-end concept development, scripting, and cinematic execution.",
    header: <Skeleton img="/shoot.jpg" />,
    icon: <Video className="h-4 w-4 text-gold-400" />,
  },
  {
    title: "Podcast Shoots",
    description: "Full-service podcast production including studio setup, high-quality audio recording, and video snippets for socials.",
    header: <Skeleton img="/podcast.jpg" />,
    icon: <Mic className="h-4 w-4 text-gold-400" />,
  },
  {
    title: "Professional Photography",
    description: "Editorial-grade product and portrait photography to give your brand a premium visual language.",
    header: <Skeleton img="/professional.jpg" />,
    icon: <Camera className="h-4 w-4 text-gold-400" />,
  },
  {
    title: "Cinematic Digital Makeover",
    description: "Complete Instagram, Facebook & YouTube management combined with cinematic videography. We transform your online presence through high-end visuals, storytelling, and strategic content that unlocks your brand’s true potential.",
    header: <Skeleton img="/cinematic.jpg" />,
    icon: <Sparkles className="h-4 w-4 text-gold-400" />,
  },

  {
    title: "Content Strategy",
    description: "Data-backed planning for Reels, Shorts, and Posts to maximize reach and engagement.",
    header: <Skeleton img="/content.jpg" />,
    icon: <MonitorPlay className="h-4 w-4 text-gold-400" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-900 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Premium <span className="text-gold-400">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg mx-auto md:mx-0">
          We don't just post content; we curate experiences. From total digital makeovers to broadcast-quality production, we elevate your brand.
        </p>
      </div>

      {/* Increased row height to md:auto-rows-[28rem] to accommodate larger images */}
      <BentoGrid className="max-w-7xl mx-auto px-6 relative z-10 md:auto-rows-[28rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Services;