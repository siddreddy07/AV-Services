import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenQuote: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenQuote }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/96 backdrop-blur-md border-t border-[#E2E4E8] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg"
    >
      <div className="flex items-center gap-2.5 max-w-lg mx-auto">
        <a
          href="https://instagram.com/avpressurewash"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-[#E2E4E8] bg-[#F4F5F7] text-[#121316] rounded-[4px] flex items-center justify-center shrink-0 hover:bg-[#121316] hover:text-[#C31F21] transition-colors"
          aria-label="Follow on Instagram"
        >
          <Instagram className="w-5 h-5" strokeWidth={1.75} />
        </a>

        <button
          type="button"
          onClick={onOpenQuote}
          className="flex-1 btn-forest-primary py-3 px-5 text-sm uppercase tracking-wider shadow-sm"
        >
          <span>Get a quote</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 cta-arrow" strokeWidth={2} />
        </button>
      </div>
    </aside>
  );
};
