"use client"

import Image from "next/image"
import { Send, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#f6f9f0] pt-20 pb-10 px-4 sm:px-6 font-sans overflow-hidden border-t-[4px] border-[#0a2f1f]">
      
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Aksen Selotip Kuning Besar di garis perbatasan footer */}
      <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-40 sm:w-56 h-10 bg-[#fbef7d] border-[3px] border-[#0a2f1f] border-t-0 rounded-b-xl shadow-md z-10 transform -rotate-1 flex items-center justify-center">
         <span className="text-[#0a2f1f] font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">Ourtala 2026</span>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* 1. BAGIAN LOGO & BRAND CARD (4 Kolom) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start group">
            <div className="relative bg-white border-[3px] border-[#0a2f1f] p-8 rounded-[2.5rem] shadow-[8px_8px_0_0_#0a2f1f] transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm">
              
              {/* Mascot Peeking Out */}
              <div className="absolute -top-16 -right-6 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/images/mascot/mascotpohon.webp"
                  alt="Ourtala Mascot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h2 className="text-3xl font-black text-[#0a2f1f] mb-4 tracking-tighter uppercase">
                Our<span className="text-emerald-600 font-serif italic normal-case">tala.</span>
              </h2>
              <p className="text-[#0a2f1f]/70 text-sm font-medium leading-relaxed mb-6">
                Misi kami adalah membawa inovasi berkelanjutan ke dalam kehidupan sehari-hari melalui aksi nyata komunitas. 🌱
              </p>
              
              {/* Newsletter Simple ala Brutalist */}
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Email lo..."
                  className="w-full bg-[#f6f9f0] border-[2px] border-[#0a2f1f] rounded-lg px-4 py-2 text-xs font-bold focus:outline-none focus:bg-white transition-colors"
                />
                <button className="bg-[#d6fc71] border-[2px] border-[#0a2f1f] p-2 rounded-lg shadow-[2px_2px_0_0_#0a2f1f] active:shadow-none active:translate-y-0.5 transition-all">
                  <Send size={16} strokeWidth={3} className="text-[#0a2f1f]" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. MENU LINKS (5 Kolom - dibagi 2) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 w-full">
            {/* Ourtala Menu */}
            <div className="flex flex-col">
              <h3 className="font-black text-[#0a2f1f] text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#fbef7d] border-[1.5px] border-[#0a2f1f] rounded-full"></span>
                Ourtala
              </h3>
              <ul className="space-y-4">
                {['About Us', 'Gallery', 'Career', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#0a2f1f]/70 hover:text-[#0a2f1f] font-bold text-sm transition-all hover:translate-x-1 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Menu */}
            <div className="flex flex-col">
              <h3 className="font-black text-[#0a2f1f] text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#c2f298] border-[1.5px] border-[#0a2f1f] rounded-full"></span>
                Informasi
              </h3>
              <ul className="space-y-4">
                {['Tentang Kami', 'FAQ', 'Projects', 'Manifesto'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#0a2f1f]/70 hover:text-[#0a2f1f] font-bold text-sm transition-all hover:translate-x-1 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. BAGIAN SOSMED (3 Kolom) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end">
             <div className="bg-[#fbef7d] border-[3px] border-[#0a2f1f] p-6 rounded-[2rem] shadow-[6px_6px_0_0_#0a2f1f] transform rotate-2 w-full max-w-[240px]">
                <h3 className="font-black text-[#0a2f1f] text-center mb-4 uppercase tracking-widest text-xs">Ikuti Radar Kami</h3>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: <Instagram size={20} />, link: "#" },
                    { icon: <Linkedin size={20} />, link: "#" },
                    { icon: <Github size={20} />, link: "#" },
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.link}
                      className="w-10 h-10 bg-white border-[2px] border-[#0a2f1f] rounded-lg flex items-center justify-center text-[#0a2f1f] hover:bg-[#d6fc71] hover:-translate-y-1 transition-all shadow-[2px_2px_0_0_#0a2f1f] active:shadow-none active:translate-y-0"
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
                {/* Pin pemanis */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#f37c7c] border-[2px] border-[#0a2f1f] rounded-full"></div>
             </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-20 pt-8 border-t-[3px] border-dashed border-[#0a2f1f]/20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-[#0a2f1f] font-black text-xs uppercase tracking-widest text-center md:text-left">
                © 2026 Ourtala. 
              </p>
              <span className="hidden md:inline text-[#0a2f1f]/30">|</span>
              <p className="text-[#0a2f1f]/50 font-bold text-[10px] uppercase">
                Crafted with passion for the Earth
              </p>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-[#0a2f1f]/60 hover:text-[#0a2f1f] transition-colors text-xs font-black uppercase tracking-tighter border-b-2 border-transparent hover:border-[#fbef7d]">
                Privacy Policy
              </a>
              <a href="#" className="text-[#0a2f1f]/60 hover:text-[#0a2f1f] transition-colors text-xs font-black uppercase tracking-tighter border-b-2 border-transparent hover:border-[#fbef7d]">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
        
      </div>

      {/* Watermark Raksasa di dasar footer */}
      <div className="absolute bottom-[-20px] right-[-20px] text-[15vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none tracking-tighter leading-none z-0">
        BENTALA
      </div>
    </footer>
  )
}