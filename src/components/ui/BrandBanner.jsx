import React from 'react';

export default function BrandsBanner() {
  return (
    <section className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          
          {/* VERSACE */}
          <span className="text-white font-serif tracking-[0.25em] text-2xl sm:text-3xl md:text-4xl font-bold uppercase hover:opacity-80 transition-opacity cursor-pointer">
            VERSACE
          </span>

          {/* ZARA */}
          <span className="text-white font-serif tracking-widest text-2xl sm:text-3xl md:text-4xl font-black uppercase hover:opacity-80 transition-opacity cursor-pointer">
            ZARA
          </span>

          {/* GUCCI */}
          <span className="text-white font-serif tracking-[0.2em] text-2xl sm:text-3xl md:text-4xl font-bold uppercase hover:opacity-80 transition-opacity cursor-pointer">
            GUCCI
          </span>

          {/* PRADA */}
          <span className="text-white font-sans tracking-[0.15em] text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase hover:opacity-80 transition-opacity cursor-pointer">
            PRADA
          </span>

          {/* CALVIN KLEIN */}
          <span className="text-white font-sans tracking-[0.05em] text-xl sm:text-2xl md:text-3xl font-light uppercase hover:opacity-80 transition-opacity cursor-pointer">
            Calvin Klein
          </span>

        </div>
      </div>
    </section>
  );
}