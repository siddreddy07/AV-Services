import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=1600&q=85',
      caption: 'Rotary concrete cleaner cutting clean lines on circular drive',
      tag: 'Katy, TX'
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      caption: 'Residential soft wash & facade restoration',
      tag: 'Memorial, Houston'
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1200&q=85',
      caption: 'Backyard travertine pool deck & stone wash',
      tag: 'River Oaks, Houston'
    }
  ];

  return (
    <section id="instagram" className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#F4F5F7]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
                07
              </span>
              <span>/ Recent Fieldwork</span>
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#121316] leading-[1.08] tracking-tight">
              Follow the daily<br />
              transformations.
            </h2>
          </div>

          <div>
            <a
              href="https://instagram.com/avpressurewash"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-secondary-link text-sm sm:text-base font-semibold text-[#121316] hover:text-[#C31F21]"
            >
              <span>Follow @avpressurewash</span>
              <ArrowUpRight className="w-4 h-4 arrow-icon text-[#C31F21]" />
            </a>
          </div>
        </div>

        {/* Asymmetric 3-Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Dominant Image */}
          <div className="lg:col-span-7">
            <a
              href="https://instagram.com/avpressurewash"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative aspect-[16/11] overflow-hidden rounded-[4px] border border-[#E2E4E8] bg-[#FFFFFF] shadow-xs"
            >
              <img
                src={posts[0].image}
                alt={posts[0].caption}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-[#121316]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="font-mono text-xs text-[#FFFFFF] bg-[#C31F21] font-bold px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1 shadow-xs">
                    @avpressurewash <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C31F21] block mb-1 uppercase tracking-wider font-semibold">
                    {posts[0].tag}
                  </span>
                  <p className="text-sm sm:text-base text-[#FFFFFF] font-medium leading-snug">
                    {posts[0].caption}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* 2 Stacked Secondary Images */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {posts.slice(1).map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/avpressurewash"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-[16/10] overflow-hidden rounded-[4px] border border-[#E2E4E8] bg-[#FFFFFF] shadow-xs"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-[#121316]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="font-mono text-xs text-[#FFFFFF] bg-[#C31F21] font-bold px-2 py-0.5 rounded-[2px] inline-flex items-center gap-1 shadow-xs">
                      @avpressurewash <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#C31F21] block mb-0.5 uppercase tracking-wider font-semibold">
                      {post.tag}
                    </span>
                    <p className="text-xs sm:text-sm text-[#FFFFFF] font-medium leading-snug">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
