import React, { useState } from 'react';
import { GalleryItem, SiteConfig } from '../config/siteData';
import { X, Info, Eye } from 'lucide-react';
import { VisualCard } from './VisualCard';

interface GallerySectionProps {
  gallery: GalleryItem[];
  config: SiteConfig;
}

const galleryCategories = [
  'All',
  'Solar',
  'Electrical',
  'Products',
  'Store',
  'Installation'
] as const;

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery, config }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === activeCategory);

  const getVisualType = (category: string) => {
    switch (category) {
      case 'Solar':
        return 'solar-panel';
      case 'Electrical':
        return 'electrical';
      case 'Installation':
        return 'hero-solar';
      case 'Store':
        return 'electro-gas';
      default:
        return 'battery';
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
              Portfolio &amp; Solutions Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Our Work &amp; Products
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Representative examples of solar installations, electrical distribution setups, and showroom products.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Illustrative demo visuals for client presentation</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Image / Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden">
                <VisualCard type={getVisualType(item.category) as any} title={item.title} />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <Eye className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-semibold">View Details</span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span className="font-mono text-amber-400/90">{item.tag}</span>
                  <span className="text-slate-400">Concept</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            <VisualCard
              type={getVisualType(selectedItem.category) as any}
              title={selectedItem.title}
              className="mb-4"
            />

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <span>{selectedItem.tag}</span>
              <span>·</span>
              <span>Category: {selectedItem.category}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {selectedItem.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedItem.description}
            </p>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
              >
                Close Preview
              </button>
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
