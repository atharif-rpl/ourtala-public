"use client"

import { Sparkles, Send } from "lucide-react"

export function RecruitmentCta() {
  return (
    <div className="text-center mt-16 md:mt-24 mb-10 relative z-20 max-w-5xl mx-auto px-4 sm:px-6 font-sans">
      
      {/* Wrapper untuk Efek Tumpuk (Stacked) */}
      <div className="relative">
        
        {/* Background Hijau Offset (Kotak Belakang) */}
        <div className="absolute inset-0 bg-[#c2f298] border-[3px] border-[#0a2f1f] rounded-[2rem] sm:rounded-[3rem] transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 z-0"></div>

        {/* Main CTA Box (Kotak Putih Depan) */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 border-[3px] border-[#0a2f1f] relative z-10 flex flex-col items-center shadow-sm overflow-hidden">

          {/* Aksen Selotip Pink di Atas */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 bg-[#f37c7c] border-[2.5px] border-[#0a2f1f] rounded-md shadow-[2px_2px_0_0_#0a2f1f] z-30 transform rotate-2"></div>

          {/* Stiker "We're Hiring!" */}
          <div className="absolute top-6 sm:top-10 left-4 sm:left-10 transform -rotate-6 z-20">
            <span className="bg-[#fbef7d] text-[#0a2f1f] text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full border-[2px] border-[#0a2f1f] shadow-[2px_2px_0_0_#0a2f1f] uppercase tracking-widest inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f37c7c] animate-pulse border border-[#0a2f1f]"></span>
              We're Hiring!
            </span>
          </div>

          {/* Ikon Bintang Dekoratif */}
          <div className="absolute top-12 right-12 text-3xl text-[#0a2f1f] font-black hidden md:block">
            ✦
          </div>

          {/* Konten Teks */}
          <h3 className="text-3xl sm:text-4xl md:text-[3.5rem] font-black text-[#0a2f1f] mb-4 uppercase tracking-tighter leading-[1.1] mt-8 sm:mt-0 relative z-10">
            Want to Join <br className="hidden sm:block" /> Our Mission?
          </h3>

          <p className="text-[#0a2f1f]/80 font-medium mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed relative z-10">
            We're always looking for passionate individuals who share our vision of creating sustainable communities. Join us in making a difference for our earth! 🌱
          </p>

          {/* Grup Tombol */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto relative z-10">
            
            {/* Tombol Primary (Lime) */}
            <button
              onClick={() => window.open("https://forms.gle/rJ9StWT2qgC3Lsv9A", "_blank")}
              className="group bg-[#d6fc71] text-[#0a2f1f] border-[3px] border-[#0a2f1f] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm shadow-[4px_4px_0_0_#0a2f1f] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles size={18} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
              View Open Positions
            </button>

            {/* Tombol Secondary (Putih -> Kuning) */}
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282110627537&text=Halo%21+Saya+tertarik+dengan+layanan+Anda.&type=phone_number&app_absent=0", "_blank")}
              className="group bg-white text-[#0a2f1f] border-[3px] border-[#0a2f1f] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm shadow-[4px_4px_0_0_#0a2f1f] hover:bg-[#fbef7d] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send size={18} strokeWidth={3} className="group-hover:-rotate-12 transition-transform" />
              Contact Us
            </button>
            
          </div>

          {/* Watermark Background Samar di dalam Kotak */}
          <div className="absolute -bottom-8 -left-2 text-[7rem] sm:text-[10rem] text-[#0a2f1f]/5 font-black pointer-events-none select-none z-0 transform -rotate-3">
            JOIN
          </div>
          
          <div className="absolute top-10 -right-8 text-[8rem] text-[#0a2f1f]/5 font-black pointer-events-none select-none z-0 transform rotate-12">
            US
          </div>

        </div>
      </div>
    </div>
  )
}