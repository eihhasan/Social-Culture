import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Instagram, Facebook, Youtube } from './ui/BrandIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-gold-400/10 rounded-full border border-gold-400/20 w-fit mb-6">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Get in Touch</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to <span className="text-gold-400">Go Viral?</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              Whether it's a digital makeover, a podcast shoot, or social handling, we are ready to elevate your brand.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-xl bg-white/5 text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Visit Our Studio</h4>
                  <p className="text-gray-400">
                    21, Nehru Pk Colony, near Sood Dharam Kanta,
                    Prem Nagar, Bareilly,
                    Uttar Pradesh 243122
                  </p>
                  <a
                    href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x39a007000c4e28f9:0x69ee2e17c462d69f?entry=s&sa=X&ved=2ahUKEwiKnpCD-ZuSAxXyxzgGHZSLBdcQ4kB6BAgXEAA&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold-400 text-sm mt-3 inline-flex items-center hover:underline"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-xl bg-white/5 text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Email Us</h4>
                  <p className="text-gray-400">contact@socialculture.agency</p>
                </div>
              </div>
            </div>

          </div>

          {/* Map Side */}
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-gold-400/5">
            <div className="absolute inset-0 bg-neutral-900 animate-pulse z-0"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.8687702341998!2d76.82903405202613!3d30.710776510860846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007000c4e28f9%3A0x69ee2e17c462d69f!2sSocial%20Culture!5e0!3m2!1sen!2sin!4v1709405214081!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Social Culture Office Location"
              className="relative z-10 w-full h-full"
            ></iframe>

            {/* Overlay card on map */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 z-20 md:w-80">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Open Now</span>
              </div>
              <p className="text-sm text-gray-300">Drop by for a coffee and discuss your brand's future.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;