"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Zap, Target, Award, Users, Briefcase } from "lucide-react"
import { RecruitmentData } from "./types"

interface PositionModalProps {
  position: RecruitmentData
  onClose: () => void
}

export function PositionModal({ position, onClose }: PositionModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
      onClick={onClose} // Klik di luar modal → tutup
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()} // Hentikan klik di dalam modal
      >
        {/* Modal Header - UI Sesuai Request */}
        <div className="relative h-64 shrink-0 overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600">
          {position.imageUrl ? (
            <Image 
              src={position.imageUrl} 
              alt={position.title} 
              fill 
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            // Fallback jika tidak ada gambar
            <div className="w-full h-full flex items-center justify-center bg-white/10">
               <Briefcase className="w-16 h-16 text-white/50" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors backdrop-blur-sm z-10"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-emerald-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full">
                {position.type}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{position.title}</h2>
            <p className="text-emerald-100 text-lg">{position.division}</p>
          </div>
        </div>

        {/* Modal Content - Scrollable Area */}
        <div className="overflow-y-auto p-8 space-y-8 flex-1">
          
          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="text-emerald-600" size={24} /> Tentang Posisi Ini
            </h3>
            <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line">
              {position.fullDescription}
            </p>
          </div>

          {/* Responsibilities */}
          {position.responsibilities.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="text-emerald-600" size={24} /> Tanggung Jawab Utama
              </h3>
              <ul className="space-y-3">
                {position.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700 text-base">
                    <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">→</span> <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {position.requirements.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="text-emerald-600" size={24} /> Persyaratan
              </h3>
              <ul className="space-y-3">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700 text-base">
                    <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">✓</span> <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {position.benefits.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="text-emerald-600" size={24} /> Benefit & Keuntungan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {position.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-slate-700 text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-emerald-600">★</span> {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Apply Button - UI Sesuai Request */}
          <div className="pt-6 border-t border-slate-200 flex gap-3 mt-auto">
            <Button
              size="lg"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-base font-bold rounded-lg"
              onClick={() => window.open(position.linkApply, "_blank")}
            >
              Apply
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 py-3 text-base font-bold rounded-lg bg-transparent"
              onClick={onClose}
            >
              close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}