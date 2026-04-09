// /components/recruitment/PositionCard.tsx

import { ArrowRight, Briefcase } from "lucide-react";
import Image from "next/image"; // Pakai Image dari Next.js
import { RecruitmentData } from "./types"; // Pastikan path ini sesuai dengan file types kamu

interface PositionCardProps {
  position: RecruitmentData;
  onSelect: () => void;
}

export function PositionCard({ position, onSelect }: PositionCardProps) {
  return (
    <button
      onClick={onSelect}
      className="group text-left w-full transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
        
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          {position.imageUrl ? (
            <Image
              src={position.imageUrl}
              alt={position.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Fallback kalau gambar kosong (Biar UI gak rusak)
            <div className="w-full h-full flex items-center justify-center text-slate-300">
               <Briefcase size={48} />
            </div>
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Badge Type */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {position.type}
            </span>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="text-white font-bold text-lg flex items-center gap-2 justify-center drop-shadow-md">
              Lihat Detail <ArrowRight size={20} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-emerald-600 text-sm font-bold uppercase tracking-wide mb-2">
            {position.division}
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2">
            {position.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {position.shortDesc}
          </p>
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-auto">
            <span className="text-slate-400 text-xs">Klik untuk detail</span>
          </div>
        </div>
      </div>
    </button>
  );
}