"use client"

import React, { useEffect, useState } from 'react'

export default function TeamBackground() {
  const [scrollY, setScrollY] = useState(0)

  // Track scroll buat efek Parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Kalkulasi pergeseran (makin kecil pengalinya, makin pelan geraknya)
  const yOffset = scrollY * 0.15

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      
      {/* 1. TEXTURE DNA (Dot Pattern) - Tetap Statis */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* =========================================
          2. FADED WATERMARKS (DNA: Parallax Scroll)
          ========================================= */}
      <div 
        className="absolute top-[15%] left-[-5%] text-[15vw] font-black text-[#0a2f1f]/5 tracking-tighter transform -rotate-6 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${yOffset}px) rotate(-6deg)` }}
      >
        PEOPLE
      </div>
      <div 
        className="absolute bottom-[10%] right-[-5%] text-[12vw] font-black text-[#0a2f1f]/5 tracking-tighter transform rotate-3 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${yOffset * 1.5}px) rotate(3deg)` }}
      >
        OURTALA
      </div>

      {/* =========================================
          3. SCATTERED ORNAMENTS (DNA: Floating & Spinning)
          ========================================= */}
      
      {/* Bintang Hijau di Kiri Atas (Ikut turun pas scroll) */}
      <div 
        className="absolute top-[20%] left-[10%] text-6xl text-[#d6fc71]/30 animate-pulse transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${yOffset * 0.8}px) rotate(12deg)` }}
      >
        ✦
      </div>

      {/* Bunga Pink di Kanan Tengah (Ikut naik pas scroll) */}
      <div 
        className="absolute top-[45%] right-[5%] text-8xl text-[#f37c7c]/20 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${yOffset * 0.5}px) rotate(-12deg)` }}
      >
        ✿
      </div>

      {/* Bintang Kuning di Kiri Bawah */}
      <div 
        className="absolute bottom-[20%] left-[5%] text-7xl text-[#fbef7d]/30 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${yOffset * 0.9}px) rotate(45deg)` }}
      >
        ✦
      </div>

      {/* Elemen Garis Brutalist (Lingkaran Putus-putus) - Tetap Muter */}
      <div 
        className="absolute top-[10%] right-[15%] w-32 h-32 border-[4px] border-[#0a2f1f]/10 rounded-full border-dashed animate-spin-slow transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${yOffset}px)` }}
      ></div>
      
      {/* Kotak Miring (Aksen Kertas Melayang) */}
      <div 
        className="absolute bottom-[30%] right-[20%] w-24 h-24 border-[3px] border-[#0a2f1f]/10 rounded-2xl transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${yOffset * 0.4}px) rotate(12deg)` }}
      ></div>

      {/* 4. TAPE ACCENT (Aksen Selotip Melayang) */}
      <div 
        className="absolute top-[40%] left-[-20px] w-40 h-10 bg-[#fbef7d]/10 border-[2px] border-[#0a2f1f]/10 rounded-sm transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${yOffset * 0.6}px) rotate(45deg)` }}
      ></div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}