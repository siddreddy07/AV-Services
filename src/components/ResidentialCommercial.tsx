import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ResidentialCommercialProps {
  onSelectCategory?: (category: 'residential' | 'commercial') => void;
}

export const ResidentialCommercial: React.FC<ResidentialCommercialProps> = ({ onSelectCategory }) => {
  const [hoveredSide, setHoveredSide] = useState<'residential' | 'commercial' | null>(null);

  return (
    <section id="residential-commercial" className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
              04
            </span>
            <span>/ Scope of Service</span>
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#121316] leading-[1.08] tracking-tight">
            Tailored to the scale<br />
            of your property.
          </h2>
        </div>

        {/* Asymmetric 60/40 Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Residential Block */}
          <div
            onMouseEnter={() => setHoveredSide('residential')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#F4F5F7] border border-[#E2E4E8] rounded-[4px] transition-all duration-300 ${
              hoveredSide === 'residential'
                ? 'lg:col-span-7 shadow-md border-[#C31F21]'
                : hoveredSide === 'commercial'
                ? 'lg:col-span-7 opacity-85'
                : 'lg:col-span-7'
            }`}
          >
            <div>
              {/* Large Exterior Photograph */}
              <div className="aspect-[16/9] overflow-hidden rounded-[3px] border border-[#E2E4E8] mb-6 bg-[#FFFFFF] shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                  alt="Pristine residential home exterior in Houston"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mb-1.5">
                <span className="font-mono text-xs font-semibold tracking-widest text-[#C31F21] uppercase">
                  Residential
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#121316] tracking-tight mb-3">
                For your home.
              </h3>

              {/* Surface List */}
              <div className="space-y-1.5 text-sm sm:text-base text-[#58585A] mb-6 divide-y divide-[#E2E4E8]">
                <div className="pt-1.5">Driveways & Sidewalks</div>
                <div className="pt-1.5">House Siding & Soft Wash</div>
                <div className="pt-1.5">Patios & Pool Decks</div>
                <div className="pt-1.5">Wood Privacy Fences</div>
                <div className="pt-1.5">Entryways & Porches</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E4E8]">
              <button
                type="button"
                onClick={() => onSelectCategory && onSelectCategory('residential')}
                className="clean-secondary-link text-sm font-semibold text-[#121316] hover:text-[#C31F21] cursor-pointer"
              >
                <span>Select residential services</span>
                <ArrowUpRight className="w-4 h-4 arrow-icon text-[#C31F21]" />
              </button>
            </div>
          </div>

          {/* Commercial Block */}
          <div
            onMouseEnter={() => setHoveredSide('commercial')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#F4F5F7] border border-[#E2E4E8] rounded-[4px] transition-all duration-300 ${
              hoveredSide === 'commercial'
                ? 'lg:col-span-5 shadow-md border-[#C31F21]'
                : hoveredSide === 'residential'
                ? 'lg:col-span-5 opacity-85'
                : 'lg:col-span-5'
            }`}
          >
            <div>
              {/* Secondary Photograph */}
              <div className="aspect-[16/10] overflow-hidden rounded-[3px] border border-[#E2E4E8] mb-6 bg-[#FFFFFF] shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85"
                  alt="Commercial property walkways and storefront plaza"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mb-1.5">
                <span className="font-mono text-xs font-semibold tracking-widest text-[#C31F21] uppercase">
                  Commercial
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#121316] tracking-tight mb-3">
                For your business.
              </h3>

              {/* Surface List */}
              <div className="space-y-1.5 text-sm sm:text-base text-[#58585A] mb-6 divide-y divide-[#E2E4E8]">
                <div className="pt-1.5">Walkways & Pedestrian Aprons</div>
                <div className="pt-1.5">Storefronts & Entrances</div>
                <div className="pt-1.5">Dumpster Pads & Oil Stains</div>
                <div className="pt-1.5">Multi-unit Common Areas</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E4E8]">
              <button
                type="button"
                onClick={() => onSelectCategory && onSelectCategory('commercial')}
                className="clean-secondary-link text-sm font-semibold text-[#121316] hover:text-[#C31F21] cursor-pointer"
              >
                <span>Select commercial cleaning</span>
                <ArrowUpRight className="w-4 h-4 arrow-icon text-[#C31F21]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
