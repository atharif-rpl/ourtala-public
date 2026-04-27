"use client"

import { useEffect, useRef, useState } from "react"
import SocialLinks from "./SocialLinks"
import ContactForm from "./ContactForm"
import MapLocation from "./MapLocation"
import { Sparkles } from "lucide-react"

export default function EnhancedSocialSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleWhatsApp = () => {
    const message = "Halo Ourtala! Saya tertarik untuk berkolaborasi."
    window.open(`https://wa.me/6282110627537?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section 
      id="social" 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-[#f6f9f0] overflow-hidden font-sans"
    >
      {/* 1. BACKGROUND DNA (Dots & Faded Text) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      <div className="absolute top-[10%] left-[-2%] text-[15vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform rotate-2">
        CONNECT
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* =========================================
            2. HEADER (DNA: Compact Editorial Style)
            ========================================= */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          
          <div className="relative z-10 inline-block mb-6">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#fbef7d] border-[3px] border-[#0a2f1f] rounded-sm transform rotate-2 z-0 shadow-sm"></div>
             <span className="relative z-10 bg-[#d6fc71] text-[#0a2f1f] px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase border-[3px] border-[#0a2f1f] shadow-[4px_4px_0_0_#0a2f1f]">
                Hubungi Kami
             </span>
          </div>

          <h2 className="flex flex-col items-center mt-4">
            <span className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-black text-[#0a2f1f] leading-[0.8] uppercase tracking-tighter">
              Terhubung Dengan
            </span>
            <span className="relative font-serif italic font-medium text-emerald-600 text-[3.2rem] sm:text-[5rem] md:text-[6rem] leading-[0.9] -mt-1 sm:-mt-2 flex items-center gap-3">
              Komunitas Kami.
              <span className="text-3xl sm:text-5xl text-[#fbef7d] drop-shadow-[2px_2px_0_#0a2f1f] transform rotate-12 font-sans animate-bounce">✦</span>
            </span>
          </h2>
          
          <p className="text-[#0a2f1f]/70 font-bold max-w-2xl mx-auto mt-8 text-sm sm:text-base leading-relaxed italic">
            "Temukan kami di berbagai platform sosial media dan jangan ragu untuk berdiskusi demi masa depan yang lebih hijau." 🌱
          </p>
        </div>

        {/* =========================================
            3. CONTENT GRID (DNA: Brutalist Containers)
            ========================================= */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Sisi Kiri: Social + Map (Bigger Card) */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="bg-white border-[4px] border-[#0a2f1f] rounded-[2.5rem] shadow-[10px_10px_0_0_#0a2f1f] p-6 sm:p-10 relative overflow-hidden h-full">
              
              {/* Aksen Lubang Binder di Samping */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-20 hidden md:flex">
                <div className="w-4 h-4 rounded-full border-2 border-[#0a2f1f]"></div>
                <div className="w-4 h-4 rounded-full border-2 border-[#0a2f1f]"></div>
                <div className="w-4 h-4 rounded-full border-2 border-[#0a2f1f]"></div>
              </div>

              <div className="relative z-10 space-y-10">
                <div>
                  <h3 className="text-2xl font-black text-[#0a2f1f] uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#fbef7d] border-2 border-[#0a2f1f] flex items-center justify-center rounded-lg shadow-[2px_2px_0_0_#0a2f1f]">
                      <Sparkles size={16} strokeWidth={3} />
                    </div>
                    Platform Sosial
                  </h3>
                  <SocialLinks onWhatsApp={handleWhatsApp} />
                </div>

                <div className="border-[3px] border-[#0a2f1f] rounded-[1.5rem] overflow-hidden shadow-[6px_6px_0_0_#a5f3d5]">
                  <MapLocation />
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Contact Form (Stick-it Style) */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="bg-[#fbef7d] border-[4px] border-[#0a2f1f] rounded-[2.5rem] shadow-[10px_10px_0_0_#0a2f1f] p-8 h-full relative">
              
              {/* Selotip Pink di Pojok Form */}
              <div className="absolute -top-2 -right-4 w-20 h-8 bg-[#f37c7c] border-[2.5px] border-[#0a2f1f] rounded-md z-20 transform rotate-12 shadow-sm"></div>

              <h3 className="text-2xl font-black text-[#0a2f1f] uppercase tracking-tighter mb-6">
                Kirim Pesan.
              </h3>
              
              <div className="relative z-10">
                <ContactForm />
              </div>

              {/* Watermark Kecil */}
              <div className="absolute bottom-6 right-8 text-4xl font-black text-[#0a2f1f]/5 pointer-events-none select-none">
                MAIL
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ornamen Bunga di Pojok Bawah Sekali */}
      <div className="absolute -bottom-10 -right-10 text-[12rem] text-[#f37c7c]/10 transform rotate-12">
        ✿
      </div>
    </section>
  )
}