import React, { useState } from 'react';
import {
  defaultSiteConfig,
  defaultServices,
  defaultProducts,
  defaultGallery,
  SiteConfig
} from './config/siteData';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProductsSection } from './components/ProductsSection';
import { InquiryCtaSection } from './components/InquiryCtaSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { SocialLinksSection } from './components/SocialLinksSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { SolarEstimator } from './components/SolarEstimator';
import { DemoCustomizerDrawer } from './components/DemoCustomizerDrawer';

export default function App() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('alasim_solar_config');
      if (saved) {
        return { ...defaultSiteConfig, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('LocalStorage read error:', e);
    }
    return defaultSiteConfig;
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialItem, setQuoteInitialItem] = useState<string>('Residential Solar Setup');
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [demoCustomizerOpen, setDemoCustomizerOpen] = useState(false);

  const handleOpenQuote = (initialItem = 'Residential Solar Setup') => {
    setQuoteInitialItem(initialItem);
    setQuoteModalOpen(true);
  };

  const handleSaveConfig = (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    try {
      localStorage.setItem('alasim_solar_config', JSON.stringify(newConfig));
    } catch (e) {
      console.warn('LocalStorage write error:', e);
    }
  };

  const handleResetConfig = () => {
    setSiteConfig(defaultSiteConfig);
    try {
      localStorage.removeItem('alasim_solar_config');
    } catch (e) {
      console.warn('LocalStorage clear error:', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#070c14] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        config={siteConfig}
        onOpenQuote={() => handleOpenQuote('Residential Solar Setup')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          config={siteConfig}
          onOpenQuote={() => handleOpenQuote('Residential Solar Setup')}
          onOpenEstimator={() => setEstimatorOpen(true)}
        />

        {/* Business Introduction */}
        <IntroSection config={siteConfig} />

        {/* Services Section */}
        <ServicesSection
          services={defaultServices}
          config={siteConfig}
          onOpenQuoteForService={(serviceTitle) => handleOpenQuote(serviceTitle)}
        />

        {/* Why Choose Us */}
        <WhyChooseUsSection config={siteConfig} />

        {/* Products Showcase */}
        <ProductsSection
          products={defaultProducts}
          config={siteConfig}
          onOpenQuoteForProduct={(productName) => handleOpenQuote(productName)}
        />

        {/* Product Inquiry CTA */}
        <InquiryCtaSection
          config={siteConfig}
          onOpenQuote={() => handleOpenQuote('Product Inquiry')}
        />

        {/* Gallery Section */}
        <GallerySection
          gallery={defaultGallery}
          config={siteConfig}
        />

        {/* About Section */}
        <AboutSection
          config={siteConfig}
          onOpenQuote={() => handleOpenQuote('General Energy Consultation')}
        />

        {/* Social Media Presence */}
        <SocialLinksSection config={siteConfig} />

        {/* Contact & Location Section */}
        <ContactSection config={siteConfig} />
      </main>

      {/* Footer */}
      <Footer
        config={siteConfig}
        onOpenDemoCustomizer={() => setDemoCustomizerOpen(true)}
        onOpenQuote={() => handleOpenQuote('General Energy Inquiry')}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp config={siteConfig} />

      {/* Interactive Sizing Estimator Modal */}
      <SolarEstimator
        config={siteConfig}
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        onOpenQuoteWithEstimate={(estimateText) => handleOpenQuote(estimateText)}
      />

      {/* Quote Inquiry Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        config={siteConfig}
        initialServiceOrProduct={quoteInitialItem}
      />

      {/* Internal Demo Customizer Drawer */}
      <DemoCustomizerDrawer
        isOpen={demoCustomizerOpen}
        onClose={() => setDemoCustomizerOpen(false)}
        config={siteConfig}
        onSaveConfig={handleSaveConfig}
        onResetConfig={handleResetConfig}
      />
    </div>
  );
}
