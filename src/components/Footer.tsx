import React from 'react';
import { SiteConfig } from '../config/siteData';
import { Sun, MessageCircle, Youtube, Facebook, ArrowUp, Sliders, MapPin } from 'lucide-react';

interface FooterProps {
  config: SiteConfig;
  onOpenDemoCustomizer: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenDemoCustomizer,
  onOpenQuote
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sun className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight">
                {config.businessName}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted destination in Rahim Yar Khan for solar energy solutions, power inverters, energy storage batteries, electrical distribution switchgear, and electro/gas appliances.
            </p>

            <div className="flex items-center gap-2 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{config.location} · South Punjab, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Our Solutions</a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">Products Showcase</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Work &amp; Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact &amp; Location</a>
              </li>
            </ul>
          </div>

          {/* Social Channels & CTA */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Official Channels
            </h4>
            
            <div className="flex items-center gap-3">
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={config.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/50 flex items-center justify-center text-slate-300 hover:text-red-400 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="block text-slate-400 text-xs mb-2">Ready to explore energy options?</span>
              <button
                onClick={onOpenQuote}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; 2026 {config.businessName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDemoCustomizer}
              className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
              title="Demo Configuration & Settings"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Demo Settings</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
