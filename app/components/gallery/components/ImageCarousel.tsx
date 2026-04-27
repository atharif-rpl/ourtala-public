import React from 'react'
import Image from "next/image"
import { CarouselProps } from '../types' 

export const ImageCarousel: React.FC<CarouselProps> = ({
  items,
  currentIndex,
  onNext,
  onPrev,
  onSelectImage,
  onIndexChange
}) => {
  const currentItem = items[currentIndex]

  if (items.length === 0) {
    return (
      <div className="text-center font-black text-[#0a2f1f]/50 text-xl py-10 w-full uppercase tracking-widest border-[3px] border-dashed border-[#0a2f1f]/20 rounded-2xl">
        Kliping Kosong
      </div>
    )
  }

  if (!currentItem) return null

  return (
    // FIX 1: Hapus Grid, ganti jadi flex-center buat mastiin posisinya beneran di tengah layar
    <div className="relative flex justify-center items-center max-w-7xl mx-auto w-full px-4 font-sans py-10">
      
      {/* =========================================
          MASKOT (DNA: Absolute Peeking)
          ========================================= */}
      {/* FIX 2: Maskot sekarang absolute, nempel di sisi kiri frame carousel, nggak ngerusak layout tengah */}
      <div className="absolute -left-2 sm:-left-8 top-[83%] -translate-y-1/2 z-40 hidden md:block">
        <Image
          src="/images/mascot/mascotpohon.webp"
          alt="Mascot explaining gallery"
          width={180}
          height={180}
          className="object-contain drop-shadow-[4px_6px_0_rgba(10,47,31,0.2)] hover:scale-110 hover:-rotate-6 transition-transform duration-300 origin-bottom"
        />
      </div>

      {/* =========================================
          CAROUSEL CONTAINER (DNA: The View-Master Box)
          ========================================= */}
      <div className="relative bg-white border-[4px] border-[#0a2f1f] rounded-[2rem] p-4 sm:p-6 shadow-[12px_12px_0_0_#0a2f1f] max-w-7xl mx-auto w-full transform -rotate-1">
        
        <div className="relative w-full h-[400px] md:h-[650px] border-[3px] border-[#0a2f1f] rounded-[1rem] overflow-hidden bg-gray-100">
          
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div key={item.id} className="w-full flex-shrink-0 relative h-full group">
                  {/* Efek dramatis: Foto grayscale saat geser, full color saat aktif & dihover */}
                  <div className={`w-full h-full transition-all duration-700 ${isActive ? 'grayscale hover:grayscale-0' : 'grayscale'}`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  
                
                 
                  
                  {/* =========================================
                      KONTEN TEKS (DNA: Sticker & Editorial)
                      ========================================= */}
                  <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">
                    {/* Label Kategori ala Selotip */}
                    <span className="inline-block bg-[#fbef7d] border-[2px] border-[#0a2f1f] text-[#0a2f1f] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[3px_3px_0_0_#0a2f1f] mb-4 transform -rotate-2">
                      {item.category}
                    </span>
                    
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-2 leading-[1.1] uppercase tracking-tighter drop-shadow-md">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/80 font-bold text-xs sm:text-sm md:text-base mb-4 line-clamp-2 italic leading-relaxed max-w-2xl">
                      "{item.description}"
                    </p>
                    
                    {/* Tombol Detail Brutalist */}
                    <button
                      onClick={() => onSelectImage(item)}
                      className="inline-flex items-center gap-2 bg-[#d6fc71] border-[2.5px] border-[#0a2f1f] text-[#0a2f1f] px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-[4px_4px_0_0_#0a2f1f] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all"
                    >
                      Buka Album
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* =========================================
              TOMBOL NAVIGASI (DNA: Floating Pills)
              ========================================= */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-[3px] border-[#0a2f1f] text-[#0a2f1f] w-12 h-12 rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#0a2f1f] hover:bg-[#d6fc71] active:translate-y-1 active:shadow-none transition-all z-30 group"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-[3px] border-[#0a2f1f] text-[#0a2f1f] w-12 h-12 rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#0a2f1f] hover:bg-[#d6fc71] active:translate-y-1 active:shadow-none transition-all z-30 group"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* =========================================
            INDIKATOR TITIK (DNA: Stitched Holes)
            ========================================= */}
        <div className="flex justify-center items-center space-x-3 mt-6">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onIndexChange(idx)}
              className={`h-3 rounded-full border-[2px] border-[#0a2f1f] transition-all duration-300 ${
                idx === currentIndex ? "bg-[#0a2f1f] w-8" : "bg-white hover:bg-gray-300 w-3"
              }`}
            />
          ))}
        </div>
      </div>
      
    </div>
  )
}