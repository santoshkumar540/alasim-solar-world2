import React from 'react';
import { SiteConfig } from '../config/siteData';
import { MessageCircle, ExternalLink, Youtube, Facebook, Share2 } from 'lucide-react';

interface SocialLinksSectionProps {
  config: SiteConfig;
}

export const SocialLinksSection: React.FC<SocialLinksSectionProps> = ({ config }) => {
  const socialChannels = [
    {
      name: 'Facebook Page',
      handle: 'AASW.RYK',
      description: 'Follow our official updates, product announcements, and customer project highlights.',
      url: config.facebookUrl,
      icon: <Facebook className="w-6 h-6 text-blue-500" />,
      color: 'hover:border-blue-500/50 hover:bg-blue-500/5',
      badge: 'Official Facebook'
    },
    {
      name: 'YouTube Channel',
      handle: 'Al-Asim Solar World',
      description: 'Watch video walkthroughs, solar inverter operations, and electrical equipment overviews.',
      url: config.youtubeUrl,
      icon: <Youtube className="w-6 h-6 text-red-500" />,
      color: 'hover:border-red-500/50 hover:bg-red-500/5',
      badge: 'Official YouTube'
    },
    {
      name: 'WhatsApp Channel',
      handle: 'alasimsolarworld',
      description: 'Fastest way to get in touch. Ask for product stock, share system requirements, or request a quote.',
      url: config.whatsappUrl,
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      color: 'hover:border-emerald-500/50 hover:bg-emerald-500/5',
      badge: 'Direct WhatsApp'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 mb-3">
            <Share2 className="w-3.5 h-3.5" />
            <span>Connect &amp; Follow Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Follow Our Online Presence
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Explore our official social channels to stay updated on new inverter stock, solar panel shipments, and system recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialChannels.map((channel, idx) => (
            <a
              key={idx}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group ${channel.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 flex items-center justify-center">
                    {channel.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {channel.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {channel.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  @{channel.handle}
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                <span>Open in new tab</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
