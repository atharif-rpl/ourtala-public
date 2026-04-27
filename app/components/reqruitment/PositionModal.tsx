"use client"

import Image from "next/image"
import { X, Zap, Target, Award, Users, Briefcase } from "lucide-react"
import { RecruitmentData } from "./types"

interface PositionModalProps {
  position: RecruitmentData
  onClose: () => void
}

export function PositionModal({ position, onClose }: PositionModalProps) {
  return (
    <div
      className="fixed inset-0 bg-[#0a2f1f]/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300 font-sans"
      onClick={onClose} // Klik di luar modal -> tutup
    >
      <div
        className="relative bg-[#f6f9f0] border-[4px] border-[#0a2f1f] rounded-[2rem] max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-[12px_12px_0_0_rgba(10,47,31,0.5)] animate-in zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()} // Hentikan klik di dalam modal
      >
        {/* Aksen Selotip di atas modal */}
        <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-24 h-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] border-t-0 rounded-b-md shadow-sm z-50 transform rotate-1"></div>

        {/* Modal Header - Gambar / Banner */}
        <div className="relative h-56 sm:h-64 shrink-0 overflow-hidden bg-[#c2f298] border-b-[4px] border-[#0a2f1f]">
          {position.imageUrl ? (
            <Image 
              src={position.imageUrl} 
              alt={position.title} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          ) : (
            // Fallback dengan gaya pop-art dot pattern
            <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(#c6d8c4_3px,transparent_3px)] [background-size:24px_24px]">
               <Briefcase className="w-20 h-20 text-[#0a2f1f]/20" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2f1f]/90 via-[#0a2f1f]/40 to-transparent" />
          
          {/* Tombol Close Pop-art */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#f37c7c] border-[3px] border-[#0a2f1f] w-10 h-10 rounded-full flex items-center justify-center text-[#0a2f1f] hover:bg-white transition-colors shadow-[2px_2px_0_0_#0a2f1f] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none z-40"
          >
            <X size={20} strokeWidth={3} />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-30">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#fbef7d] text-[#0a2f1f] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-[2px] border-[#0a2f1f] shadow-[2px_2px_0_0_#0a2f1f] transform -rotate-2 inline-block">
                {position.type}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 leading-tight drop-shadow-md">{position.title}</h2>
            <p className="text-[#d6fc71] text-sm sm:text-base font-bold tracking-widest uppercase">{position.division}</p>
          </div>
        </div>

        {/* Modal Content - Scrollable Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 bg-white">
          
          {/* Description */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0a2f1f] mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#fbef7d] border-[2px] border-[#0a2f1f] flex items-center justify-center transform -rotate-3">
                 <Zap className="text-[#0a2f1f]" size={16} strokeWidth={3} />
              </div>
              Tentang Posisi Ini
            </h3>
            <p className="text-[#0a2f1f]/80 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium border-l-[3px] border-[#fbef7d] pl-4">
              {position.fullDescription}
            </p>
          </div>

          {/* Responsibilities */}
          {position.responsibilities.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0a2f1f] mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#c2f298] border-[2px] border-[#0a2f1f] flex items-center justify-center transform rotate-3">
                   <Target className="text-[#0a2f1f]" size={16} strokeWidth={3} />
                </div>
                Tanggung Jawab
              </h3>
              <ul className="space-y-3">
                {position.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-[#0a2f1f]/80 text-sm sm:text-base font-medium">
                    <span className="text-[#0a2f1f] font-black flex-shrink-0 mt-0.5">➔</span> <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {position.requirements.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0a2f1f] mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f37c7c] border-[2px] border-[#0a2f1f] flex items-center justify-center transform -rotate-3">
                   <Award className="text-[#0a2f1f]" size={16} strokeWidth={3} />
                </div>
                Persyaratan
              </h3>
              <ul className="space-y-3">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-[#0a2f1f]/80 text-sm sm:text-base font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#f37c7c] border-[1.5px] border-[#0a2f1f] flex items-center justify-center flex-shrink-0 mt-0.5">
                       <span className="text-[#0a2f1f] font-black text-[10px]">✓</span>
                    </span> 
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {position.benefits.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0a2f1f] mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#a5f3d5] border-[2px] border-[#0a2f1f] flex items-center justify-center transform rotate-3">
                   <Users className="text-[#0a2f1f]" size={16} strokeWidth={3} />
                </div>
                Benefit
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {position.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-[2px] border-[#0a2f1f] rounded-xl p-3 text-[#0a2f1f] text-sm font-bold flex items-center gap-2 shadow-[2px_2px_0_0_#0a2f1f] transform hover:-translate-y-1 transition-transform"
                  >
                    <span className="text-emerald-500 text-lg">✦</span> {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Apply & Close Button - Soft Brutalism Style */}
          <div className="pt-8 border-t-[3px] border-dashed border-[#0a2f1f]/20 flex flex-col sm:flex-row gap-4 sm:gap-6 mt-auto">
            <button
              className="flex-1 bg-[#d6fc71] border-[3px] border-[#0a2f1f] text-[#0a2f1f] py-3.5 sm:py-4 px-6 font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0_0_#0a2f1f] hover:bg-white hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200"
              onClick={() => window.open(position.linkApply, "_blank")}
            >
              Lamar Sekarang
            </button>
            <button
              className="sm:w-1/3 bg-white border-[3px] border-[#0a2f1f] text-[#0a2f1f] py-3.5 sm:py-4 px-6 font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0_0_#0a2f1f] hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200"
              onClick={onClose}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}