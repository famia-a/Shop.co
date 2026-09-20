import React from 'react'
import heroImgSrc from '/public/heroImgSrc.jpg'
import BrandBanner from './ui/BrandBanner'
export default function Hero() {
  return (
    <section className="bg-[#F2F0F1] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 1. Left Content Area */}
          <div className="lg:col-span-7 z-10 pb-8 md:pb-16">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-[0.95] tracking-tight text-black uppercase mb-5 md:mb-8">
              Find clothes <br className="hidden sm:inline" />
              that matches <br className="hidden sm:inline" />
              your style
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mb-8">
              Browse through our diverse range of meticulously crafted garments, designed 
              to bring out your individuality and cater to your sense of style.
            </p>

            {/* CTA Button */}
            <a
              href="#shop-now"
              className="inline-block w-full sm:w-auto text-center bg-black hover:bg-gray-800 text-white font-medium px-14 py-4 rounded-full transition-all duration-200 mb-10 md:mb-12"
            >
              Shop Now
            </a>

            {/* Stats Section */}
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-6 sm:gap-8 pt-2">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">200+</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">International Brands</p>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-12 w-[1px] bg-gray-300" />

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">2,000+</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">High-Quality Products</p>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-12 w-[1px] bg-gray-300" />

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">30,000+</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Happy Customers</p>
              </div>
            </div>

          </div>

          {/* 2. Right Image Area with Star Vector Accents */}
          <div className="lg:col-span-5 relative flex justify-center h-150 items-end self-end">
            
            {/* Small Sparkle Star (Left) */}
            <div className="absolute top-1/3 left-4 md:left-8 z-10 pointer-events-none">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="w-10 h-10 md:w-14 md:h-14">
                <path d="M28 0C28 15.464 15.464 28 0 28C15.464 28 28 40.536 28 56C28 40.536 40.536 28 56 28C40.536 28 28 15.464 28 0Z" fill="black"/>
              </svg>
            </div>

            {/* Large Sparkle Star (Top Right) */}
            <div className="absolute top-6 right-4 md:right-8 z-10 pointer-events-none">
              <svg width="104" height="104" viewBox="0 0 104 104" fill="none" className="w-16 h-16 md:w-24 md:h-24">
                <path d="M52 0C52 28.7188 28.7188 52 0 52C28.7188 52 52 75.2812 52 104C52 75.2812 75.2812 52 104 52C75.2812 52 52 28.7188 52 0Z" fill="black"/>
              </svg>
            </div>

            {/* Imported Hero Image */}
            <img 
              src={heroImgSrc} 
              alt="SHOP.CO Fashion Models" 
              className="w-full max-w-md lg:max-w-none h-150 object-cover object-up"
            />

          </div>

        </div>
      </div>
      <BrandBanner/>
    </section>
  );
}
