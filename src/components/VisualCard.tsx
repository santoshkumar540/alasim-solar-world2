import React from 'react';

interface VisualCardProps {
  type: 'solar-panel' | 'inverter' | 'battery' | 'electrical' | 'electro-gas' | 'hero-solar' | 'rooftop-work';
  title?: string;
  className?: string;
}

export const VisualCard: React.FC<VisualCardProps> = ({ type, title, className = '' }) => {
  if (type === 'hero-solar') {
    return (
      <div className={`relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-slate-800 p-6 flex flex-col justify-between shadow-2xl shadow-amber-950/20 ${className}`}>
        {/* Ambient solar glow backdrop */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-solar-glow" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top telemetry bar */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Solar Array Active · Rahim Yar Khan Region</span>
          </div>
          <span className="text-amber-400 font-mono">Daylight Capture Ready</span>
        </div>

        {/* Central Graphic: Rooftop & Solar Panel Schematic Array */}
        <div className="relative z-10 my-4 flex items-center justify-center">
          <svg className="w-full max-w-md h-auto" viewBox="0 0 460 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#0B132B" />
              </linearGradient>
            </defs>

            {/* Sun Icon */}
            <circle cx="390" cy="40" r="24" fill="url(#sunGrad)" opacity="0.9" />
            <circle cx="390" cy="40" r="34" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" className="animate-spin" style={{ animationDuration: '24s' }} />

            {/* Energy Stream to Panels */}
            <path d="M370 56 L 310 90" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
            <path d="M360 48 L 220 90" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
            <path d="M380 68 L 130 90" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

            {/* Solar Panel Array (3D Perspective Rack) */}
            <g transform="translate(40, 70)">
              {/* Rack 1 */}
              <polygon points="0,55 90,20 180,20 90,55" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.2" />
              <line x1="45" y1="37" x2="135" y2="37" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="90" y1="20" x2="0" y2="55" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5" />
              <line x1="135" y1="20" x2="45" y2="55" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
              {/* Stand */}
              <line x1="0" y1="55" x2="0" y2="90" stroke="#64748B" strokeWidth="2" />
              <line x1="90" y1="55" x2="90" y2="90" stroke="#64748B" strokeWidth="2" />
              <line x1="180" y1="20" x2="180" y2="60" stroke="#475569" strokeWidth="2" />

              {/* Rack 2 */}
              <polygon points="130,55 220,20 310,20 220,55" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.2" />
              <line x1="175" y1="37" x2="265" y2="37" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
              <line x1="220" y1="20" x2="130" y2="55" stroke="#F59E0B" strokeWidth="0.8" opacity="0.5" />
              <line x1="265" y1="20" x2="175" y2="55" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
              {/* Stand */}
              <line x1="130" y1="55" x2="130" y2="90" stroke="#64748B" strokeWidth="2" />
              <line x1="220" y1="55" x2="220" y2="90" stroke="#64748B" strokeWidth="2" />
              <line x1="310" y1="20" x2="310" y2="60" stroke="#475569" strokeWidth="2" />

              {/* Power conduit going into inverter box */}
              <path d="M 90 90 L 90 115 L 340 115 L 340 60" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />
            </g>

            {/* Inverter Box Vector */}
            <g transform="translate(370, 110)">
              <rect x="0" y="0" width="55" height="75" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
              <rect x="8" y="10" width="39" height="24" rx="2" fill="#0284C7" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="0.8" />
              <line x1="12" y1="18" x2="32" y2="18" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="26" x2="42" y2="26" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="15" cy="45" r="3" fill="#10B981" />
              <circle cx="27" cy="45" r="3" fill="#F59E0B" />
              <circle cx="39" cy="45" r="3" fill="#38BDF8" />
              <text x="7" y="65" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">HYBRID</text>
            </g>
          </svg>
        </div>

        {/* Bottom Feature Metrics */}
        <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
          <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
            <span className="block text-xs text-slate-400">Solar Yield</span>
            <span className="font-semibold text-amber-400 text-sm">High Output</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
            <span className="block text-xs text-slate-400">Power Continuity</span>
            <span className="font-semibold text-emerald-400 text-sm">Instant Switch</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
            <span className="block text-xs text-slate-400">Local Centre</span>
            <span className="font-semibold text-sky-400 text-sm">Rahim Yar Khan</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'solar-panel') {
    return (
      <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4 group-hover:border-amber-500/40 transition-colors ${className}`}>
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent opacity-60" />
        <svg className="w-full max-w-[200px] h-auto drop-shadow-lg" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Frame */}
          <rect x="15" y="10" width="170" height="140" rx="3" fill="#0B1329" stroke="#94A3B8" strokeWidth="3" />
          <rect x="20" y="15" width="160" height="130" fill="#020617" />
          {/* Monocrystalline cells (4x3 grid) */}
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2].map((row) => (
              <g key={`${col}-${row}`}>
                <rect
                  x={23 + col * 39}
                  y={18 + row * 41}
                  width="36"
                  height="38"
                  rx="4"
                  fill="#0B1933"
                  stroke="#1E3A8A"
                  strokeWidth="0.8"
                />
                {/* Silver busbars */}
                <line x1={23 + col * 39 + 12} y1={18 + row * 41} x2={23 + col * 39 + 12} y2={18 + row * 41 + 38} stroke="#38BDF8" strokeWidth="0.75" opacity="0.8" />
                <line x1={23 + col * 39 + 24} y1={18 + row * 41} x2={23 + col * 39 + 24} y2={18 + row * 41 + 38} stroke="#38BDF8" strokeWidth="0.75" opacity="0.8" />
                {/* Fine micro-fingers */}
                <line x1={23 + col * 39 + 2} y1={18 + row * 41 + 10} x2={23 + col * 39 + 34} y2={18 + row * 41 + 10} stroke="#60A5FA" strokeWidth="0.3" opacity="0.5" />
                <line x1={23 + col * 39 + 2} y1={18 + row * 41 + 20} x2={23 + col * 39 + 34} y2={18 + row * 41 + 20} stroke="#60A5FA" strokeWidth="0.3" opacity="0.5" />
                <line x1={23 + col * 39 + 2} y1={18 + row * 41 + 30} x2={23 + col * 39 + 34} y2={18 + row * 41 + 30} stroke="#60A5FA" strokeWidth="0.3" opacity="0.5" />
              </g>
            ))
          )}
          {/* Subtle sun reflection beam */}
          <polygon points="25,15 90,15 160,145 95,145" fill="white" fillOpacity="0.04" />
        </svg>
        <span className="absolute bottom-2 right-3 text-[10px] text-slate-500 uppercase tracking-wider font-mono">PV Module</span>
      </div>
    );
  }

  if (type === 'inverter') {
    return (
      <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4 group-hover:border-sky-500/40 transition-colors ${className}`}>
        <div className="absolute inset-0 bg-radial from-sky-500/10 via-transparent to-transparent opacity-60" />
        <svg className="w-full max-w-[190px] h-auto drop-shadow-xl" viewBox="0 0 190 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Inverter Chassis */}
          <rect x="35" y="15" width="120" height="130" rx="10" fill="#0F172A" stroke="#475569" strokeWidth="2.5" />
          <rect x="42" y="22" width="106" height="116" rx="6" fill="#1E293B" />
          {/* Front Bezel */}
          <rect x="48" y="28" width="94" height="48" rx="4" fill="#090E17" stroke="#334155" strokeWidth="1" />
          {/* Digital LCD screen */}
          <rect x="56" y="34" width="78" height="34" rx="3" fill="#0284C7" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1" />
          <text x="64" y="47" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">230V · 50Hz</text>
          <text x="64" y="58" fill="#10B981" fontSize="7" fontFamily="monospace">SOLAR: ACTIVE</text>
          {/* LED Status indicators */}
          <circle cx="60" cy="88" r="4" fill="#10B981" />
          <circle cx="75" cy="88" r="4" fill="#F59E0B" />
          <circle cx="90" cy="88" r="4" fill="#0EA5E9" />
          <text x="100" y="91" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">NORMAL</text>
          {/* Lower Vent Grilles */}
          <line x1="55" y1="104" x2="135" y2="104" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="112" x2="135" y2="112" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="120" x2="135" y2="120" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          {/* Bottom terminal lugs */}
          <rect x="60" y="145" width="14" height="6" rx="1" fill="#D97706" />
          <rect x="88" y="145" width="14" height="6" rx="1" fill="#475569" />
          <rect x="116" y="145" width="14" height="6" rx="1" fill="#DC2626" />
        </svg>
        <span className="absolute bottom-2 right-3 text-[10px] text-slate-500 uppercase tracking-wider font-mono">Inverter Unit</span>
      </div>
    );
  }

  if (type === 'battery') {
    return (
      <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4 group-hover:border-emerald-500/40 transition-colors ${className}`}>
        <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent opacity-60" />
        <svg className="w-full max-w-[190px] h-auto drop-shadow-xl" viewBox="0 0 190 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Heavy Duty Battery Body */}
          <rect x="30" y="32" width="130" height="105" rx="8" fill="#0B1322" stroke="#334155" strokeWidth="2" />
          {/* Battery Top Terminal Cover */}
          <rect x="40" y="20" width="110" height="14" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1" />
          {/* Terminals (+ and -) */}
          <rect x="52" y="10" width="16" height="12" rx="2" fill="#EF4444" />
          <rect x="122" y="10" width="16" height="12" rx="2" fill="#3B82F6" />
          <text x="57" y="19" fill="#FFFFFF" fontSize="9" fontWeight="bold">+</text>
          <text x="128" y="19" fill="#FFFFFF" fontSize="9" fontWeight="bold">-</text>
          {/* Battery Plate Ribs / Front Decal */}
          <rect x="42" y="44" width="106" height="54" rx="4" fill="#0F172A" stroke="#1E293B" />
          <text x="50" y="60" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="sans-serif">DEEP CYCLE / LiFePO4</text>
          <text x="50" y="73" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">SOLAR BACKUP SYSTEM</text>
          {/* Charge Status Bar */}
          <rect x="50" y="80" width="90" height="8" rx="2" fill="#1E293B" />
          <rect x="52" y="82" width="76" height="4" rx="1" fill="#10B981" />
          {/* Heavy Duty Base Legs */}
          <rect x="40" y="137" width="22" height="6" rx="1" fill="#334155" />
          <rect x="128" y="137" width="22" height="6" rx="1" fill="#334155" />
        </svg>
        <span className="absolute bottom-2 right-3 text-[10px] text-slate-500 uppercase tracking-wider font-mono">Energy Storage</span>
      </div>
    );
  }

  if (type === 'electrical') {
    return (
      <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4 group-hover:border-amber-500/40 transition-colors ${className}`}>
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent opacity-60" />
        <svg className="w-full max-w-[190px] h-auto drop-shadow-xl" viewBox="0 0 190 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Distribution Enclosure */}
          <rect x="28" y="18" width="134" height="124" rx="6" fill="#0F172A" stroke="#475569" strokeWidth="2" />
          <rect x="36" y="26" width="118" height="108" rx="4" fill="#1E293B" />
          {/* DIN Rail Breakers Array */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(${46 + i * 20}, 42)`}>
              <rect x="0" y="0" width="16" height="60" rx="2" fill="#0A0F1D" stroke="#64748B" strokeWidth="1" />
              {/* Toggle switch */}
              <rect x="3" y="12" width="10" height="14" rx="1" fill={i === 2 ? '#EF4444' : '#10B981'} />
              <rect x="4" y={i === 2 ? 20 : 13} width="8" height="6" rx="1" fill="#FFFFFF" />
              {/* Rating text */}
              <text x="3" y="52" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">C32</text>
            </g>
          ))}
          {/* Surge Protection Unit (SPD) */}
          <rect x="46" y="108" width="98" height="18" rx="2" fill="#0B1322" stroke="#334155" />
          <text x="54" y="120" fill="#F59E0B" fontSize="7" fontFamily="monospace">SPD CLASS II · 1000V DC</text>
        </svg>
        <span className="absolute bottom-2 right-3 text-[10px] text-slate-500 uppercase tracking-wider font-mono">Switchgear DB</span>
      </div>
    );
  }

  // electro-gas or generic
  return (
    <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4 group-hover:border-rose-500/40 transition-colors ${className}`}>
      <div className="absolute inset-0 bg-radial from-rose-500/10 via-transparent to-transparent opacity-60" />
      <svg className="w-full max-w-[190px] h-auto drop-shadow-xl" viewBox="0 0 190 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Geyser / Electro Gas Appliance Cabinet */}
        <rect x="45" y="15" width="100" height="130" rx="8" fill="#111827" stroke="#475569" strokeWidth="2" />
        <rect x="52" y="22" width="86" height="116" rx="5" fill="#1F2937" />
        {/* Burner inspection window */}
        <circle cx="95" cy="55" r="22" fill="#0B0F17" stroke="#F97316" strokeWidth="1.5" />
        <path d="M95 40 C90 48, 85 54, 95 68 C105 54, 100 48, 95 40 Z" fill="#F97316" />
        <path d="M95 48 C92 53, 89 57, 95 65 C101 57, 98 53, 95 48 Z" fill="#FDE047" />
        {/* Control Dials */}
        <circle cx="75" cy="105" r="10" fill="#374151" stroke="#9CA3AF" strokeWidth="1" />
        <circle cx="115" cy="105" r="10" fill="#374151" stroke="#9CA3AF" strokeWidth="1" />
        <line x1="75" y1="98" x2="75" y2="105" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        <line x1="115" y1="98" x2="115" y2="105" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <text x="64" y="125" fill="#9CA3AF" fontSize="6">GAS</text>
        <text x="105" y="125" fill="#9CA3AF" fontSize="6">TEMP</text>
      </svg>
      <span className="absolute bottom-2 right-3 text-[10px] text-slate-500 uppercase tracking-wider font-mono">Electro/Gas Unit</span>
    </div>
  );
};
