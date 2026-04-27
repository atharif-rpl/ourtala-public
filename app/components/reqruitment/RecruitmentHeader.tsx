"use client"

export function RecruitmentHeader() {
  return (
    <div className="text-center mb-16 sm:mb-24 relative pt-8 sm:pt-12 font-sans px-4">
      
      {/* Aksen Selotip Kuning di Atas Tengah */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] rounded-md shadow-[2px_2px_0_0_#0a2f1f] z-0 transform rotate-2"></div>

      {/* Label "Open Recruitment" - Stiker Miring */}
      <div className="relative z-10 inline-block mb-6">
        <span className="inline-flex items-center gap-2 bg-[#d6fc71] text-[#0a2f1f] px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-black tracking-widest uppercase border-[3px] border-[#0a2f1f] shadow-[4px_4px_0_0_#0a2f1f] transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f37c7c] border-[1.5px] border-[#0a2f1f] animate-pulse"></span>
          Open Recruitment
        </span>
      </div>
      
      {/* Judul Utama */}
      <h3 className="relative z-10 text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-black text-[#0a2f1f] mb-8 leading-[0.9] uppercase tracking-tighter">
        Join Our <br className="hidden sm:block" />
        <span className="font-serif italic font-medium text-emerald-600 normal-case relative inline-block">
          Mission.
          {/* Ornamen Bintang ✦ di ujung kata */}
          <span className="absolute -top-4 sm:-top-8 -right-8 sm:-right-12 text-3xl sm:text-5xl text-[#fbef7d] drop-shadow-[2px_2px_0_#0a2f1f] transform rotate-12 font-sans">
            ✦
          </span>
        </span>
      </h3>
      
      {/* Deskripsi - Masuk ke dalam Box Stiker */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="bg-white border-[3px] border-[#0a2f1f] p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-[6px_6px_0_0_#0a2f1f] transform rotate-1 hover:-translate-y-1 transition-transform inline-block w-full">
          
          {/* Garis / Pin Pemanis di dalam box */}
          <div className="absolute top-4 sm:top-5 left-4 sm:left-6 w-8 h-2.5 bg-[#c2f298] border-[2px] border-[#0a2f1f] rounded-full transform -rotate-6"></div>
          
          <p className="text-sm sm:text-base md:text-lg text-[#0a2f1f]/80 font-medium leading-relaxed mt-4 sm:mt-2">
            We’re looking for passionate people ready to drive real environmental impact. 
            If you’ve got the passion and skills, <strong className="text-[#0a2f1f] font-black">join us!</strong>
          </p>

          {/* Doodle Bunga ✿ di ujung box */}
          <div className="absolute -bottom-3 sm:-bottom-4 -right-2 sm:-right-4 text-2xl sm:text-3xl text-[#0a2f1f] font-black transform -rotate-12 bg-[#f6f9f0] rounded-full">
            ✿
          </div>

        </div>
      </div>

    </div>
  )
}