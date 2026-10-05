import React, { useState } from 'react';
import { SiteConfig } from '../config/siteData';
import {
  MapPin,
  MessageCircle,
  Clock,
  ExternalLink,
  Map,
  Send,
  CheckCircle2
} from 'lucide-react';

interface ContactSectionProps {
  config: SiteConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Residential Solar Setup',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Al-Asim Solar World! Here is my inquiry from your website:
• Name: ${formData.name || 'Visitor'}
• Phone: ${formData.phone || 'N/A'}
• Requirement: ${formData.requirement}
• Message: ${formData.message || 'Please share available solar solutions & pricing in Rahim Yar Khan.'}`
    );
    window.open(`${config.whatsappUrl}&text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Let's Talk About Your Requirements
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Have a question about solar capacity, inverter choices, or electrical accessories? Send an inquiry or reach us directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Details & Location Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {config.businessName}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Solar Energy, Electronics, Electrical &amp; Electro/Gas Centre
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800/80 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Primary Market / City</span>
                    <strong className="text-white text-sm">{config.location}</strong>
                    <span className="text-xs text-slate-400 block mt-0.5">{config.locationDetails}</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Official WhatsApp</span>
                    <a
                      href={config.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 text-sm"
                    >
                      <span>alasimsolarworld</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Store Hours</span>
                    <span className="text-white text-xs sm:text-sm">{config.hours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            {/* Location & Map Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Map className="w-4 h-4 text-amber-400" />
                  <span>Rahim Yar Khan, Pakistan</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">South Punjab</span>
              </div>

              {/* Placeholder Styled Map Area */}
              <div className="relative w-full aspect-16/9 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                
                <MapPin className="w-8 h-8 text-amber-400 mb-2 drop-shadow-md animate-bounce" />
                <span className="text-xs font-semibold text-slate-200">Rahim Yar Khan Region</span>
                <span className="text-[11px] text-slate-400 mt-1 max-w-xs">
                  Exact showroom pin will be linked here once confirmed.
                </span>

                <div className="mt-3 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/40 text-[11px] text-amber-300 font-medium">
                  {config.mapPlaceholderNotice}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send an Online Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below. You can also send this inquiry directly to our official WhatsApp channel for faster responses.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name || 'Friend'}</strong>. Your inquiry has been recorded. For the fastest response, you can forward this directly to our official WhatsApp:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          requirement: 'Residential Solar Setup',
                          message: ''
                        });
                      }}
                      className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Muhammad Ahmad"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300 1234567"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Requirement Type
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Residential Solar Setup">Residential Solar Setup (3kW - 10kW)</option>
                        <option value="Commercial / Shop System">Commercial / Shop System (10kW - 25kW)</option>
                        <option value="Agricultural Solar Pump">Agricultural Tube Well System</option>
                        <option value="Solar Inverter Only">Solar Inverter Only</option>
                        <option value="Battery Storage Bank">Battery Storage (Tubular / Lithium)</option>
                        <option value="Electrical Distribution Switchgear">Electrical Distribution &amp; Wiring</option>
                        <option value="Electro/Gas Appliance">Electro / Gas Appliances &amp; Geysers</option>
                        <option value="General Technical Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message / Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your estimated electricity bill, connected appliances (ACs, fans, fridge), or specific equipment you need..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 py-3 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting...' : 'Send Inquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-400 pt-1 text-center">
                    Demo Mode Notice: Form displays a demonstration confirmation state; live customer inquiries can also be routed immediately to WhatsApp.
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
