import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, Tag, ArrowRight } from 'lucide-react';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/features/cartSlice';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Dynamic Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between font-sans">
      <NavBar />

      <main className="max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-6">
          YOUR CART
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 border border-gray-200 rounded-[20px]">
            <p className="text-gray-500 font-medium mb-4">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            
            {/* LEFT: Items List */}
            <div className="w-full lg:w-[60%] border border-gray-200 rounded-[20px] p-4 sm:p-6 space-y-4">
              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex gap-4 items-center">
                    
                    {/* Item Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F0EEED] rounded-xl p-2 shrink-0 flex items-center justify-center">
                      <img src={item.image} alt={item.title} className="max-h-full object-contain" />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 flex flex-col justify-between h-24 sm:h-28">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-black text-sm sm:text-base line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Size: <span className="text-gray-700">Large</span>
                          </p>
                          <p className="text-xs text-gray-500">
                            Color: <span className="text-gray-700">White</span>
                          </p>
                        </div>

                        {/* Red Trash Icon */}
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-[#FF3333] hover:text-red-700 p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {/* Price & Quantity Controls */}
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-black text-lg sm:text-xl">
                          ${item.price}
                        </span>

                        {/* Quantity Counter Pill */}
                        <div className="flex items-center gap-4 bg-[#F0EEED] px-3 py-1.5 rounded-full">
                          <button
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                            className="text-black hover:text-gray-600 cursor-pointer"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-bold text-black w-3 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(increaseQuantity(item.id))}
                            className="text-black hover:text-gray-600 cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Divider line except after last item */}
                  {index < cartItems.length - 1 && (
                    <div className="border-t border-gray-100 my-4" />
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT: Order Summary */}
            <div className="w-full lg:w-[40%] border border-gray-200 rounded-[20px] p-5 sm:p-6">
              <h2 className="font-bold text-black text-xl mb-5">Order Summary</h2>

              <div className="space-y-3.5 text-sm sm:text-base border-b border-gray-100 pb-4">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">${subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Discount (-20%)</span>
                  <span className="font-bold text-[#FF3333]">-${discount.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-black">${deliveryFee}</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex justify-between items-center py-4 text-black">
                <span className="text-base font-medium">Total</span>
                <span className="text-2xl font-bold">${total.toFixed(0)}</span>
              </div>

              {/* Promo Code Input */}
              <div className="flex gap-2.5 mb-4">
                <div className="relative flex-1 flex items-center">
                  <Tag className="absolute left-3.5 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="w-full bg-[#F0EEED] rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none"
                  />
                </div>
                <button className="bg-black text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
                <span>Go to Checkout</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}