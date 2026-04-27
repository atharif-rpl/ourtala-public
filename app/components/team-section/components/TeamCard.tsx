"use client"

import Image from "next/image"
import type { TeamMember } from "../types/TeamMember"
import { useState } from "react"
import { Linkedin, Instagram, Sparkles } from "lucide-react"

interface TeamCardProps {
  member: TeamMember
  index?: number
  onCardClick?: (member: TeamMember) => void
}

const cardColors = [
  "bg-[#d6fc71]", // Lime Ourtala
  "bg-[#fbef7d]", // Yellow Ourtala
  "bg-[#f37c7c]", // Pink Ourtala
  "bg-[#a5f3d5]", // Mint Ourtala
  "bg-white",
]

export function TeamCard({ member, index = 0, onCardClick }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardColor = cardColors[index % cardColors.length]

  return (
    <div
      className="group cursor-pointer flex justify-center py-6 px-2 font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick?.(member)}
    >
      {/* 1. CONTAINER UTAMA - DNA: Solid Shadow & Tilt */}
      <div
        className={`
          relative flex flex-col
          ${cardColor} border-[3.5px] border-[#0a2f1f] rounded-[2.5rem]
          transition-all duration-300 ease-out
          shadow-[8px_8px_0_0_#0a2f1f]
          group-hover:shadow-[12px_12px_0_0_#0a2f1f]
          group-hover:-translate-y-2 group-active:translate-y-1 group-active:shadow-none
          w-full max-w-[300px] md:w-72 min-h-[27rem] md:min-h-[29rem] overflow-hidden
        `}
      >
        {/* 2. ORNAMEN SELOTIP (DNA Rule: Tilted Tape) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#fbef7d] border-[3px] border-[#0a2f1f] rounded-sm shadow-sm z-30 transform -rotate-1"></div>

        {/* 3. FOTO POLAROID (DNA Rule: Grayscale to Color) */}
        <div className="p-4 pb-0">
          <div className="relative h-60 md:h-64 w-full bg-white border-[3px] border-[#0a2f1f] rounded-[1.5rem] overflow-hidden shadow-[4px_4px_0_0_#0a2f1f]">
            {/* Paku Payung / Pin di pojok foto */}
            <div className="absolute top-3 right-3 w-4 h-4 bg-[#f37c7c] border-2 border-[#0a2f1f] rounded-full z-20 shadow-sm animate-pulse"></div>
            
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className={`object-cover transition-all duration-700 ease-in-out ${
                isHovered ? "scale-110 rotate-1 grayscale-0" : "scale-100 rotate-0 grayscale"
              }`}
              sizes="(max-width: 768px) 100vw, 300px"
            />
            
            {/* Sparkle pas Hover */}
            <div className="absolute inset-0 bg-[#0a2f1f]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <Sparkles size={40} className="text-[#fbef7d] animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* 4. INFO TEXT (DNA Rule: Tight Leading & Mix Fonts) */}
        <div className="px-6 py-5 space-y-4 relative flex-grow">
          {/* Badge Divisi - DNA: Sticker Style */}
          <div className="inline-block transform -rotate-2">
            <span className="bg-[#0a2f1f] text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-md">
              {member.division}
            </span>
          </div>

          <div className="space-y-0.5">
            <h3 className="text-2xl md:text-3xl font-black text-[#0a2f1f] tracking-tighter leading-[0.85] uppercase">
              {member.name}
            </h3>
            <p className="text-sm font-serif italic font-bold text-emerald-800 leading-tight">
              {member.role}
            </p>
          </div>

          {/* Bio - DNA: Italic Editorial */}
          <p className="text-[11px] md:text-xs text-[#0a2f1f]/70 font-bold leading-relaxed line-clamp-3 italic">
            "{member.bio}"
          </p>
        </div>

        {/* 5. SOCIAL STICKERS (DNA Rule: Pop-out Buttons) */}
        <div className="absolute bottom-5 right-5 flex gap-2.5 z-40">
          {member.social.linkedin && (
            <SocialIcon 
              href={member.social.linkedin} 
              icon={<Linkedin size={18} strokeWidth={2.5} />} 
              hoverColor="hover:bg-[#d6fc71]"
            />
          )}
          {member.social.instagram && (
            <SocialIcon 
              href={member.social.instagram} 
              icon={<Instagram size={18} strokeWidth={2.5} />} 
              hoverColor="hover:bg-[#f37c7c]"
            />
          )}
        </div>

        {/* Ornamen Bintang Faded */}
        <div className="absolute -bottom-6 -left-6 text-[8rem] font-black text-[#0a2f1f]/5 select-none pointer-events-none transform -rotate-12">
          ✦
        </div>
      </div>
    </div>
  )
}

function SocialIcon({ href, icon, hoverColor }: { href: string, icon: React.ReactNode, hoverColor: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`w-10 h-10 bg-white border-[2.5px] border-[#0a2f1f] rounded-xl flex items-center justify-center text-[#0a2f1f] transition-all shadow-[3px_3px_0_0_#0a2f1f] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 ${hoverColor}`}
    >
      {icon}
    </a>
  )
}