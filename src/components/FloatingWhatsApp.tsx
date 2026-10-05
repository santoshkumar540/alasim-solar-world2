import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SiteConfig } from '../config/siteData';

interface FloatingWhatsAppProps {
  config: SiteConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    'Hello Al-Asim Solar World! I am visiting your website and would like to ask about solar / electrical solutions in Rahim Yar Khan.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2.5">
      {/* Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 border border-slate-700 text-xs text-slate-200 shadow-2xl animate-in fade-in slide-in-from-right duration-300">
          <span>Need quick pricing or solar advice?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`${config.whatsappUrl}&text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-950/60 transition-transform hover:scale-110 active:scale-95 group relative"
        aria-label="Chat with Al-Asim Solar World on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
