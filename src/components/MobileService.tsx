import React from 'react';

export const MobileService: React.FC = () => {
  return (
    <section id="equipment" className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#F4F5F7]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Editorial Heading Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-12">
          
          <div className="lg:col-span-7">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
                05
              </span>
              <span>/ Mobile Operations</span>
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#121316] leading-[1.08] tracking-tight">
              We bring the equipment<br />
              to your location.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end lg:pb-2">
            <p className="text-sm sm:text-base text-[#58585A] leading-relaxed font-normal max-w-md">
              Fully self-contained pressure washing rigs serving homes and businesses across Houston and Katy.
            </p>
          </div>

        </div>

        {/* Large Visual Equipment Feature Photograph */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] max-h-[540px] overflow-hidden rounded-[4px] border border-[#E2E4E8] bg-[#FFFFFF] shadow-xs mb-8">
          <img
            src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2200&q=90"
            alt="High-flow commercial rotary surface cleaner removing heavy concrete grime"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-3 left-3 pointer-events-none">
            <span className="text-[11px] font-mono text-[#FFFFFF] bg-[#121316]/90 backdrop-blur-xs px-2.5 py-1 rounded-[3px] border border-white/10">
              Commercial Surface Cleaners · Independent Power & Buffer Tanks
            </span>
          </div>
        </div>

        {/* 3 Detail Specifications with Thin Dividing Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 sm:pt-8 border-t border-[#E2E4E8]">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-[#C31F21] font-bold uppercase tracking-wider">01 / Independence</span>
            <h3 className="text-base sm:text-lg font-medium text-[#121316]">Self-contained water supply</h3>
            <p className="text-xs sm:text-sm text-[#58585A] leading-relaxed">
              Equipped with buffer tanks to guarantee consistent water pressure regardless of property flow rates.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-xs text-[#C31F21] font-bold uppercase tracking-wider">02 / Calibrated Force</span>
            <h3 className="text-base sm:text-lg font-medium text-[#121316]">Commercial-grade PSI & GPM</h3>
            <p className="text-xs sm:text-sm text-[#58585A] leading-relaxed">
              High flow volume (GPM) flushes heavy sediment effortlessly without needing damaging abrasive pressure.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-xs text-[#C31F21] font-bold uppercase tracking-wider">03 / Even Finish</span>
            <h3 className="text-base sm:text-lg font-medium text-[#121316]">Precision surface cleaners</h3>
            <p className="text-xs sm:text-sm text-[#58585A] leading-relaxed">
              Dual-nozzle enclosed rotary scrubbers eliminate zebra striping and leave completely uniform concrete.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
