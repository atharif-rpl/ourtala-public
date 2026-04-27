"use client"

import { useEffect, useState } from "react"

export default function AnimatedAboutRedesign() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    "/images/Galery/galeryabout.webp",
    "/images/Galery/galeryabout2.webp",
    "/images/Galery/galeryabout3.webp",
    "/images/Galery/galeryabout4.webp",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#f6f9f0] font-sans py-24 lg:py-0"
    >
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Faded Background Text */}
      <div className="absolute top-[10%] left-[-5%] text-[15vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform -rotate-3">
        EARTH
      </div>
      <div className="absolute bottom-[5%] right-[-5%] text-[15vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform rotate-3">
        ORIGIN
      </div>

      {/* FIX 1: max-w-[90rem] buat ngasih ruang lebih lebar di layar gede, biar gak numpuk di tengah */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-[90rem] h-full flex flex-col justify-center">
        
        {/* FIX 2: Proporsi grid dari 5:7 jadi 5:7 tapi dengan gap yang lebih lebar (gap-16) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
          
          {/* =========================================
              KOLOM KIRI: TEKS, DESKRIPSI & STATS
          ========================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 relative z-30 mt-8 lg:mt-0 lg:pl-10">
            
            <div className="relative">
              {/* Maskot Bunga / Daun */}
              <img 
                 src="/images/mascot/mascotbunga.webp" 
                 alt="Mascot Daun" 
                 className="absolute -top-12 -left-8 sm:-left-12 w-24 sm:w-28 transform -rotate-12 -z-10 drop-shadow-md hidden sm:block transition-transform hover:rotate-0"
              />

              {/* Tag Ourtala Genesis */}
              <div className="relative z-10 inline-flex items-center gap-2 bg-[#d6fc71] border-[3px] border-[#0a2f1f] px-4 py-2 rounded-full mb-6 shadow-[4px_4px_0_0_#0a2f1f] transform -rotate-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f37c7c] border border-[#0a2f1f] animate-pulse"></span>
                <span className="text-[#0a2f1f] font-black text-[10px] sm:text-xs tracking-widest uppercase">
                  Ourtala Genesis
                </span>
              </div>
              
              <h2 className="relative z-10 text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-black text-[#0a2f1f] leading-[0.9] uppercase tracking-tighter">
                Guardians <br />
                Of <span className="font-serif italic font-medium text-emerald-600 normal-case">Nature.</span>
              </h2>
            </div>

            {/* Kotak Deskripsi */}
            <div className="bg-white border-[3px] border-[#0a2f1f] p-6 sm:p-8 rounded-[2rem] shadow-[8px_8px_0_0_#0a2f1f] relative group">
              <div className="absolute top-4 left-4 w-8 h-2.5 bg-pink-200 border-[2px] border-[#0a2f1f] rounded-full transform -rotate-12"></div>
              
              <p className="text-[#0a2f1f]/80 font-bold text-sm sm:text-base leading-relaxed mt-4 relative z-10 italic">
                <strong className="text-[#0a2f1f] font-black not-italic">Ourtala</strong> (Our Earth) is a non-profit organization established in 2021. We aim to raise environmental awareness and promote sustainable lifestyles through real community actions.
              </p>
            </div>

            {/* Kotak Stats */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6 pt-2">
              <div className="bg-[#a5f3d5] border-[3px] border-[#0a2f1f] p-5 rounded-[1.5rem] shadow-[5px_5px_0_0_#0a2f1f] transform rotate-1 hover:rotate-0 transition-transform">
                <h4 className="text-4xl sm:text-5xl font-black text-[#0a2f1f] leading-none mb-1">30+</h4>
                <p className="text-[#0a2f1f] font-black text-[10px] uppercase tracking-widest">Active Members</p>
              </div>
              
              <div className="bg-[#d4f9e3] border-[3px] border-[#0a2f1f] p-5 rounded-[1.5rem] shadow-[5px_5px_0_0_#0a2f1f] transform -rotate-2 hover:rotate-0 transition-transform">
                <h4 className="text-4xl sm:text-5xl font-black text-[#0a2f1f] leading-none mb-1">20+</h4>
                <p className="text-[#0a2f1f] font-black text-[10px] uppercase tracking-widest">Green Projects</p>
              </div>
            </div>

          </div>

          {/* =========================================
              KOLOM KANAN: GALERI POLAROID
          ========================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-end mt-16 lg:mt-0 z-20 w-full h-[50vh] sm:h-[60vh] lg:h-full min-h-[400px] lg:pr-10">
            
            {/* FIX 3: Tambah max-w-[550px] dan geser ke kanan pakai justify-end di parent */}
            <div className="relative w-full max-w-[450px] sm:max-w-[550px] flex items-center justify-center">

              {/* Tumpukan Belakang (Pink Transparan) */}
              <div className="absolute w-[95%] aspect-[4/3] bg-[#f37c7c]/20 border-[3px] border-[#0a2f1f] rounded-[1.5rem] transform rotate-6 translate-x-6 translate-y-4 z-0"></div>

              {/* Frame Utama Galeri */}
              <div className="bg-white p-4 pb-16 sm:pb-20 border-[4px] border-[#0a2f1f] rounded-[1.5rem] sm:rounded-[2rem] w-full relative z-10 shadow-[10px_10px_0_0_#0a2f1f] transform -rotate-2">
                
                {/* Quote Kuning */}
                <div className="absolute -top-8 sm:-top-10 -left-6 sm:-left-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] p-4 rounded-xl shadow-[5px_5px_0_0_#0a2f1f] transform -rotate-6 z-40 max-w-[150px] sm:max-w-[180px]">
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#f37c7c] border-[2.5px] border-[#0a2f1f] rounded-full z-50 animate-bounce"></div>
                   <p className="text-[#0a2f1f] font-black text-[10px] sm:text-xs uppercase tracking-widest leading-snug text-center mt-2">
                     Act locally, impact globally.
                   </p>
                </div>

                {/* Area Foto */}
                <div className="relative w-full aspect-[4/3] border-[3px] border-[#0a2f1f] rounded-[1rem] sm:rounded-[1.2rem] overflow-hidden bg-[#0a2f1f]">
                  <div 
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] h-full"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                  >
                    {images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`Gallery ${idx}`}
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                    ))}
                  </div>

                  {/* Tombol Navigasi Hijau (Pindah ke dalam foto biar lebih modern) */}
                  <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#d6fc71] border-[3px] border-[#0a2f1f] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-[#0a2f1f] hover:bg-white transition-all z-30 shadow-[3px_3px_0_0_#0a2f1f] active:shadow-none active:translate-y-1">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#d6fc71] border-[3px] border-[#0a2f1f] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-[#0a2f1f] hover:bg-white transition-all z-30 shadow-[3px_3px_0_0_#0a2f1f] active:shadow-none active:translate-y-1">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

                {/* Caption Dokumentasi */}
                <div className="absolute bottom-5 left-0 w-full px-8 flex justify-between items-center">
                  <p className="font-serif italic font-bold text-xl sm:text-2xl text-[#0a2f1f]">Moments.</p>
                  {/* Dots Navigation */}
                  <div className="flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2.5 h-2.5 rounded-full border-[2px] border-[#0a2f1f] transition-all duration-300 ${
                          index === currentImage ? "bg-[#0a2f1f] w-5" : "bg-transparent hover:bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* FIX 4: Posisi Maskot Pot (Lebih keluar, gak nutupin foto utama) */}
                <img 
                   src="/images/mascot/mascotpot.webp" 
                   alt="Mascot Pot" 
                   // -right-12 biar dia lebih nongkrong di luar frame
                   className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-16 w-28 sm:w-36 lg:w-40 z-[60] drop-shadow-[4px_10px_8px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform origin-bottom"
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}