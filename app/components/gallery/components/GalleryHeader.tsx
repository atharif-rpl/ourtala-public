"use client"

import React from 'react'

interface GalleryHeaderProps {
  isVisible: boolean
}

export const GalleryHeader: React.FC<GalleryHeaderProps> = ({ isVisible }) => {
  return (
    <div
      className={`text-center mb-16 sm:mb-20 relative pt-12 sm:pt-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } font-sans px-4`}
    >
      
      {/* 1. BACKGROUND WATERMARK (Faded & Tight) */}
      
      {/* 2. THE TAPE (Aksen Selotip Atas) */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center z-0">
        <div className="w-20 sm:w-28 h-7 bg-[#fbef7d] border-[3px] border-[#0a2f1f] rounded-sm transform rotate-1 shadow-sm"></div>
        <div className="w-24 sm:w-32 h-8 bg-[#d6fc71] border-[3px] border-[#0a2f1f] rounded-full -mt-4 transform -rotate-2 flex items-center justify-center shadow-[3px_3px_0_0_#0a2f1f]">
           <div className="flex items-center gap-1.5 px-3">
              <span className="w-2 h-2 rounded-full bg-[#f37c7c] border border-[#0a2f1f] animate-pulse"></span>
              <span className="text-[#0a2f1f] font-black text-[9px] uppercase tracking-widest">Collection 2026</span>
           </div>
        </div>
      </div>
      
      {/* =========================================
          3. MAIN TYPOGRAPHY (COMPACT LAYOUT)
          ========================================= */}
      <div className="relative z-10 mt-14 sm:mt-16">
        <h2 className="flex flex-col items-center">
          {/* Baris 1: Sans Black */}
          <span className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] font-black text-[#0a2f1f] leading-[0.8] uppercase tracking-tighter">
            Stories In
          </span>
          
          {/* Baris 2: Serif Italic + Sparkle */}
          <span className="relative font-serif italic font-medium text-emerald-600 text-[3.8rem] sm:text-[5.5rem] md:text-[7rem] leading-[0.9] -mt-1 sm:-mt-2">
            Pictures.
            {/* Sparkle Icon - Posisi presisi agar tidak niban teks utama */}
            <span className="absolute -top-1 -right-8 sm:-right-12 text-3xl sm:text-5xl text-[#fbef7d] drop-shadow-[2px_2px_0_#0a2f1f] transform rotate-12 font-sans animate-bounce inline-block">
              ✦
            </span>
          </span>
        </h2>
      </div>
      
      {/* =========================================
          4. THE MEMO BOX (MATCHING RECRUITMENT STYLE)
          ========================================= */}
      <div className="relative z-10 max-w-3xl mx-auto mt-8 sm:mt-10">
        <div className="bg-white border-[3.5px] border-[#0a2f1f] p-6 sm:p-8 md:px-12 md:py-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[8px_8px_0_0_#0a2f1f] relative group transition-transform hover:-translate-y-1">
          
          {/* Peniti / Marker Accent Kiri Atas */}
          <div className="absolute top-5 left-6 w-8 h-2.5 bg-[#c2f298] border-[2px] border-[#0a2f1f] rounded-full transform -rotate-12"></div>
          
          <p className="text-sm sm:text-base md:text-lg text-[#0a2f1f]/80 font-bold leading-relaxed relative z-10">
            "Explore the journey of our community as we transform spaces, 
            educate minds, and grow together towards a <span className="text-[#0a2f1f] font-black uppercase border-b-4 border-[#fbef7d]">sustainable future.</span>" 🌱
          </p>

          {/* Sticker Bunga Kanan Bawah */}
          <div className="absolute -bottom-4 -right-2 text-3xl sm:text-4xl text-[#f37c7c] transform rotate-12 drop-shadow-[2px_2px_0_#0a2f1f]">
            ✿
          </div>
        </div>
      </div>

    </div>
  )
}