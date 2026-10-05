import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SiteConfig } from '../config/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  initialServiceOrProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  config,
  initialServiceOrProduct
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialServiceOrProduct || 'Residential Solar System');
  const [city] = useState('Rahim Yar Khan');
  const [billRange, setBillRange] = useState('PKR 30,000 - 60,000');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceOrProduct) {
      setCategory(initialServiceOrProduct);
    }
  }, [initialServiceOrProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const message = `Hello Al-Asim Solar World! I would like to request a quote from your website:
• Name: ${name || 'Visitor'}
• Phone: ${phone || 'N/A'}
• Requirement: ${category}
• Location: ${city}
• Monthly Bill: ${billRange}
• Notes: ${notes || 'Please provide available options and estimates.'}`;
    window.open(`${config.whatsappUrl}&text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Quote Request Received</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name || 'valued customer'}</strong>. Your quote details for <strong>{category}</strong> have been recorded.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Forward to Official WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Direct Pricing &amp; Sizing
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Request a Custom Quote
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Get tailored equipment sizing and pricing for Rahim Yar Khan and nearby regions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0300 9876543"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    System / Item
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Solar System / Inverter / Battery"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Monthly Bill Range
                  </label>
                  <select
                    value={billRange}
                    onChange={(e) => setBillRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                  >
                    <option value="Under PKR 20,000">Under PKR 20,000</option>
                    <option value="PKR 20,000 - 45,000">PKR 20,000 - 45,000</option>
                    <option value="PKR 45,000 - 80,000">PKR 45,000 - 80,000</option>
                    <option value="PKR 80,000 - 150,000">PKR 80,000 - 150,000</option>
                    <option value="Above PKR 150,000">Above PKR 150,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Additional Notes (Appliances, roof type, or specific question)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need backup for 1.5 ton inverter AC, 4 fans, and refrigerator..."
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quote via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
