"use client"

import React from 'react'
import { Sparkles } from "lucide-react"

interface CallToActionProps {
  isVisible: boolean
}

export const CallToAction: React.FC<CallToActionProps> = ({ isVisible }) => {
  return (
    <div
      className={`text-center mt-20 sm:mt-28 transition-all duration-1000 delay-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } relative z-20 px-4`}
    >
      <div className="max-w-4xl mx-auto relative">
        
        {/* --- Background Box Offset (Pink) --- */}
        <div className="absolute inset-0 bg-[#f37c7c] border-[3px] border-[#0a2f1f] rounded-[2rem] sm:rounded-[3rem] transform rotate-2 translate-x-3 translate-y-3 z-0"></div>

        {/* --- Main Content Box (Putih) --- */}
        <div className="bg-white border-[3px] border-[#0a2f1f] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 relative z-10 shadow-sm overflow-hidden">
          
          {/* Aksen Selotip Kuning */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-7 bg-[#fbef7d] border-[2.5px] border-[#0a2f1f] rounded-md shadow-sm z-30 transform -rotate-1"></div>

          {/* Ornamen Bunga ✿ di Pojok Kiri Atas */}
          <div className="absolute top-6 left-6 text-2xl sm:text-4xl text-[#0a2f1f] transform -rotate-12 hidden sm:block">
            ✿
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a2f1f] mb-4 uppercase tracking-tighter leading-none relative z-10">
            Want to <span className="font-serif italic font-medium text-emerald-600 normal-case">See More?</span>
          </h3>
          
          <p className="text-[#0a2f1f]/70 font-medium mb-10 max-w-xl mx-auto text-sm sm:text-base leading-relaxed relative z-10">
            Explore our full collection of moments and discover the beauty of our community&apos;s journey in protecting the earth. 🌱
          </p>

          {/* Tombol Brutalist - Lime Pop */}
          <button className="group relative bg-[#d6fc71] text-[#0a2f1f] border-[3px] border-[#0a2f1f] px-8 sm:px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm shadow-[6px_6px_0_0_#0a2f1f] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200 flex items-center gap-3 mx-auto z-10">
            <Sparkles size={18} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
            Browse All Images
          </button>

          {/* Watermark Background Samar */}
          <div className="absolute -bottom-6 -right-4 text-[8rem] sm:text-[12rem] text-[#0a2f1f]/5 font-black pointer-events-none select-none z-0 transform rotate-6">
            MORE
          </div>

        </div>

        {/* Bintang ✦ Melayang di Luar Box */}
        <div className="absolute -top-8 -right-4 sm:-right-10 text-4xl sm:text-6xl text-[#fbef7d] drop-shadow-[2px_2px_0_#0a2f1f] transform rotate-12 hidden md:block">
          ✦
        </div>
      </div>
    </div>
  )
}