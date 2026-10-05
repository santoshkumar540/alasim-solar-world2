import React from 'react';
import { MessageCircle, ArrowRight, Zap } from 'lucide-react';
import { SiteConfig } from '../config/siteData';

interface InquiryCtaSectionProps {
  config: SiteConfig;
  onOpenQuote: () => void;
}

export const InquiryCtaSection: React.FC<InquiryCtaSectionProps> = ({
  config,
  onOpenQuote
}) => {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/20 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Personalized System Recommendations</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Looking for the Right Solar or Electrical Solution?
            </h2>

            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Contact us directly and ask about available products and solutions. Whether you need a single inverter replacement or a comprehensive rooftop solar setup, our team in Rahim Yar Khan is ready to assist.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
