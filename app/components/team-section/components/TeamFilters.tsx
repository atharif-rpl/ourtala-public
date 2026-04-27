"use client"

import React from 'react'

interface TeamFiltersProps {
  divisions: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function TeamFilters({ divisions, activeFilter, setActiveFilter }: TeamFiltersProps) {
  return (
    // 1. Tambah pt-4 dan pb-10 biar efek hover dan shadow nggak kepotong (vertical clipping)
    // 2. w-full dan overflow-x-auto tetep buat scroll horizontal
    <div className="w-full overflow-x-auto scrollbar-hide pt-4 pb-10 mb-8 relative z-20">
      
      {/* 3. Pakai w-max biar lebarnya ngikutin konten, dan px-4 buat padding kiri-kanan */}
      <div className="flex flex-nowrap items-center justify-start md:justify-center gap-4 sm:gap-6 w-max min-w-full px-4 md:px-0 mx-auto">
        
        {divisions.map((division, idx) => {
          const isActive = activeFilter === division;
          
          return (
            <button
              key={division}
              onClick={() => setActiveFilter(division)}
              className={`
                group relative px-6 py-2.5 md:px-8 md:py-3.5 
                rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs 
                transition-all duration-200 border-[3px] border-[#0a2f1f] 
                flex items-center justify-center whitespace-nowrap flex-shrink-0
                ${isActive
                  ? "bg-[#d6fc71] text-[#0a2f1f] shadow-[4px_4px_0_0_#0a2f1f] -translate-y-1"
                  : "bg-white text-[#0a2f1f] shadow-[3px_3px_0_0_#0a2f1f] hover:bg-[#fbef7d] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#0a2f1f]"
                }
              `}
              style={{ 
                transform: isActive 
                  ? 'translateY(-4px) rotate(0deg)' 
                  : `rotate(${idx % 2 === 0 ? '2' : '-2'}deg)` 
              }}
            >
              {isActive && (
                <span className="absolute left-3 w-2.5 h-2.5 rounded-full bg-[#f37c7c] border-[1.5px] border-[#0a2f1f] animate-pulse shadow-sm"></span>
              )}
              
              <span className={isActive ? "ml-4" : ""}>
                {division}
              </span>

              <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#0a2f1f]">
                ✦
              </span>
            </button>
          );
        })}

        {/* 4. THE SPACER TRICK: Elemen kosong di akhir buat nahan ruang biar tombol terakhir gak nempel/kepotong di layar HP */}
        <div className="w-1 h-1 flex-shrink-0 md:hidden"></div>

      </div>
    </div>
  );
}