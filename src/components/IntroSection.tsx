import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { SiteConfig } from '../config/siteData';

interface IntroSectionProps {
  config: SiteConfig;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ config }) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
              Local Solar &amp; Electrical Centre
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Powering Better Energy Solutions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-white">{config.businessName}</strong> is a dedicated local centre in Rahim Yar Khan committed to helping homeowners, business operators, and farmers navigate rising electricity tariffs and erratic power availability.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We specialize in offering high-quality solar photovoltaic panels, dependable hybrid and on-grid inverters, durable deep-cycle and lithium battery banks, robust electrical protection switchgear, and dual-source electro/gas domestic equipment. Our goal is to provide honest recommendations and reliable gear tailored to your actual power load.
            </p>
            
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>What We Provide</span>
            </h3>
            
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tailored solar panel configurations for roofs &amp; open plots</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>On-grid, off-grid &amp; hybrid inverter matching</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Deep cycle tubular &amp; lithium battery storage units</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Safety breakers, surge protection (SPD), &amp; copper cabling</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Electro/gas water geysers and household heating accessories</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Location: {config.location}</span>
              <span className="text-amber-400 font-medium">Store Inquiries Welcome</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
