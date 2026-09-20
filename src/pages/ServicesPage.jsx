import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const services = [
  {
    icon: <Truck size={32} className="text-black" />,
    title: "Free Fast Delivery",
    description: "Enjoy complimentary nationwide shipping on all orders over $50 with real-time tracking.",
  },
  {
    icon: <ShieldCheck size={32} className="text-black" />,
    title: "Secure Payment",
    description: "100% encrypted and safe payment processing supporting major cards and digital wallets.",
  },
  {
    icon: <RefreshCw size={32} className="text-black" />,
    title: "30-Day Easy Returns",
    description: "Not satisfied with your fit? Return or exchange items hassle-free within 30 days.",
  },
  {
    icon: <Headphones size={32} className="text-black" />,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available round-the-clock to assist with your order.",
  },
];

const features = [
  "Custom tailoring and fitting consultations",
  "Eco-friendly & sustainable fabric sourcing",
  "Priority express shipping options",
  "Exclusive VIP member rewards and early drops",
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen font-sans flex flex-col justify-between">
      <NavBar />

      <main className="max-w-7xl mx-auto px-4 py-12 w-full">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-[#F0EEED] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight mb-4">
            ELEVATING YOUR SHOPPING EXPERIENCE
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            From seamless checkout to post-purchase support, we provide premium services tailored to deliver maximum style with zero hassle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-[20px] p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between bg-white"
            >
              <div>
                <div className="w-14 h-14 bg-[#F0EEED] rounded-2xl flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="font-bold text-black text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Care & Tailoring Banner */}
        <div className="bg-[#F0EEED] rounded-[28px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-black font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles size={16} /> Premium Service
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase mb-4">
              Bespoke Styling & Quality Assurance
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Every item is inspected through our rigorous quality checks before dispatch. We offer personalized size matching to ensure your clothes fit perfectly every single time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-black shrink-0" />
                  <span className="text-xs sm:text-sm text-black font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-black text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer">
              <span>Book a Style Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="w-full lg:w-96 aspect-square bg-gray-300 rounded-[20px] overflow-hidden flex items-center justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
              alt="Quality Apparel Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}