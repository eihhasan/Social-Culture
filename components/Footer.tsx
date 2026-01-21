import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gold-400 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-gold-400 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-gold-400 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-16 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-4 mb-8 group"
            >
              <div className="w-12 h-12 overflow-hidden rounded-full border border-gold-400/30 bg-black/50 p-1.5 transition-transform group-hover:scale-105">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">SOCIAL</span>
                <span className="text-[12px] font-bold tracking-[0.4em] text-gold-400 uppercase">CULTURE</span>
              </div>
            </a>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Elevating brands through cinematic storytelling and strategic digital presence. We turn visions into culture-defining moments and digital legacies.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/social_culture_sc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold-400 hover:border-gold-400 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-10 border-b border-gold-400/20 pb-4 inline-block">Navigation</h4>
            <ul className="space-y-5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Our Process', href: '#process' },
                { name: 'Social Feed', href: '#instagram' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-all flex items-center group"
                  >
                    <span className="w-0 group-hover:w-6 h-px bg-gold-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-10 border-b border-gold-400/20 pb-4 inline-block">Contact</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0 border border-gold-400/20">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed pt-1">
                  21, Nehru Pk Colony, near Sood Dharam Kanta,<br />Prem Nagar, Bareilly,<br />Uttar Pradesh 243122
                </span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0 border border-gold-400/20">
                  <Phone size={18} />
                </div>
                <span className="text-gray-400 text-sm font-medium hover:text-gold-400 transition-colors cursor-pointer">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0 border border-gold-400/20">
                  <Mail size={18} />
                </div>
                <span className="text-gray-400 text-sm font-medium hover:text-gold-400 transition-colors cursor-pointer">hello@socialculture.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-10 border-b border-gold-400/20 pb-4 inline-block">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Join our newsletter to receive the latest culture trends and project updates.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-5 pr-16 text-sm text-white focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-gold-400 text-black text-xs font-black rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                JOIN
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-bold">
            © {currentYear} SOCIAL CULTURE <span className="mx-2 text-gold-400/30">|</span> DESIGNED FOR THE BOLD
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-[0.1em] font-bold transition-all border-b border-transparent hover:border-gold-400 pb-1">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-[0.1em] font-bold transition-all border-b border-transparent hover:border-gold-400 pb-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;