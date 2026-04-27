"use client"

import { MapPin } from "lucide-react"

export default function MapLocation() {
  return (
    // FIX: Tambah pt-6 (atas), pr-3 (kanan), pb-4 (bawah) buat Safe Zone shadow & stiker
    <div className="relative font-sans pt-6 pr-3 pb-4 w-full">
      
      {/* 1. LABEL MAP (DNA: Sticker Headings) */}
      {/* FIX: Ubah dari -top-4 ke top-0 biar ga tembus batas atas */}
      <div className="absolute top-0 left-4 z-20 transform -rotate-2">
        <span className="bg-[#fbef7d] text-[#0a2f1f] border-[2.5px] border-[#0a2f1f] px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest shadow-[3px_3px_0_0_#0a2f1f] flex items-center gap-2">
          <MapPin size={12} strokeWidth={3} className="text-[#f37c7c]" />
          Basecamp
        </span>
      </div>

      {/* 2. MAP CONTAINER (DNA: Thick Border & Solid Shadow) */}
      <div className="relative bg-[#a5f3d5] p-2 border-[3.5px] border-[#0a2f1f] rounded-[1.5rem] shadow-[6px_6px_0_0_#0a2f1f] overflow-hidden transform rotate-1 transition-transform hover:rotate-0">
        
        {/* Frame Putih Dalem */}
        <div className="relative w-full h-[220px] bg-gray-200 border-[2.5px] border-[#0a2f1f] rounded-[1rem] overflow-hidden">
          
          {/* Efek Loading Grayscale/Saturate untuk Mapnya */}
          <div className="absolute inset-0 bg-[#0a2f1f]/10 pointer-events-none z-10 mix-blend-multiply"></div>
          
          {/* FIX: Pake link embed asli dari Google Maps */}
          <iframe
            src="https://maps.google.com/maps?q=Jakarta&t=&z=11&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Basecamp Ourtala"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* 3. ALAMAT (DNA: Memo Text) */}
      <div className="mt-6 flex justify-center">
        <p className="bg-white border-[2.5px] border-[#0a2f1f] px-5 py-2 rounded-full text-[11px] sm:text-xs font-black text-[#0a2f1f] uppercase tracking-widest shadow-[3px_3px_0_0_#0a2f1f] transform -rotate-1 text-center">
          Daerah Khusus Ibukota Jakarta 🇮🇩
        </p>
      </div>

    </div>
  )
}