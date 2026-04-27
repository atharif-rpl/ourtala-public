"use client"

import React from 'react'

interface TeamHeaderProps {
  isVisible: boolean;
}

export default function TeamHeader({ isVisible }: TeamHeaderProps) {
  return (
    <div
      className={`text-center mb-16 sm:mb-24 relative pt-8 sm:pt-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } font-sans px-4`}
    >
      {/* Aksen Selotip Pink di Atas Tengah */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-8 bg-[#f37c7c] border-[3px] border-[#0a2f1f] rounded-md shadow-[2px_2px_0_0_#0a2f1f] z-0 transform rotate-2"></div>

      {/* Label "Our Team" - Stiker Kuning Miring */}
      <div className="relative z-10 inline-block mb-6">
        <span className="inline-flex items-center gap-2 bg-[#fbef7d] text-[#0a2f1f] px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase border-[3px] border-[#0a2f1f] shadow-[4px_4px_0_0_#0a2f1f] transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0a2f1f] border-[1.5px] border-white animate-pulse"></span>
          Our Team
        </span>
      </div>
      
      {/* Judul Utama */}
      <h2 className="relative z-10 text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] font-black text-[#0a2f1f] mb-8 leading-[0.9] uppercase tracking-tighter">
        Meet the <br className="hidden sm:block" />
        <span className="font-serif italic font-medium text-emerald-600 normal-case relative inline-block">
          Changemakers.
          {/* Ornamen Bintang ✦ */}
          <span className="absolute -top-4 sm:-top-8 -right-8 sm:-right-12 text-3xl sm:text-5xl text-[#d6fc71] drop-shadow-[2px_2px_0_#0a2f1f] transform rotate-12 font-sans">
            ✦
          </span>
        </span>
      </h2>
      
      {/* Deskripsi - Memo Box Style */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="bg-white border-[3px] border-[#0a2f1f] p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-[8px_8px_0_0_#0a2f1f] transform rotate-1 hover:-translate-y-1 transition-transform inline-block w-full">
          
          {/* Ornamen Peniti/Pin di pojok box */}
          <div className="absolute top-4 left-6 w-10 h-3 bg-[#c2f298] border-[2px] border-[#0a2f1f] rounded-full transform -rotate-12"></div>
          
          <p className="text-sm sm:text-base md:text-xl text-[#0a2f1f]/80 font-medium leading-relaxed mt-4 sm:mt-2">
            Diverse team of passionate individuals dedicated to creating a 
            <strong className="text-[#0a2f1f] font-black"> more sustainable and green future </strong> 
            for communities worldwide. 🌱
          </p>

          {/* Doodle Bunga ✿ */}
          <div className="absolute -bottom-4 -left-4 text-3xl sm:text-4xl text-[#f37c7c] transform rotate-12 drop-shadow-[2px_2px_0_#0a2f1f]">
            ✿
          </div>
        </div>
      </div>

    </div>
  );
}