import React, { useState } from 'react';
import { Search, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';
import {Link} from  'react-router-dom'

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4 md:gap-8">
          
          {/* 1. Mobile Menu Button & Brand Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-black hover:text-gray-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* SHOP.CO Logo with Heavy Bold Styling */}
            <Link to="/" className="text-2xl sm:text-3xl font-black tracking-tighter text-black uppercase">
              SHOP.CO
            </Link>
          </div>

          {/* 2. Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-black">
            {/* Dropdown Link */}
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-gray-600">
              <span>Shop</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              
              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 py-2">
                <Link to="/Products" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Men's Clothing</Link>
                <Link to="/Products" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Women's Clothing</Link>
                <Link to="/Products" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Kids Section</Link>
              </div>
            </div>

            <Link to="/Service" className="hover:text-gray-600 transition-colors">
              Service
            </Link>
            <Link to="/NewArrivals" className="hover:text-gray-600 transition-colors" >
              New Arrivals
            </Link>
            <Link to="/Products" className="hover:text-gray-600 transition-colors">
              Products
            </Link>
          </nav>

          {/* 3. Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-gray-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F0F0F0] text-black text-sm rounded-full pl-12 pr-4 py-3 border border-transparent focus:outline-none focus:border-gray-300 focus:bg-white transition-all placeholder-gray-500"
              />
            </div>
          </div>

          {/* 4. Action Icons (Cart & Account) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Search Toggle Icon */}
            <button className="md:hidden p-2 text-black hover:text-gray-600" aria-label="Search">
              <Search size={22} />
            </button>

            {/* Cart Button */}
            <Link 
              to="/Cart" 
              className="relative p-2 text-black hover:text-gray-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={22} />
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
               
              </span>
            </Link>

            {/* Profile / Account Button */}
            <a 
              href="#profile" 
              className="p-2 text-black hover:text-gray-600 transition-colors"
              aria-label="User Profile"
            >
              <User size={22} />
            </a>
          </div>

        </div>
      </div>

      {/* 5. Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-4">
          {/* Mobile Search Input */}
          <div className="relative flex items-center md:hidden">
            <Search className="absolute left-4 text-gray-400 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F0F0F0] text-black text-sm rounded-full pl-12 pr-4 py-2.5 focus:outline-none"
            />
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-3 font-medium text-black">
            <a href="#shop" className="py-2 border-b border-gray-50 flex items-center justify-between">
              <span>Shop</span>
              <ChevronDown size={16} />
            </a>
            <a href="#on-sale" className="py-2 border-b border-gray-50">
              On Sale
            </a>
            <a href="#new-arrivals" className="py-2 border-b border-gray-50">
              New Arrivals
            </a>
            <a href="#brands" className="py-2">
              Brands
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}