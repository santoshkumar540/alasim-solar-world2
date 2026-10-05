import React from 'react';
import { MessageCircle, ArrowRight, Sun, Shield, MapPin, Calculator, Sparkles } from 'lucide-react';
import { SiteConfig } from '../config/siteData';
import { VisualCard } from './VisualCard';

interface HeroSectionProps {
  config: SiteConfig;
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onOpenQuote, onOpenEstimator }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-14 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial gradients & subtle energy mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating subtle particle points */}
      <div className="absolute top-36 left-12 w-2 h-2 rounded-full bg-amber-400/40 animate-float-slow hidden md:block" />
      <div className="absolute top-64 right-16 w-3 h-3 rounded-full bg-emerald-400/30 animate-float-slow [animation-delay:2s] hidden md:block" />
      <div className="absolute bottom-20 left-1/3 w-2.5 h-2.5 rounded-full bg-sky-400/30 animate-float-slow [animation-delay:4s] hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            
            {/* Regional trust marker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-slate-800 text-xs text-slate-300 shadow-sm max-w-full">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="sm:hidden truncate">Rahim Yar Khan · Solar &amp; Electro-Gas</span>
              <span className="hidden sm:inline">Rahim Yar Khan, Pakistan · Solar &amp; Electro-Gas Centre</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.16]">
              Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Solar &amp; Electrical</span>{' '}
              <span className="block mt-1 sm:mt-2 text-white">Solutions for Your Home &amp; Business</span>
            </h1>

            {/* Supporting text */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-pretty">
              Explore solar, electrical and energy-related solutions from{' '}
              <strong className="text-white font-semibold">{config.businessName}</strong>.
              Helping you cut electricity bills and achieve continuous, dependable backup power in Rahim Yar Khan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800/90 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>

              {/* Interactive Estimator trigger */}
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Estimate Your Solar System</span>
              </button>
            </div>

            {/* Proof Points Strip (Non-deceptive, grounded) */}
            <div className="pt-4 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Residential &amp; Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Safety Switchgear &amp; Wiring</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Electro/Gas Appliances</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Component */}
          <div className="lg:col-span-5 relative">
            <VisualCard type="hero-solar" />
          </div>

        </div>
      </div>
    </section>
  );
};
