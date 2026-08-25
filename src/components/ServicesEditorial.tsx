import React, { useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { CLEAN_SERVICES, CleanService } from '../data/servicesData';

interface ServicesEditorialProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesEditorial: React.FC<ServicesEditorialProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const filteredServices = CLEAN_SERVICES.filter((service) => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  const handleRequestQuote = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
  };

  return (
    <section
      id="services"
      className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#F4F5F7]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
                03
              </span>
              <span>/ Services</span>
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#121316] leading-[1.08] tracking-tight mb-3">
              From the driveway<br />
              to the exterior.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#58585A] leading-relaxed font-normal">
              Precision pressure washing and gentle soft-wash treatments calibrated specifically to your property's materials.
            </p>
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FFFFFF] border border-[#E2E4E8] rounded-[4px] self-start md:self-end shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-[3px] transition-colors cursor-pointer font-medium ${
                activeFilter === 'all'
                  ? 'bg-[#121316] text-[#FFFFFF]'
                  : 'text-[#58585A] hover:text-[#121316]'
              }`}
            >
              All ({CLEAN_SERVICES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('residential')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-[3px] transition-colors cursor-pointer font-medium ${
                activeFilter === 'residential'
                  ? 'bg-[#121316] text-[#FFFFFF]'
                  : 'text-[#58585A] hover:text-[#121316]'
              }`}
            >
              Residential (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('commercial')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-[3px] transition-colors cursor-pointer font-medium ${
                activeFilter === 'commercial'
                  ? 'bg-[#121316] text-[#FFFFFF]'
                  : 'text-[#58585A] hover:text-[#121316]'
              }`}
            >
              Commercial (1)
            </button>
          </div>
        </div>

        {/* Minimalist, Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col h-full bg-[#FFFFFF] border border-[#E2E4E8] hover:border-[#C31F21] rounded-[4px] overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#F4F5F7] border-b border-[#E2E4E8]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Number & Tag Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="font-mono text-xs font-bold text-[#FFFFFF] bg-[#C31F21] px-2 py-0.5 rounded-[2px] shadow-xs">
                    {service.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#FFFFFF] bg-[#121316]/85 backdrop-blur-xs px-2 py-0.5 rounded-[2px]">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Title & Surfaces */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-[#121316] group-hover:text-[#C31F21] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#58585A] font-mono mt-1 line-clamp-1">
                      {service.surfaceTypes}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#58585A] leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Feature Chips */}
                <div className="space-y-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {service.keyFeatures.map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#121316] bg-[#F4F5F7] border border-[#E2E4E8] px-2 py-0.5 rounded-[2px]"
                      >
                        <Check className="w-3 h-3 text-[#C31F21]" strokeWidth={2.5} />
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => handleRequestQuote(service.title)}
                    className="w-full btn-brand-primary py-2.5 text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <span>Request Estimate</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5 cta-arrow" strokeWidth={2} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Clean Assurance Footer Banner */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-[#FFFFFF] border border-[#E2E4E8] rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[3px] bg-[#121316] text-[#C31F21] flex items-center justify-center shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-medium text-[#121316]">
                Material-Safe Surface Calibration
              </h4>
              <p className="text-xs sm:text-sm text-[#58585A]">
                Every surface is pre-treated with correct pressure and eco-friendly surfactants to guarantee no etching or masonry damage.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleRequestQuote('Custom Project')}
            className="clean-secondary-link text-xs sm:text-sm font-semibold text-[#121316] hover:text-[#C31F21] whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Custom surface request</span>
            <ArrowUpRight className="w-4 h-4 arrow-icon text-[#C31F21]" />
          </button>
        </div>

      </div>
    </section>
  );
};
