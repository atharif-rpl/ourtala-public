"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#news", label: "News" },
    { href: "#team", label: "Team" },
    { href: "#gallery", label: "Gallery" },
  ]

  // Animasi rotasi logo saat scroll
  const logoRotation = scrollY * 0.2

  return (
    <>
      {/* =========================================
          NAVBAR CONTAINER (DNA: Floating Sticker)
          ========================================= */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out w-[90%] max-w-fit px-4 py-2 sm:px-6 sm:py-3 rounded-full border-[3px] border-[#0a2f1f] bg-white ${
          isScrolled
            ? "shadow-[6px_6px_0_0_#0a2f1f] translate-y-[-4px]"
            : "shadow-[4px_4px_0_0_#0a2f1f]"
        }`}
      >
        <div className="flex items-center justify-between gap-6 sm:gap-10">
          
          {/* LOGO - DNA: Small Sticker Box */}
          <a
            href="#home"
            className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white border-[2.5px] border-[#0a2f1f] rounded-xl shadow-[3px_3px_0_0_#0a2f1f] hover:rotate-6 transition-transform group"
          >
            <picture>
              <source srcSet="/images/Logo/OURTALA.webp" type="image/webp" />
              <img
                src="/images/Logo/OURTALA.png"
                alt="OURTALA Logo"
                width={32}
                height={32}
                className="object-contain transition-transform duration-300"
                style={{ transform: `rotate(${logoRotation}deg)` }}
              />
            </picture>
            {/* Selotip kecil di pojok logo */}
            <div className="absolute -top-1 -right-2 w-6 h-2 bg-[#fbef7d] border border-[#0a2f1f] transform rotate-45"></div>
          </a>

          {/* DESKTOP LINKS - DNA: Highlighter Hover */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-[#0a2f1f] font-black text-xs uppercase tracking-widest group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-[#0a2f1f] transition-colors">
                  {item.label}
                </span>
                {/* Efek Highlighter Lime */}
                <span className="absolute bottom-1 left-0 w-0 h-3 bg-[#d6fc71] border-t border-[#0a2f1f]/10 -z-0 transition-all duration-300 group-hover:w-full transform -rotate-1"></span>
              </a>
            ))}
          </div>

          {/* CTA / CONTACT (Optional, biar seimbang) */}
          <button className="hidden sm:block bg-[#fbef7d] border-[2.5px] border-[#0a2f1f] px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-[3px_3px_0_0_#0a2f1f] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            Join Us!
          </button>

          {/* MOBILE TOGGLE - DNA: Square Brutalist Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 border-[2.5px] border-[#0a2f1f] rounded-lg bg-[#c2f298] flex items-center justify-center shadow-[3px_3px_0_0_#0a2f1f] active:shadow-none active:translate-y-1 transition-all"
          >
            <div className="flex flex-col gap-1">
              <span className={`h-1 w-5 bg-[#0a2f1f] rounded-full transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-1 w-5 bg-[#0a2f1f] rounded-full transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-1 w-5 bg-[#0a2f1f] rounded-full transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* =========================================
          MOBILE MENU (DNA: Memo Pad Style)
          ========================================= */}
      <div
        className={`md:hidden fixed z-[90] top-24 left-1/2 transform -translate-x-1/2 w-[85%] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-white border-[3px] border-[#0a2f1f] rounded-[2rem] shadow-[8px_8px_0_0_#fbef7d] p-6 relative overflow-hidden">
          {/* Aksen Lubang Buku Binder */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="w-3 h-3 rounded-full bg-[#f6f9f0] border-2 border-[#0a2f1f]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f6f9f0] border-2 border-[#0a2f1f]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f6f9f0] border-2 border-[#0a2f1f]"></div>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 text-center text-[#0a2f1f] font-black uppercase tracking-[0.2em] text-sm border-b-2 border-dashed border-[#0a2f1f]/10 last:border-0 hover:bg-[#d6fc71]/30 transition-colors rounded-xl"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Watermark News di Mobile Menu */}
          <div className="absolute -bottom-4 -right-2 text-6xl font-black text-[#0a2f1f]/5 pointer-events-none">
            MENU
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar