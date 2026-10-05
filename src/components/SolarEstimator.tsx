import React, { useState } from 'react';
import { Calculator, Sun, Battery, Zap, MessageCircle, ArrowRight, X } from 'lucide-react';
import { SiteConfig } from '../config/siteData';

interface SolarEstimatorProps {
  config: SiteConfig;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteWithEstimate: (estimateText: string) => void;
}

export const SolarEstimator: React.FC<SolarEstimatorProps> = ({
  config,
  isOpen,
  onClose,
  onOpenQuoteWithEstimate
}) => {
  const [loadType, setLoadType] = useState<'home' | 'commercial' | 'agri'>('home');
  const [billRange, setBillRange] = useState<number>(45000);

  const calculateEstimate = (bill: number, type: string) => {
    let kw = 3;
    if (bill < 25000) kw = 3;
    else if (bill < 50000) kw = 5;
    else if (bill < 85000) kw = 8;
    else if (bill < 140000) kw = 10;
    else if (bill < 220000) kw = 15;
    else kw = 20;

    if (type === 'agri') {
      kw = Math.max(kw, 10);
    }

    const panelWattage = 580;
    const panelCount = Math.ceil((kw * 1000) / panelWattage);
    const inverterType = kw <= 6 ? 'Single-Phase Hybrid / Off-Grid' : 'Three-Phase Hybrid / On-Grid Net Metering';
    const batteryRec = kw <= 5 ? '2x - 4x Tubular Deep Cycle or 5.12kWh LiFePO4' : '4x - 8x Tubular Deep Cycle or 10kWh Lithium Rack';
    const roofAreaSqFt = panelCount * 28;

    return {
      kw,
      panelCount,
      inverterType,
      batteryRec,
      roofAreaSqFt
    };
  };

  const estimate = calculateEstimate(billRange, loadType);

  const getWhatsAppMessage = () => {
    const text = `Hello Al-Asim Solar World! I ran an estimate on your website for my ${
      loadType === 'home' ? 'Home' : loadType === 'commercial' ? 'Commercial Shop' : 'Agri Tube Well'
    } in Rahim Yar Khan.
• Monthly Bill: ~PKR ${billRange.toLocaleString()}
• Estimated Setup: ~${estimate.kw} kW System (${estimate.panelCount} Solar Panels)
• Inverter Type: ${estimate.inverterType}
Please share available models, panels, and price quote options.`;
    return encodeURIComponent(text);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close estimator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Interactive Sizing Tool
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Solar System Estimator
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
          Select your property type and approximate monthly electricity bill to see an estimated solar capacity suitable for Rahim Yar Khan sun conditions.
        </p>

        {/* Step 1: Property Type */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            1. Property Category
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setLoadType('home')}
              className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                loadType === 'home'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Residential Home
            </button>
            <button
              onClick={() => setLoadType('commercial')}
              className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                loadType === 'commercial'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Commercial / Shop
            </button>
            <button
              onClick={() => setLoadType('agri')}
              className={`py-2 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                loadType === 'agri'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Agri / Tube Well
            </button>
          </div>
        </div>

        {/* Step 2: Monthly Bill Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              2. Approximate Monthly Bill
            </label>
            <span className="text-base sm:text-lg font-bold text-amber-400 font-mono">
              PKR {billRange.toLocaleString()} / mo
            </span>
          </div>
          <input
            type="range"
            min={15000}
            max={250000}
            step={5000}
            value={billRange}
            onChange={(e) => setBillRange(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
            <span>PKR 15,000</span>
            <span>PKR 100,000</span>
            <span>PKR 250,000+</span>
          </div>
        </div>

        {/* Calculation Result Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
              Recommended Solar Setup
            </span>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                ~{estimate.kw} kW System
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block mb-1">Solar Panels</span>
              <span className="font-bold text-white text-sm">~{estimate.panelCount} Modules</span>
              <span className="text-[10px] text-slate-400 block">(580W Tier-1 class)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block mb-1">Inverter Type</span>
              <span className="font-bold text-white text-sm">{estimate.kw} kW Unit</span>
              <span className="text-[10px] text-slate-400 block">Hybrid / MPPT</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block mb-1">Est. Roof Area</span>
              <span className="font-bold text-white text-sm">~{estimate.roofAreaSqFt} sq. ft.</span>
              <span className="text-[10px] text-slate-400 block">Shadow-free space</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block mb-1">Backup Storage</span>
              <span className="font-bold text-white text-sm">Tubular / LiFePO4</span>
              <span className="text-[10px] text-slate-400 block">Customized to load</span>
            </div>
          </div>
          
          <div className="mt-3 text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
            Note: This estimation is a planning calculation based on typical daylight hours in Rahim Yar Khan. Final unit sizing depends on your exact connected appliance load.
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`${config.whatsappUrl}&text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Estimate on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              const text = `Estimated ${estimate.kw}kW System for monthly bill PKR ${billRange.toLocaleString()} (${loadType})`;
              onClose();
              onOpenQuoteWithEstimate(text);
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Request In-Store Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
