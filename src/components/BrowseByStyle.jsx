import React from 'react';
import casual from '../assets/Casual.png'
import formal from '../assets/Formal.png'
import party from '../assets/Party.png'
import gym from '../assets/gym.png'

export default function BrowseByStyle() {

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#F0F0F0] rounded-[40px] p-6 sm:p-12 md:p-16">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-black uppercase tracking-tight mb-8 md:mb-16">
          Browse by dress style
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="md:col-span-1 flex justify-between  relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-white group cursor-pointer">
            <h3 className="absolute top-6 left-6 z-10 text-2xl font-bold text-black">
              Casual
            </h3>
            <img
              src={casual}
              alt="Casual Style"
              className="w-50 h-full object-cover object-left transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-2 relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-white group cursor-pointer">
            <h3 className="absolute top-6 left-6 z-10 text-2xl font-bold text-black">
              Formal
            </h3>
            <img
              src={formal}
              alt="Formal Style"
              className="w-full h-full flex justify-between items-center object-cover object-right transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-2 relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-white group cursor-pointer">
            <h3 className="absolute top-6 left-6 z-10 text-2xl font-bold text-black">
              Party
            </h3>
            <img
              src={party}
              alt="Party Style"
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-1 relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-white group cursor-pointer">
            <h3 className="absolute top-6 left-6 z-10 text-2xl font-bold text-black">
              Gym
            </h3>
            <img
              src={gym }
              alt="Gym Style"
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  )
}