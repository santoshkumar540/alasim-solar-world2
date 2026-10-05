import React from 'react';
import { SiteConfig } from '../config/siteData';
import { CheckCircle2, MessageCircle, MapPin } from 'lucide-react';

interface AboutSectionProps {
  config: SiteConfig;
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onOpenQuote }) => {
  const objectivePoints = [
    { title: 'Understand available solutions', desc: 'Demystifying solar capacities, battery chemistries, and inverter modes for local homes and enterprises.' },
    { title: 'Explore equipment & hardware', desc: 'Showcasing solar panels, power inverters, battery storage, and safe electrical switchgear.' },
    { title: 'Direct customer contact', desc: 'Bridging technical energy needs with accessible in-store and remote assistance.' },
    { title: 'Transparent information requests', desc: 'Facilitating clear, no-obligation quotations based on actual connected electricity loads.' },
    { title: 'Seamless WhatsApp connectivity', desc: 'Direct, rapid mobile conversation with no automated bots or complicated queues.' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                Local Energy Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                About Al-Asim Solar World &amp; Electro/Gas Centre
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Based in <strong>Rahim Yar Khan</strong>, <strong className="text-white">{config.businessName}</strong> provides practical solar energy, electrical switchgear, and electro-gas equipment for households, shops, and regional farming systems.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              In an era of steep grid electricity costs and recurring load shedding, having dependable alternative power is crucial. This website concept is purpose-built to help you:
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {objectivePoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white leading-tight">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect via WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-medium text-sm transition-colors cursor-pointer"
              >
                Request Quotation
              </button>
            </div>
          </div>

          {/* Right Column: Values & Location Anchor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Serving Rahim Yar Khan</h4>
                  <span className="text-xs text-slate-400">Punjab, Pakistan</span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <p>
                  We understand South Punjab climate conditions: high summer irradiance, dust conditions, and ambient thermal challenges.
                </p>
                <p className="text-slate-400">
                  Our recommendations prioritize heavy-duty structures, proper wire gauges to eliminate resistive drop, and adequate inverter heat dissipation.
                </p>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Working Hours:</span>
                <span className="text-slate-200 font-mono">9:00 AM – 8:00 PM</span>
              </div>
            </div>

            {/* Electro-Gas Division Note */}
            <div className="bg-gradient-to-r from-rose-950/20 to-slate-900 border border-rose-500/20 rounded-2xl p-5 text-xs text-slate-300">
              <span className="text-rose-400 font-bold block mb-1 font-mono uppercase">
                Electro/Gas Division
              </span>
              In addition to clean solar electricity, we provide domestic gas appliances, instant geysers, and safety regulators to address everyday household utility needs.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
