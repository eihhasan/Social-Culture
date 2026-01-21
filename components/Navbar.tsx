import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Social', href: '#instagram' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-3 group relative z-50"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-gold-400/30 group-hover:border-gold-400 transition-all duration-500 shadow-[0_0_20px_rgba(255,215,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] bg-black/50 p-1">
            <img src="/logo.jpg" alt="Social Culture Logo" className="w-full h-full object-contain filter " />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase group-hover:text-gold-400 transition-colors">
              SOCIAL
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-gold-400/80 uppercase group-hover:text-white transition-colors">
              CULTURE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-bold text-gray-400 hover:text-gold-400 transition-all uppercase tracking-[0.2em] relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover/link:w-full group-hover/link:shadow-[0_0_10px_rgba(255,215,0,0.5)]"></span>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 bg-neutral-900 border border-gold-400/50 rounded-full hover:border-gold-400 overflow-hidden"
          >
            <span className="absolute inset-0 w-0 h-full transition-all duration-[400ms] ease-out bg-gold-400 group-hover:w-full"></span>
            <span className="relative text-xs tracking-widest group-hover:text-black uppercase">Get Started</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:text-gold-400 relative z-50 transition-all active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-700 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-3xl font-black text-white hover:text-gold-400 tracking-tighter uppercase transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className={`mt-6 px-10 py-4 bg-gold-400 text-black font-black text-xs tracking-[0.3em] rounded-full uppercase transition-all duration-700 transform ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;