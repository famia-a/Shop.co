import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { TwitterIcon,Facebook02Icon,InstagramIcon,GithubIcon } from '@hugeicons/core-free-icons';
export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] pt-12 pb-10 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
          
          {/* Brand Info & Social Icons (4 Columns on Desktop) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <a href="#" className="text-2xl sm:text-3xl font-black tracking-tighter text-black uppercase inline-block mb-4">
              SHOP.CO
            </a>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                aria-label="Twitter"
              >
                <HugeiconsIcon icon={TwitterIcon} size={15}/>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                aria-label="Facebook"
              >
                <HugeiconsIcon icon={Facebook02Icon} size={15} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                aria-label="Instagram"
              >
                <HugeiconsIcon icon={InstagramIcon} size={15} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                aria-label="GitHub"
              >
                <HugeiconsIcon icon={GithubIcon} size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Links (8 Columns Split into 4 Equal Columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: COMPANY */}
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase mb-5">
                COMPANY
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Works</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Career</a></li>
              </ul>
            </div>

            {/* Column 2: HELP */}
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase mb-5">
                HELP
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Customer Support</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Delivery Details</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 3: FAQ */}
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase mb-5">
                FAQ
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Account</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Manage Deliveries</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Orders</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Payments</a></li>
              </ul>
            </div>

            {/* Column 4: RESOURCES */}
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase mb-5">
                RESOURCES
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Free eBooks</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Development Tutorial</a></li>
                <li><a href="#" className="hover:text-black transition-colors">How to - Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Youtube Playlist</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-200 my-4" />

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-gray-500">
          <p>
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Badges */}
          <div className="flex items-center gap-3">
            {/* Visa */}
            <div className="w-12 h-7 bg-white rounded-md border border-gray-200 flex items-center justify-center font-bold italic text-blue-800 text-xs shadow-sm">
              VISA
            </div>

            {/* Mastercard */}
            <div className="w-12 h-7 bg-white rounded-md border border-gray-200 flex items-center justify-center gap-0.5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block -ml-1.5 opacity-80"></span>
            </div>

            {/* PayPal */}
            <div className="w-12 h-7 bg-white rounded-md border border-gray-200 flex items-center justify-center font-bold italic text-blue-600 text-xs shadow-sm">
              PayPal
            </div>

            {/* Apple Pay */}
            <div className="w-12 h-7 bg-white rounded-md border border-gray-200 flex items-center justify-center font-semibold text-black text-xs shadow-sm">
              Pay
            </div>

            {/* Google Pay */}
            <div className="w-12 h-7 bg-white rounded-md border border-gray-200 flex items-center justify-center font-medium text-gray-700 text-xs shadow-sm">
              G Pay
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}