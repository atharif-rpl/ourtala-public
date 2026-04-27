"use client"

import { useEffect, useState } from "react"

interface IntroAnimationProps {
  onAnimationComplete: () => void
}

export default function IntroAnimation({ onAnimationComplete }: IntroAnimationProps) {
  const [animationStep, setAnimationStep] = useState("start")
  const [showShockwave, setShowShockwave] = useState(false)

  useEffect(() => {
    // 1. Slam: Logo menghantam layar
    const timer1 = setTimeout(() => setAnimationStep("slam"), 100)
    
    // 2. Vibrate & Shockwave: Getaran setelah hantaman
    const timer2 = setTimeout(() => {
      setAnimationStep("vibrate")
      setShowShockwave(true)
    }, 800)

    // 3. Burst: Meledak keluar/transisi ke web utama
    const timer3 = setTimeout(() => setAnimationStep("burst"), 2400)
    
    // 4. Selesai
    const timer4 = setTimeout(onAnimationComplete, 3200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onAnimationComplete])

  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-1000 ease-in-out bg-[#f6f9f0] ${
        animationStep === "burst" ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        
        {/* ================= SHOCKWAVE BRUTALIST (Starburst) ================= */}
        {showShockwave && (
          <div className="absolute z-10 animate-ping">
             <svg width="400" height="400" viewBox="0 0 100 100" className="text-[#d6fc71] opacity-40">
                <path fill="currentColor" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
             </svg>
          </div>
        )}

        {/* ================= ORNAMEN MELAYANG (Brutalist Shapes) ================= */}
        <div className={`absolute top-10 left-10 text-6xl text-[#0a2f1f]/10 transform -rotate-12 ${animationStep === "slam" ? "animate-bounce" : ""}`}>✦</div>
        <div className={`absolute bottom-20 right-10 text-8xl text-[#f37c7c]/10 transform rotate-12 ${animationStep === "slam" ? "animate-bounce" : ""}`}>✿</div>
        <div className="absolute top-1/2 left-10 w-20 h-20 border-[4px] border-[#0a2f1f]/5 rounded-full border-dashed animate-spin-slow"></div>

        {/* ================= PARTIKEL MELEDAK (BRUTALIST SHAPES) ================= */}
        {animationStep === "vibrate" &&
          Array.from({ length: 15 }).map((_, i) => {
            const angle = i * (360 / 15)
            const symbols = ["✦", "✿", "▲", "■"]
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
            const colors = ["text-[#d6fc71]", "text-[#fbef7d]", "text-[#f37c7c]", "text-[#0a2f1f]"]
            const randomColor = colors[Math.floor(Math.random() * colors.length)]

            return (
              <div
                key={i}
                className={`absolute font-black text-xl ${randomColor} animate-particle-pop`}
                style={{
                  "--angle": `${angle}deg`,
                  "--distance": "200px",
                  zIndex: 40,
                } as React.CSSProperties}
              >
                {randomSymbol}
              </div>
            )
          })}

        {/* ================= LOGO STICKER CARD ================= */}
        <div className={`relative z-50 transition-all duration-500 ${
          animationStep === "slam" ? "scale-100 opacity-100" : 
          animationStep === "vibrate" ? "animate-wiggle" :
          "scale-50 opacity-0"
        }`}>
          <div className="bg-white border-[6px] border-[#0a2f1f] p-8 rounded-[3rem] shadow-[15px_15px_0_0_#0a2f1f] relative overflow-hidden group">
            
            {/* Aksen Selotip Kuning di pojok stiker */}
            <div className="absolute -top-2 -left-6 w-20 h-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] transform -rotate-45 z-10"></div>
            
            <picture>
              <source srcSet="/images/Logo/OURTALA.webp" type="image/webp" />
              <img
                src="/images/Logo/OURTALA.png"
                alt="Ourtala Logo"
                width={200}
                height={200}
                className="object-contain relative z-20"
              />
            </picture>

            {/* Label Kecil di Bawah Logo */}
            <div className="mt-4 text-center">
               <span className="bg-[#0a2f1f] text-[#d6fc71] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                 Est. 2021
               </span>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes particle-pop {
          0% { transform: rotate(var(--angle)) translateY(0) scale(0); opacity: 1; }
          100% { transform: rotate(var(--angle)) translateY(var(--distance)) scale(1); opacity: 0; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg) scale(1.05); }
          50% { transform: rotate(2deg) scale(1.05); }
        }
        .animate-particle-pop {
          animation: particle-pop 1s forwards cubic-bezier(0, 0, 0.2, 1);
        }
        .animate-wiggle {
          animation: wiggle 0.2s infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  )
}