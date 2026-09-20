import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    verified: true,
    text: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."',
  },
  {
    id: 2,
    name: 'Alex K.',
    rating: 5,
    verified: true,
    text: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5,
    verified: true,
    text: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
  },
  {
    id: 4,
    name: 'Mooen T.',
    rating: 5,
    verified: true,
    text: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The quality and fast delivery make it my favorite store online."',
  },
  {
    id: 5,
    name: 'Tali T.',
    rating: 5,
    verified: true,
    text: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The quality and fast delivery make it my favorite store online."',
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  // Scroll controls for the arrows
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Navigation Arrows */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-2.5 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all text-black"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2.5 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all text-black"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Testimonials Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}

              className=" max-w-100 bg-white border border-gray-200 rounded-xl p-6 md:p-7 flex flex-col justify-between shrink-0"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1.5 text-[#FFC633] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>

                {/* Customer Name & Green Verified Badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="font-bold text-black text-lg md:text-xl">
                    {item.name}
                  </span>
                  {item.verified && (
                    <span className="w-5 h-5 bg-[#01AB31] rounded-full flex items-center justify-center text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                  )}
                </div>

                {/* Testimonial Quote */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}