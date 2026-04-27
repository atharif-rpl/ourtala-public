"use client"

import { Sparkles, Send } from "lucide-react"

export default function TeamCTA() {
  return (
    <div className="text-center mt-20 md:mt-28 mb-12 relative z-20 max-w-5xl mx-auto px-4 sm:px-6 font-sans">
      
      {/* Wrapper untuk Efek Stacked (Tumpukan) */}
      <div className="relative">
        
        {/* Background Pink Offset (Kotak Belakang) */}
        <div className="absolute inset-0 bg-[#f37c7c] border-[3px] border-[#0a2f1f] rounded-[2.5rem] sm:rounded-[3.5rem] transform rotate-2 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 z-0"></div>

        {/* Main CTA Box (Kotak Putih Depan) */}
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-14 md:p-20 border-[3.5px] border-[#0a2f1f] relative z-10 flex flex-col items-center shadow-sm overflow-hidden">

          {/* Aksen Selotip Kuning di Atas */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] rounded-md shadow-[3px_3px_0_0_#0a2f1f] z-30 transform -rotate-1"></div>

          {/* Stiker "Join Us!" Pojok Kanan Atas */}
          <div className="absolute top-10 right-4 sm:right-12 transform rotate-12 z-20 hidden sm:block">
            <div className="bg-[#d6fc71] text-[#0a2f1f] text-[10px] sm:text-xs font-black px-4 py-2 rounded-full border-[2.5px] border-[#0a2f1f] shadow-[3px_3px_0_0_#0a2f1f] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0a2f1f] animate-pulse"></span>
              Join Our Team!
            </div>
          </div>

          {/* Ikon Bunga Dekoratif Pojok Kiri Atas */}
          <div className="absolute top-10 left-10 text-4xl text-[#0a2f1f] font-black hidden md:block transform -rotate-12">
            ✿
          </div>

          {/* Konten Teks */}
          <h3 className="text-[2.5rem] sm:text-5xl md:text-[4rem] font-black text-[#0a2f1f] mb-6 uppercase tracking-tighter leading-[0.95] mt-6 sm:mt-0 relative z-10">
            Want to Join <br className="hidden sm:block" /> 
            <span className="font-serif italic font-medium text-emerald-600 normal-case">Our Mission?</span>
          </h3>

          <p className="text-[#0a2f1f]/80 font-medium mb-12 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed relative z-10">
            Kami selalu mencari individu bersemangat yang memiliki visi yang sama untuk menciptakan komunitas berkelanjutan. <strong className="text-[#0a2f1f] font-black">Mari buat perubahan bersama!</strong> 🌍✨
          </p>

          {/* Grup Tombol - Soft Brutalism Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center w-full sm:w-auto relative z-10">
            
            {/* Tombol Primary (Lime Green) */}
            <button
              onClick={() => window.open("https://forms.gle/rJ9StWT2qgC3Lsv9A", "_blank")}
              className="group bg-[#d6fc71] text-[#0a2f1f] border-[3.5px] border-[#0a2f1f] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm shadow-[6px_6px_0_0_#0a2f1f] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Sparkles size={20} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
              View Open Positions
            </button>

            {/* Tombol Secondary (White -> Yellow) */}
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282110627537&text=Halo%21+Saya+tertarik+dengan+layanan+Anda.&type=phone_number&app_absent=0", "_blank")}
              className="group bg-white text-[#0a2f1f] border-[3.5px] border-[#0a2f1f] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm shadow-[6px_6px_0_0_#0a2f1f] hover:bg-[#fbef7d] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Send size={20} strokeWidth={3} className="group-hover:-rotate-12 transition-transform" />
              Contact Us
            </button>
            
          </div>

          {/* Watermark Background Samar di dalam Kotak */}
          <div className="absolute -bottom-10 -right-4 text-[10rem] sm:text-[14rem] text-[#0a2f1f]/5 font-black pointer-events-none select-none z-0 transform rotate-12">
            TEAM
          </div>
          
          <div className="absolute -top-10 -left-10 text-[8rem] text-[#0a2f1f]/5 font-black pointer-events-none select-none z-0 transform -rotate-12">
            FUTURE
          </div>

        </div>

        {/* Bintang ✦ Melayang di Luar Box */}
        <div className="absolute -bottom-6 -left-8 text-5xl sm:text-7xl text-[#fbef7d] drop-shadow-[3px_3px_0_#0a2f1f] transform -rotate-12 hidden md:block">
          ✦
        </div>
      </div>
    </div>
  )
}