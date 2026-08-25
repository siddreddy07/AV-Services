import React from 'react';

export const ServiceArea: React.FC = () => {
  const areas = [
    'Cinco Ranch',
    'Memorial',
    'Energy Corridor',
    'Grand Lakes',
    'Elyson',
    'Cypress',
    'Sugar Land',
    'Fulshear',
    'Richmond',
    'Spring'
  ];

  return (
    <section id="areas" className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#F4F5F7]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Typography */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
                09
              </span>
              <span>/ Coverage Area</span>
            </span>

            <h2 className="text-4xl sm:text-7xl lg:text-[84px] font-medium text-[#121316] leading-[0.98] tracking-tight">
              Houston.<br />
              Katy.<br />
              <span className="text-[#C31F21]">And nearby.</span>
            </h2>
          </div>

          {/* Right: Clean Area List */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-8">
            <p className="text-sm sm:text-base text-[#58585A] leading-relaxed mb-6">
              Based in the Houston and Katy metropolitan area, our fully mobile units dispatch throughout West Houston, residential neighborhoods, master-planned communities, and commercial districts.
            </p>

            <div className="border-t border-[#E2E4E8] pt-6">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#C31F21] mb-3">
                Primary Neighborhoods & Zones:
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-[#121316]">
                {areas.map((area) => (
                  <span key={area} className="inline-flex items-center">
                    <span className="font-medium">{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
