import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Info } from 'lucide-react';
import { ProductItem, SiteConfig } from '../config/siteData';
import { VisualCard } from './VisualCard';

interface ProductsSectionProps {
  products: ProductItem[];
  config: SiteConfig;
  onOpenQuoteForProduct: (productName: string) => void;
}

const categoryFilterKeys = [
  'All',
  'Solar Panels',
  'Inverters',
  'Batteries',
  'Electrical Products',
  'Other Available Products'
] as const;

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  config,
  onOpenQuoteForProduct
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const getVisualType = (cat: string) => {
    switch (cat) {
      case 'Solar Panels':
        return 'solar-panel';
      case 'Inverters':
        return 'inverter';
      case 'Batteries':
        return 'battery';
      case 'Electrical Products':
        return 'electrical';
      default:
        return 'electro-gas';
    }
  };

  const handleAskDetails = (product: ProductItem) => {
    const text = encodeURIComponent(
      `Hello Al-Asim Solar World! I am interested in: "${product.name}" (${product.category}) in Rahim Yar Khan. Could you please share available brands, specs, and price details?`
    );
    window.open(`${config.whatsappUrl}&text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
              Equipment &amp; Inventory Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Explore Our Products
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Browse our principal energy hardware categories. Select any item to inquire about live stock availability, technical compatibility, and customized pricing.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Actual stock models confirmed upon inquiry</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categoryFilterKeys.map((cat) => (
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
            >
              <div>
                {/* Visual Card Component */}
                <VisualCard
                  type={getVisualType(product.category) as any}
                  title={product.name}
                  className="mb-4"
                />

                {/* Metadata & Tag */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono text-amber-400/90">{product.category}</span>
                  {product.badge && (
                    <span className="text-[11px] text-slate-300 font-medium bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="mt-2 text-xs font-mono text-slate-300 bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                  {product.specs}
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => handleAskDetails(product)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask for Details</span>
                </button>

                <button
                  onClick={() => onOpenQuoteForProduct(product.name)}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  title="Request quote"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
