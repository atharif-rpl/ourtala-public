"use client"

import Image from "next/image"
import type { TeamMember } from "../types/TeamMember"
import { useEffect, useRef } from "react"
import { X, Linkedin, Instagram, Twitter, Zap, Star } from "lucide-react"

interface TeamModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen || !member) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
      {/* Backdrop Overlay - Ourtala Green */}
      <div className="absolute inset-0 bg-[#0a2f1f]/80 backdrop-blur-sm animate-in fade-in duration-300" />

      {/* --- MODAL CONTAINER --- */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-5xl bg-white border-[4px] border-[#0a2f1f] shadow-[12px_12px_0_0_#0a2f1f] flex flex-col md:flex-row animate-in zoom-in-95 duration-300 rounded-[2.5rem] max-h-[90vh] md:h-auto overflow-hidden z-20"
        role="dialog"
      >
        {/* Aksen Selotip Kuning di Atas */}
        <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-32 h-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] border-t-0 rounded-b-md shadow-sm z-50 transform rotate-1 hidden md:block"></div>

        {/* Tombol Close Pop-Art */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] w-12 h-12 rounded-full bg-[#f37c7c] border-[3px] border-[#0a2f1f] text-[#0a2f1f] flex items-center justify-center shadow-[3px_3px_0_0_#0a2f1f] hover:bg-white transition-all active:translate-y-1 active:shadow-none"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={3} />
        </button>

        {/* ========= KIRI: FOTO (POLAROID BIG STYLE) ========= */}
        <div className="relative w-full md:w-5/12 h-[40vh] md:h-auto md:min-h-[600px] flex-shrink-0 bg-[#c2f298] border-b-[4px] md:border-b-0 md:border-r-[4px] border-[#0a2f1f] overflow-hidden p-4 md:p-6">
           <div className="relative w-full h-full border-[3px] border-[#0a2f1f] rounded-[1.5rem] overflow-hidden bg-white shadow-[6px_6px_0_0_#0a2f1f]">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              {/* Ornamen Bintang di pojok foto */}
              <div className="absolute bottom-4 right-4 text-white drop-shadow-[2px_2px_0_#0a2f1f]">
                <Star size={32} fill="currentColor" />
              </div>
           </div>
        </div>

        {/* ========= KANAN: KONTEN ========= */}
        <div className="relative w-full md:w-7/12 flex flex-col bg-white overflow-hidden">
          
          <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 custom-scrollbar bg-[radial-gradient(#c6d8c4_1px,transparent_1px)] [background-size:20px_20px]">
            
            {/* Header Profil */}
            <div className="relative">
              {/* Badge Divisi Stiker */}
              <div className="inline-block transform -rotate-2 mb-4">
                <span className="bg-[#0a2f1f] text-[#d6fc71] px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest border-2 border-[#0a2f1f] shadow-[3px_3px_0_0_#d6fc71]">
                  {member.division}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-[#0a2f1f] tracking-tighter leading-[0.9] uppercase mb-2">
                {member.name}
              </h2>
              <p className="text-xl md:text-2xl font-serif italic font-bold text-emerald-600">
                {member.role}
              </p>
            
              {/* Social Links - Boxy Style */}
              <div className="flex gap-4 mt-6">
                  {member.social.linkedin && <SocialBtn href={member.social.linkedin} icon={<Linkedin size={20} />} color="hover:bg-[#d6fc71]" />}
                  {member.social.instagram && <SocialBtn href={member.social.instagram} icon={<Instagram size={20} />} color="hover:bg-[#f37c7c]" />}
                  {member.social.twitter && <SocialBtn href={member.social.twitter} icon={<Twitter size={20} />} color="hover:bg-[#fbef7d]" />}
              </div>
            </div>

            {/* Divider Putus-putus */}
            <div className="w-full border-t-[3px] border-dashed border-[#0a2f1f]/20"></div>

            {/* Bio Section */}
            <div className="bg-white border-[3px] border-[#0a2f1f] p-6 rounded-[1.5rem] shadow-[6px_6px_0_0_#fbef7d] relative">
              <h3 className="text-xs font-black text-[#0a2f1f] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#fbef7d] border-2 border-[#0a2f1f] flex items-center justify-center">
                  <Zap size={12} strokeWidth={3} />
                </div>
                The Story
              </h3>
              <p className="text-[#0a2f1f] font-medium leading-relaxed text-base md:text-lg italic">
                "{member.bio}"
              </p>
            </div>

             {/* Expertise Section - STICKER TAGS */}
            <div>
              <h3 className="text-xs font-black text-[#0a2f1f] uppercase tracking-[0.2em] mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                  <StickerTags role={member.role} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// --- HELPERS ---

function StickerTags({ role }: { role: string }) {
  const r = role.toLowerCase();
  const baseTags = ["Teamwork", "Sustainability"];
  let expertise: string[] = [];

  if (r.includes("frontend") || r.includes("web") || r.includes("it")) {
    expertise = ["Next.js", "TypeScript", "Tailwind", "Architecture"];
  } else if (r.includes("design") || r.includes("creative")) {
    expertise = ["UI/UX", "Branding", "Figma", "Art Direction"];
  } else if (r.includes("media") || r.includes("marketing")) {
    expertise = ["Storytelling", "Content Strategy", "Photography"];
  } else {
    expertise = ["Leadership", "Innovation", "Green Tech"];
  }

  const allTags = [...baseTags, ...expertise];
  const colors = ["bg-[#d6fc71]", "bg-[#fbef7d]", "bg-[#f37c7c]", "bg-[#a5f3d5]"];

  return (
    <>
      {allTags.map((tag, i) => (
        <span 
          key={i} 
          className={`${colors[i % colors.length]} text-[#0a2f1f] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border-[2.5px] border-[#0a2f1f] shadow-[3px_3px_0_0_#0a2f1f] transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-2'} hover:rotate-0 transition-transform`}
        >
          {tag}
        </span>
      ))}
    </>
  )
}

function SocialBtn({ href, icon, color }: { href: string, icon: React.ReactNode, color: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className={`w-12 h-12 rounded-xl bg-white border-[3px] border-[#0a2f1f] flex items-center justify-center text-[#0a2f1f] shadow-[4px_4px_0_0_#0a2f1f] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0a2f1f] active:translate-y-0 active:shadow-none ${color}`}>
      {icon}
    </a>
  )
}