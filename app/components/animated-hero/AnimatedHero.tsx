"use client"

import { useEffect, useState } from "react"
import DecorativeLines from "./DecorativeLines"
import FloatingMascots from "./FloatingMascots"
import LogoCenter from "./LogoCenter"

export default function AnimatedHero() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [time, setTime] = useState(0)
  const [isHeroVisible, setIsHeroVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    let frameId: number

    const animate = () => {
      setTime(Date.now() * 0.001)
      frameId = requestAnimationFrame(animate)
    }

    // delay agar animasi muncul smooth
    const heroTimer = setTimeout(() => setIsHeroVisible(true), 100)
    const loadTimer = setTimeout(() => setIsLoaded(true), 500)

    window.addEventListener("scroll", handleScroll)
    frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(frameId)
      clearTimeout(heroTimer)
      clearTimeout(loadTimer)
    }
  }, [])

  const scatterProgress = Math.min(scrollY / 300, 1)
  const bloomEasing = 1 - Math.pow(1 - scatterProgress, 4)

  // Efek parallax tipis buat teks background
  const yOffset = scrollY * 0.5

  return (
    <section
      id="home"
      // DNA Booster: Buang bg-gradient, ganti jadi Krem (#f6f9f0) dan font-sans
      className={`relative min-h-screen bg-[#f6f9f0] font-sans overflow-hidden transition-opacity duration-700 ${
        isHeroVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* =========================================
          1. BACKGROUND DNA (Dot Pattern) 
          ========================================= */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* =========================================
          2. FADED WATERMARKS (DNA: Bold, Tilted, Parallax)
          ========================================= */}
      <div 
        className="absolute top-[15%] left-[-5%] text-[18vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform -rotate-3 transition-transform duration-300"
        style={{ transform: `translateX(${yOffset * -0.2}px) rotate(-3deg)` }}
      >
        ROOTED
      </div>
      <div 
        className="absolute bottom-[10%] right-[-5%] text-[15vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform rotate-2 transition-transform duration-300"
        style={{ transform: `translateX(${yOffset * 0.2}px) rotate(2deg)` }}
      >
        ACTION
      </div>

      {/* Komponen Ornamen Garis Lo (Tetep dipertahankan) */}
      <div className="relative z-0">
        <DecorativeLines scatterProgress={scatterProgress} />
      </div>

      {/* Konten Utama Hero */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="absolute transition-all duration-1000 ease-out"
            style={{ transform: `scale(${1 + bloomEasing * 0.1})` }}
          >
            {/* Maskot lo yang terbang-terbang */}
            <FloatingMascots
              bloomEasing={bloomEasing}
              time={time}
              isLoaded={isLoaded}
            />
            {/* Logo lo di tengah */}
            <LogoCenter scatterProgress={scatterProgress} />
          </div>
        </div>
      </div>
    </section>
  )
}