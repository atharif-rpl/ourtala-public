"use client"

import React from 'react'
import { CategoryFilterProps } from '../types'

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  isVisible
}) => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } relative z-20`}
    >
      {categories.map((cat, idx) => {
        const isActive = selectedCategory === cat;
        
        return (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            // Style Soft Brutalism: Border tebal, font black, shadow solid
            className={`group relative px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-200 border-[3px] border-[#0a2f1f] flex items-center justify-center ${
              isActive
                ? "bg-[#d6fc71] text-[#0a2f1f] shadow-[4px_4px_0_0_#0a2f1f] -translate-y-1"
                : "bg-white text-[#0a2f1f] shadow-[2px_2px_0_0_#0a2f1f] hover:bg-[#fbef7d] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#0a2f1f]"
            }`}
            style={{ 
              // Kasih rotasi selang-seling biar kayak stiker nempel manual
              transform: isActive 
                ? 'translateY(-4px) rotate(0deg)' 
                : `rotate(${idx % 2 === 0 ? '2' : '-2'}deg)` 
            }}
          >
            {/* Indikator Pin Merah (Cuma muncul pas Aktif) */}
            {isActive && (
              <span className="absolute left-3 w-2 h-2 rounded-full bg-[#f37c7c] border-[1.5px] border-[#0a2f1f] animate-pulse"></span>
            )}
            
            <span className={isActive ? "ml-4" : ""}>
              {cat}
            </span>

            {/* Efek kilauan kecil pas hover (opsional) */}
            <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">
              ✦
            </span>
          </button>
        );
      })}
    </div>
  )
}