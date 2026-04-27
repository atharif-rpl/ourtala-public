// /components/recruitment/PositionCard.tsx

import { ArrowRight, Briefcase } from "lucide-react";
import Image from "next/image";
import { RecruitmentData } from "./types";

interface PositionCardProps {
  position: RecruitmentData;
  onSelect: () => void;
}

export function PositionCard({ position, onSelect }: PositionCardProps) {
  return (
    <button
      onClick={onSelect}
      // Hover effect: Kartu naik dan bayangan menebal
      className="group text-left w-full transition-all duration-300 hover:-translate-y-2 active:translate-y-1 focus:outline-none"
    >
      {/* Container Utama - Soft Brutalism */}
      <div className="bg-white rounded-[2rem] overflow-hidden shadow-[6px_6px_0_0_#0a2f1f] group-hover:shadow-[8px_8px_0_0_#0a2f1f] group-active:shadow-none transition-all duration-300 border-[3px] border-[#0a2f1f] h-full flex flex-col relative">
        
        {/* Image Container */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#c2f298] border-b-[3px] border-[#0a2f1f]">
          {position.imageUrl ? (
            <Image
              src={position.imageUrl}
              alt={position.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" // Efek B&W ke Color
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Fallback dengan gaya pop-art
            <div className="w-full h-full flex flex-col items-center justify-center text-[#0a2f1f]/30 bg-[radial-gradient(#c6d8c4_2px,transparent_2px)] [background-size:16px_16px]">
               <Briefcase size={64} strokeWidth={1.5} />
               <span className="font-black mt-2 tracking-widest text-sm uppercase">No Image</span>
            </div>
          )}

          {/* Badge Type - Style Stiker Miring */}
          <div className="absolute top-4 left-4 z-10 transform -rotate-3">
            <span className="bg-[#fbef7d] text-[#0a2f1f] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-[2px] border-[#0a2f1f] shadow-[2px_2px_0_0_#0a2f1f]">
              {position.type}
            </span>
          </div>

          {/* Hover Overlay - Soft Brutalism (Teks gede di tengah) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#0a2f1f]/40 backdrop-blur-sm transition-opacity duration-300 z-20">
            <div className="bg-[#d6fc71] text-[#0a2f1f] border-[3px] border-[#0a2f1f] px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 transform rotate-2 shadow-[4px_4px_0_0_#0a2f1f]">
              Lamar <ArrowRight size={18} strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col bg-[#f6f9f0]">
          
          <div className="flex items-start justify-between mb-2">
             <p className="text-emerald-700 text-xs font-black uppercase tracking-widest bg-emerald-100 px-2 py-0.5 rounded-md border-[1.5px] border-emerald-700/50">
               {position.division}
             </p>
             {/* Ikon pemanis dekoratif */}
             <span className="text-xl text-[#0a2f1f] font-black">✦</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#0a2f1f] mb-3 leading-tight line-clamp-2">
            {position.title}
          </h3>
          
          <p className="text-[#0a2f1f]/80 text-sm font-medium leading-relaxed mb-6 flex-1 line-clamp-3">
            {position.shortDesc}
          </p>

          <div className="pt-4 border-t-[2px] border-dashed border-[#0a2f1f]/20 flex items-center justify-between mt-auto">
            <span className="text-[#0a2f1f]/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
               Lihat Kualifikasi <ArrowRight size={12} strokeWidth={3} />
            </span>
            <div className="w-2 h-2 rounded-full bg-[#f37c7c] border border-[#0a2f1f]"></div>
          </div>
        </div>
      </div>
    </button>
  );
}