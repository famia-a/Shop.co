import React from 'react';
import { addToCart } from '../redux/features/cartSlice';
import {useDispatch, useSelector} from 'react-redux'
// Sample static colors for filter
const colors = [
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-400',
  'bg-orange-500',
  'bg-sky-400',
  'bg-blue-600',
  'bg-purple-600',
  'bg-pink-500',
  'bg-white border border-gray-300',
  'bg-black',
];

// Sample sizes for filter
const sizes = [
  'XX-Small',
  'X-Small',
  'Small',
  'Medium',
  'Large',
  'X-Large',
  'XX-Large',
  '3X-Large',
  '4X-Large',
];

export default function ProductPageLayout({ items = [] }) {
  const dispatch = useDispatch();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <div className="flex gap-8 items-start">
        {/* ================= LEFT SIDEBAR FILTERS ================= */}
        <aside className="w-72 shrink-0 border border-gray-200 rounded-[20px] p-5 hidden lg:block">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h3 className="font-bold text-xl text-black">Filters</h3>
            <span className="text-gray-400 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </span>
          </div>

          {/* Categories List */}
          <div className="py-4 border-b border-gray-200 space-y-3 text-gray-600 text-sm">
            {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
              <div key={category} className="flex justify-between items-center cursor-pointer hover:text-black">
                <span>{category}</span>
                <span className="text-xs">&gt;</span>
              </div>
            ))}
          </div>

          {/* Price Range */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-black text-base">Price</h4>
              <span className="text-xs cursor-pointer">▲</span>
            </div>
            <div className="relative w-full bg-gray-200 h-1 rounded my-4">
              <div className="absolute left-1/4 right-1/4 bg-black h-1 rounded"></div>
              <div className="absolute -top-1.5 left-1/4 w-4 h-4 bg-black rounded-full cursor-pointer"></div>
              <div className="absolute -top-1.5 right-1/4 w-4 h-4 bg-black rounded-full cursor-pointer"></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-black">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>

          {/* Colors */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-black text-base">Colors</h4>
              <span className="text-xs cursor-pointer">▲</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {colors.map((colorClass, index) => (
                <button
                  key={index}
                  className={`w-9 h-9 rounded-full ${colorClass} flex items-center justify-center cursor-pointer`}
                >
                  {index === 5 && <span className="text-white text-xs">✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-black text-base">Size</h4>
              <span className="text-xs cursor-pointer">▲</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                    size === 'Large'
                      ? 'bg-black text-white'
                      : 'bg-[#F0EEED] text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style */}
          <div className="py-4 border-b border-gray-200 space-y-3 text-gray-600 text-sm">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-black text-base">Dress Style</h4>
              <span className="text-xs cursor-pointer">▲</span>
            </div>
            {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
              <div key={style} className="flex justify-between items-center cursor-pointer hover:text-black">
                <span>{style}</span>
                <span className="text-xs">&gt;</span>
              </div>
            ))}
          </div>

          {/* Apply Filter Button */}
          <button className="w-full bg-black text-white text-sm font-medium py-3 rounded-full mt-5 hover:bg-gray-800 transition-colors">
            Apply Filter
          </button>
        </aside>

        {/* ================= RIGHT MAIN CONTENT ================= */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-black text-black">SHOP NOW</h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>Showing 1-10 of 100 Products</span>
              <span className="hidden sm:inline">Sort by:</span>
              <button className="font-bold text-black flex items-center gap-1 cursor-pointer">
                Most Popular <span>▼</span>
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((data) => (
              <div key={data.id} className="group cursor-pointer mb-10">
                {/* Image Container */}
                <div className="bg-[#F0EEED] rounded-[20px] aspect-square overflow-hidden p-4 flex items-center justify-center mb-2">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-black text-base line-clamp-1">
                  {data.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 my-1.5">
                  <div className="flex text-[#FFC633] text-sm">
                    ★ ★ ★ ★ <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs font-medium text-black">
                    {data.rating?.rate || '4.5'}/<span className="text-gray-400">5</span>
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-black">${data.price}</span>
                  <span className="text-xl font-bold text-gray-400 line-through">
                    ${(data.price * 1.2).toFixed(0)}
                  </span>
                  <span className="bg-[#FF3333]/10 text-[#FF3333] text-xs font-medium px-2 py-0.5 rounded-full">
                    -20%
                  </span>
                </div>
                <button
                  onClick={() => dispatch(addToCart(data))}
                  className="w-full bg-black text-white py-2 mt-3 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                 Add to Cart
                  </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
            <button className="flex items-center gap-2 text-xs font-medium border border-gray-200 px-3.5 py-2 rounded-lg hover:bg-gray-100">
              ← Previous
            </button>
            <div className="flex items-center gap-1 text-xs font-medium">
              <button className="w-8 h-8 rounded-lg bg-gray-100 font-bold text-black">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-500">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-500">3</button>
              <span className="px-1 text-gray-400">...</span>
              <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-500">8</button>
              <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-500">9</button>
              <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-500">10</button>
            </div>
            <button className="flex items-center gap-2 text-xs font-medium border border-gray-200 px-3.5 py-2 rounded-lg hover:bg-gray-100">
              Next →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}