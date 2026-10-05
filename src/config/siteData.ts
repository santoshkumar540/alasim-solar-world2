export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  icon: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Solar Panels' | 'Inverters' | 'Batteries' | 'Electrical Products' | 'Other Available Products';
  specs: string;
  description: string;
  badge?: string;
  accentColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Solar' | 'Electrical' | 'Products' | 'Store' | 'Installation';
  description: string;
  tag: string;
}

export interface SiteConfig {
  businessName: string;
  brandKicker: string;
  tagline: string;
  location: string;
  locationDetails: string;
  mapPlaceholderNotice: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  facebookUrl: string;
  youtubeUrl: string;
  emailContact: string;
  hours: string;
}

export const defaultSiteConfig: SiteConfig = {
  businessName: "Al-Asim Solar World & Electro/Gas Centre",
  brandKicker: "Rahim Yar Khan, Pakistan",
  tagline: "Reliable Solar & Electrical Solutions for Your Home & Business",
  location: "Rahim Yar Khan, Pakistan",
  locationDetails: "Serving residential, commercial, and agricultural energy clients across Rahim Yar Khan and adjoining regions.",
  mapPlaceholderNotice: "Add Exact Google Maps Location (Store / Showroom Pin)",
  whatsappUrl: "https://wa.me/alasimsolarworld?lang=en_US",
  whatsappDisplay: "WhatsApp Us Directly",
  facebookUrl: "https://web.facebook.com/AASW.RYK/",
  youtubeUrl: "https://www.youtube.com/channel/UC48w3xBMGCBJnbCCO2R20Sg",
  emailContact: "inquiry@alasimsolar.pk",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM (Friday break: 1:00 PM – 2:30 PM)",
};

export const defaultServices: ServiceItem[] = [
  {
    id: "solar-solutions",
    title: "Solar Solutions",
    category: "Turnkey Clean Energy",
    shortDesc: "Complete solar energy systems tailored for residential homes, shops, and agricultural tube wells.",
    fullDesc: "Comprehensive solar setups designed to maximize daytime solar generation, minimize grid reliance, and ensure dependable backup during power interruptions.",
    highlights: ["Residential rooftop setups", "Commercial power systems", "Tubular & Net-metering ready configurations", "System sizing & consultation"],
    icon: "Sun"
  },
  {
    id: "solar-panels",
    title: "Solar Panels",
    category: "Photovoltaic Modules",
    shortDesc: "High-efficiency monocrystalline and bifacial solar panel options for residential and commercial requirements.",
    fullDesc: "Sourcing modern solar PV modules with high light absorption, low thermal loss, and durable tempered glass frames built for South Punjab temperatures.",
    highlights: ["High-wattage Tier-1 style panels", "Monocrystalline Perc & Bifacial options", "Sturdy aluminum alloy mounting frames", "Optimal angle alignment guidance"],
    icon: "LayoutGrid"
  },
  {
    id: "inverters",
    title: "Inverters",
    category: "Power Conversion",
    shortDesc: "Explore hybrid, on-grid, and off-grid inverter solutions suitable for different energy requirements.",
    fullDesc: "Pure sine-wave inverters with smart energy management, digital LCD status interfaces, and automatic switching between solar, battery, and WAPDA grid.",
    highlights: ["Hybrid solar inverters", "On-grid net metering compatible units", "Off-grid backup inverters", "Real-time LCD monitoring"],
    icon: "Cpu"
  },
  {
    id: "batteries",
    title: "Batteries",
    category: "Energy Storage",
    shortDesc: "Energy storage solutions for uninterrupted backup and nighttime solar power utilization.",
    fullDesc: "Deep-cycle tubular batteries and modern Lithium-ion / LiFePO4 battery solutions to keep your fans, lights, refrigerators, and appliances running smoothly.",
    highlights: ["Deep-cycle tubular solar batteries", "Lithium-ion storage packs", "High charge-cycle durability", "Maintenance & electrolyte safety guidance"],
    icon: "BatteryCharging"
  },
  {
    id: "electrical-products",
    title: "Electrical Products",
    category: "Wiring & Switchgear",
    shortDesc: "Electrical products, cables, circuit breakers, and distribution gear for safe energy installations.",
    fullDesc: "Essential electrical infrastructure including copper cabling, DC breakers, AC contactors, surge protectors (SPD), and voltage stabilizers.",
    highlights: ["Pure copper DC & AC wiring", "Circuit breakers & changeover switches", "Surge protection devices (SPD)", "Distribution boxes & conduits"],
    icon: "Zap"
  },
  {
    id: "electro-gas-services",
    title: "Electro / Gas Services",
    category: "Appliances & Accessories",
    shortDesc: "Showcase relevant electro/gas products and heating/cooking equipment offered by the centre.",
    fullDesc: "Complementary domestic solutions including dual-fuel electro-gas appliances, instant geysers, gas valves, regulators, and heating essentials for local households.",
    highlights: ["Electro-gas appliance selection", "Instant water heater accessories", "Gas safety regulators & piping", "Reliable dual-power household solutions"],
    icon: "Flame"
  }
];

export const defaultProducts: ProductItem[] = [
  {
    id: "prod-mono-panel",
    name: "Tier-1 Grade Monocrystalline Solar Panels",
    category: "Solar Panels",
    specs: "550W – 590W Class · High Efficiency · Monocrystalline Half-Cell",
    description: "Built for maximum energy yield even during hazy or high-heat summer conditions in Rahim Yar Khan.",
    badge: "Most Requested",
    accentColor: "amber"
  },
  {
    id: "prod-bifacial-panel",
    name: "Bifacial Glass-Glass Solar Modules",
    category: "Solar Panels",
    specs: "Dual-Sided Light Capture · Enhanced Albedo Yield · 30mm Anodized Frame",
    description: "Captures reflected ground light from rooftop or ground surfaces for up to 15-25% supplemental generation.",
    badge: "High Efficiency",
    accentColor: "amber"
  },
  {
    id: "prod-hybrid-inverter",
    name: "Smart Hybrid Solar Inverter (3kW / 6kW / 10kW)",
    category: "Inverters",
    specs: "Pure Sine Wave · Dual MPPT · Grid-Tie & Battery Backup Integration",
    description: "Seamless automatic changeover between solar PV, energy storage, and national grid without flickering home appliances.",
    badge: "Core Solution",
    accentColor: "sky"
  },
  {
    id: "prod-ongrid-inverter",
    name: "Three-Phase On-Grid Commercial Inverter",
    category: "Inverters",
    specs: "10kW – 25kW Capacity · Net-Metering Compatible · High Surge Tolerance",
    description: "Designed for commercial facilities, plazas, and agricultural setups looking to export excess daytime solar to the grid.",
    badge: "Commercial",
    accentColor: "sky"
  },
  {
    id: "prod-tubular-battery",
    name: "Deep Cycle Heavy-Duty Tubular Solar Battery",
    category: "Batteries",
    specs: "Tall Tubular Plates · High Thermal Resilience · Deep Discharge Cycles",
    description: "Proven reliable backup choice for frequent load shedding and long nighttime backup requirements.",
    badge: "Popular Backup",
    accentColor: "emerald"
  },
  {
    id: "prod-lithium-battery",
    name: "Wall-Mount Lithium Energy Storage System (LiFePO4)",
    category: "Batteries",
    specs: "48V 100Ah / 200Ah · Built-in BMS Safety · 5000+ Cycle Lifespan",
    description: "Compact wall-hanging energy storage with rapid recharge capabilities and zero electrolyte maintenance.",
    badge: "Modern Tech",
    accentColor: "emerald"
  },
  {
    id: "prod-switchgear-box",
    name: "Pre-Wired DC/AC Solar Protection Distribution Box",
    category: "Electrical Products",
    specs: "DC Isolators · AC Breakers · Class II Surge Protection (SPD)",
    description: "Ensures comprehensive lightning protection, circuit isolation, and safety for your solar inverters and home appliances.",
    badge: "Safety Essential",
    accentColor: "amber"
  },
  {
    id: "prod-copper-cables",
    name: "Pure Copper Solar PV Cable & Heavy Electrical Wire",
    category: "Electrical Products",
    specs: "4mm² / 6mm² XLPO UV-Resistant Solar Wire · Pure Copper Core",
    description: "Low-resistance solar conductors engineered for outdoor ultraviolet exposure and high current transmission.",
    badge: "Safety Grade",
    accentColor: "amber"
  },
  {
    id: "prod-electro-gas-geyser",
    name: "Instant Electro-Gas Water Heater & Safety Accessories",
    category: "Other Available Products",
    specs: "Dual Ignition · Automatic Flame-Out Sensor · Low Water Pressure Start",
    description: "Energy-efficient heating gear from our Electro/Gas division for dependable warm water during winter months.",
    badge: "Electro/Gas",
    accentColor: "rose"
  }
];

export const defaultGallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Residential Rooftop Solar Array",
    category: "Solar",
    description: "Clean roof-mount structure aligned for optimal sun exposure with high-efficiency modules.",
    tag: "Solar Installation"
  },
  {
    id: "gal-2",
    title: "Hybrid Inverter & Protection DB Setup",
    category: "Installation",
    description: "Clean wall installation with labeled DC isolators, AC breakers, and tidy trunking conduits.",
    tag: "Inverter Setup"
  },
  {
    id: "gal-3",
    title: "Deep-Cycle Battery Storage Bank",
    category: "Products",
    description: "Heavy-duty battery arrangement on elevated protective racks for long backup reliability.",
    tag: "Energy Storage"
  },
  {
    id: "gal-4",
    title: "Showroom Display & Product Counter",
    category: "Store",
    description: "Explore inverters, batteries, electrical accessories, and electro-gas equipment at our centre.",
    tag: "Centre Walk-in"
  },
  {
    id: "gal-5",
    title: "Agricultural Solar Tube-Well System",
    category: "Solar",
    description: "Heavy-duty ground mount array powering agricultural water pumping without diesel fuel expenses.",
    tag: "Agri Solar"
  },
  {
    id: "gal-6",
    title: "Electrical Breakers & Distribution Equipment",
    category: "Electrical",
    description: "Premium electrical switches, changeovers, safety fuses, and industrial grade hardware.",
    tag: "Electrical Switchgear"
  }
];

export const whyChooseUsPoints = [
  {
    title: "Wide Range of Solutions",
    description: "From solar panels and smart hybrid inverters to electrical distribution and electro-gas equipment, find comprehensive options in one centre.",
    icon: "Boxes"
  },
  {
    title: "Easy Customer Communication",
    description: "Quickly discuss your requirements via WhatsApp, phone, or in person without navigating complicated corporate phone trees.",
    icon: "MessageSquareQuote"
  },
  {
    title: "Local Rahim Yar Khan Support",
    description: "Conveniently located in Rahim Yar Khan, providing accessible consultation and post-purchase guidance right in your region.",
    icon: "MapPin"
  },
  {
    title: "Product-Focused Service",
    description: "We focus on recommending compatible configurations suited to your specific load, power cuts, and available rooftop space.",
    icon: "ShieldCheck"
  },
  {
    title: "Convenient WhatsApp Contact",
    description: "Send inquiries, share rooftop photos, or ask for available stock details directly through our verified WhatsApp channel.",
    icon: "Smartphone"
  }
];
