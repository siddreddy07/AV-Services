import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/servicesData';

export const BeforeAfterSlider: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(1, Math.min(99, percentage)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-28 bg-[#121316] text-[#FFFFFF] border-t border-[#1C1E24] relative overflow-hidden">
      
      {/* Background Subtle Gradient Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(195,31,33,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        
        {/* Header & Surface Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
                02
              </span>
              <span className="text-[#C31F21]">/ Transformation</span>
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#FFFFFF] leading-[1.08] tracking-tight mb-3">
              One surface.<br />
              Two completely different impressions.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#FFFFFF]/80 font-normal leading-relaxed">
              Drag the clean line across to reveal true before-and-after restorations on local Houston and Katy properties.
            </p>
          </div>

          {/* Surface Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
            {BEFORE_AFTER_ITEMS.map((item, idx) => {
              const isSelected = activeItemIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveItemIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all rounded-[3px] cursor-pointer border ${
                    isSelected
                      ? 'bg-[#C31F21] text-[#FFFFFF] border-[#C31F21] font-semibold shadow-sm'
                      : 'bg-[#1A1C22]/80 text-[#FFFFFF]/70 hover:text-[#FFFFFF] hover:bg-[#1A1C22] border-white/10'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Signature Before/After Comparison Container */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[640px] overflow-hidden rounded-[4px] border border-white/15 select-none cursor-ew-resize bg-[#1A1C22] touch-none shadow-2xl group"
        >
          {/* AFTER IMAGE (Base Layer) */}
          <img
            src={activeItem.afterImage}
            alt={`${activeItem.title} - After clean`}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* BEFORE IMAGE (Clipped via clip-path) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          >
            <img
              src={activeItem.beforeImage}
              alt={`${activeItem.title} - Before clean`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Dynamic BEFORE & AFTER labels */}
          <div
            className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 pointer-events-none transition-opacity duration-200"
            style={{ opacity: sliderPosition > 15 ? 1 : 0.2 }}
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-[#FFFFFF] bg-[#121316]/85 backdrop-blur-xs px-2.5 py-1 rounded-[2px] border border-white/15">
              BEFORE
            </span>
          </div>

          <div
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 pointer-events-none transition-opacity duration-200"
            style={{ opacity: sliderPosition < 85 ? 1 : 0.2 }}
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#C31F21] backdrop-blur-xs px-2.5 py-1 rounded-[2px] shadow-sm">
              CLEANED
            </span>
          </div>

          {/* Clean Line Divider & Custom Scrub Grip with Crimson Ring */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-[2px] h-full bg-[#C31F21] shadow-[0_0_16px_rgba(195,31,33,0.9)] relative -translate-x-1/2">
              <div
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#FFFFFF] text-[#121316] flex items-center justify-center shadow-2xl border-2 border-[#C31F21] transition-all duration-200 ${
                  isHovered || isDragging
                    ? 'w-12 h-12 scale-105 ring-4 ring-[#C31F21]/30'
                    : 'w-10 h-10 scale-100'
                }`}
              >
                <span className="text-[9px] font-mono font-bold tracking-tight uppercase">
                  {isDragging ? 'HOLD' : 'DRAG ↔'}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Surface & Location Note */}
          <div className="absolute bottom-3.5 left-3.5 sm:bottom-5 sm:left-5 pointer-events-none max-w-md hidden sm:block">
            <div className="text-xs font-mono text-[#FFFFFF] bg-[#121316]/90 backdrop-blur-xs px-3 py-1.5 rounded-[3px] leading-relaxed border border-white/15">
              <span className="font-semibold text-[#C31F21]">{activeItem.surface}</span> · {activeItem.location} — {activeItem.note}
            </div>
          </div>

        </div>

        {/* Mobile Info Strip */}
        <div className="sm:hidden mt-3 text-xs font-mono text-[#FFFFFF]/80 text-center">
          <span className="text-[#C31F21] font-semibold">{activeItem.surface}</span> · <span>{activeItem.location}</span>
        </div>

      </div>
    </section>
  );
};
