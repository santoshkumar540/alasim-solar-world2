import React, { useState } from 'react';
import {
  Sun,
  LayoutGrid,
  Cpu,
  BatteryCharging,
  Zap,
  Flame,
  ArrowRight,
  CheckCircle,
  X,
  MessageCircle
} from 'lucide-react';
import { ServiceItem, SiteConfig } from '../config/siteData';

interface ServicesSectionProps {
  services: ServiceItem[];
  config: SiteConfig;
  onOpenQuoteForService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-6 h-6 text-amber-400" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-amber-400" />,
  Cpu: <Cpu className="w-6 h-6 text-sky-400" />,
  BatteryCharging: <BatteryCharging className="w-6 h-6 text-emerald-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  Flame: <Flame className="w-6 h-6 text-rose-400" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  config,
  onOpenQuoteForService
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleWhatsAppInquiry = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello Al-Asim Solar World, I would like to inquire about ${service.title} in Rahim Yar Khan.`
    );
    window.open(`${config.whatsappUrl}&text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
            Comprehensive Energy Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Our Solutions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Explore our specialized categories designed for residential households, commercial businesses, and agricultural energy needs across Rahim Yar Khan.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 relative"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.icon] || <Sun className="w-6 h-6 text-amber-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Highlights List */}
                <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-800/80">
                  {service.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 group-hover:gap-2 transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuoteForService(service.title)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                {iconMap[activeModalService.icon] || <Sun className="w-6 h-6 text-amber-400" />}
              </div>
              <div>
                <span className="text-xs text-amber-400 font-mono uppercase tracking-wider">
                  {activeModalService.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {activeModalService.fullDesc}
            </p>

            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 mb-5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Available Capabilities &amp; Features
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {activeModalService.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  handleWhatsAppInquiry(activeModalService);
                  setActiveModalService(null);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onOpenQuoteForService(title);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Request Detailed Quote</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
