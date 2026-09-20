import React from 'react';

const products = [
  {
    id: 1,
    title: 'T-shirt with Tape Details',
    price: 120,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    imageKey: 'tapeTshirt',
  },
  {
    id: 2,
    title: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: '-20%',
    rating: 3.5,
    imageKey: 'skinnyJeans',
  },
  {
    id: 3,
    title: 'Checkered Shirt',
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    imageKey: 'checkeredShirt',
  },
  {
    id: 4,
    title: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    discount: '-30%',
    rating: 4.5,
    imageKey: 'stripedTshirt',
  },
];

// Helper component to render star rating stars + score
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 my-2">
      <div className="flex text-[#FFC633] text-m">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <span key={index}>★</span>;
          } else if (index === fullStars && hasHalfStar) {
            return <span key={index}>★</span>; // Can replace with half star icon/SVG if needed
          }
          return <span key={index} className="text-gray-300">★</span>;
        })}
      </div>
      <span className="text-xs text-black font-medium ml-1">
        {rating}/<span className="text-gray-400">5</span>
      </span>
    </div>
  );
}

export default function NewArrivals({ images = {} }) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-black uppercase tracking-tight mb-8 md:mb-14">
        NEW ARRIVALS
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            
            {/* Image Container */}
            <div className="bg-[#F0EEED] rounded-[20px] aspect-square overflow-hidden flex items-center justify-center p-4 mb-4">
              <img
                src={images[product.imageKey] || "https://via.placeholder.com/300"}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Title */}
            <h3 className="font-bold text-black text-base sm:text-lg line-clamp-1">
              {product.title}
            </h3>

            {/* Rating Stars & Score */}
            <StarRating rating={product.rating} />

            {/* Pricing Section */}
            <div className="flex items-center gap-2.5 mt-1">
              {/* Current Price */}
              <span className="text-xl sm:text-2xl font-bold text-black">
                ${product.price}
              </span>

              {/* Original Line-through Price (if discounted) */}
              {product.originalPrice && (
                <span className="text-xl sm:text-2xl font-bold text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}

              {/* Discount Badge (if applicable) */}
              {product.discount && (
                <span className="bg-[#FF3333]/10 text-[#FF3333] text-xs font-medium px-2.5 py-1 rounded-full">
                  {product.discount}
                </span>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-9 text-center">
        <a
          href="#view-all-new-arrivals"
          className="inline-block w-full sm:w-auto text-black border border-gray-200 hover:bg-black hover:text-white font-medium text-sm px-14 py-3.5 rounded-full transition-all duration-200"
        >
          View All
        </a>
      </div>
    </section>
  );
}