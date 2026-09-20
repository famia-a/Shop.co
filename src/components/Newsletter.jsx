import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 font-sans">
      {/* Outer Floating Card Container */}
      <div className="bg-black rounded-[20px] sm:rounded-[32px] px-6 sm:px-12 py-9 md:py-11 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
        
        {/* 1. Left Headline Text */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-[40px] font-black uppercase leading-tight tracking-tight max-w-xl text-center lg:text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        {/* 2. Right Form Inputs */}
        <form 
          onSubmit={handleSubmit} 
          className="w-full sm:w-[350px] md:w-[380px] flex flex-col gap-3.5"
        >
          {/* Email Input Field */}
          <div className="relative flex items-center">
            <Mail className="absolute left-4 text-gray-400 w-5 h-5 pointer-events-none" />
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-black text-sm md:text-base rounded-full pl-12 pr-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all placeholder-gray-400"
            />
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-black font-medium text-sm md:text-base py-3.5 rounded-full transition-all duration-200 active:scale-[0.98]"
          >
            Subscribe to Newsletter
          </button>
        </form>

      </div>
    </div>
  );
}