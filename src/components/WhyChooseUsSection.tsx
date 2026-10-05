import React from 'react';
import {
  Boxes,
  MessageSquareQuote,
  MapPin,
  ShieldCheck,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { whyChooseUsPoints, SiteConfig } from '../config/siteData';

interface WhyChooseUsSectionProps {
  config: SiteConfig;
}

const iconMapping: Record<string, React.ReactNode> = {
  Boxes: <Boxes className="w-6 h-6 text-amber-400" />,
  MessageSquareQuote: <MessageSquareQuote className="w-6 h-6 text-sky-400" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-emerald-400" />
};

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ config }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
            Practical Business Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Why Customers Choose a Professional Energy Solution
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Selecting solar and electrical hardware is a substantial decision for your household or business. Here is how Al-Asim Solar World &amp; Electro/Gas Centre supports our customers.
          </p>
        </div>

        {/* 5-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsPoints.map((point, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all hover:bg-slate-900 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-4">
                  {iconMapping[point.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Dedicated support</span>
              </div>
            </div>
          ))}

          {/* Quick Contact Card */}
          <div className="bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400">Direct Inquiries</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Have a Question About Sizing?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Send your last electricity bill amount or a picture of your distribution board on WhatsApp for immediate guidance.
              </p>
            </div>
            
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm text-center transition-colors shadow-sm inline-block"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
