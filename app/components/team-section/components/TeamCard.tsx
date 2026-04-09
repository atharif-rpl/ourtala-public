"use client"

import Image from "next/image"
import type { TeamMember } from "../types/TeamMember"
import { useState } from "react"

interface TeamCardProps {
  member: TeamMember
  index?: number
  onCardClick?: (member: TeamMember) => void
}

const cardColors = [
  "bg-emerald-50/80",
  "bg-blue-50/80",
  "bg-amber-50/80",
  "bg-teal-50/80",
  "bg-green-50/80",
  "bg-cyan-50/80",
]

const accentColors = [
  "text-emerald-700",
  "text-blue-700",
  "text-amber-700",
  "text-teal-700",
  "text-green-700",
  "text-cyan-700",
]

export function TeamCard({ member, index = 0, onCardClick }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardColor = cardColors[index % cardColors.length]
  const accentColor = accentColors[index % accentColors.length]

  const handleClick = () => {
    onCardClick?.(member)
  }

  return (
    <div
      className="group cursor-pointer flex justify-center py-4 px-2" // Added padding container for safety
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`
          relative overflow-hidden rounded-3xl ${cardColor} backdrop-blur-sm
          transform transition-all duration-500 ease-out
          ${isHovered ? "scale-105 shadow-2xl shadow-emerald-900/10" : "shadow-lg shadow-emerald-900/5"}
          
          border border-white/20
          
          /* --- RESPONSIVE SIZING --- */
          w-full max-w-[300px] md:max-w-none md:w-72  /* HP: Max 300px, Laptop: 72 (18rem) */
          h-[26rem] md:h-96                            /* HP: 26rem, Laptop: 96 (24rem) */
        `}
      >
        {/* Sparkle Decoration */}
        <div className="absolute top-4 right-4 flex gap-1 z-10">
          <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse delay-75"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse delay-150"></div>
        </div>

        {/* --- FOTO MEMBER --- */}
        {/* HP: h-56 (sedikit lebih pendek), Laptop: h-64 */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg?height=300&width=300"}
            alt={member.name}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, 300px"
            priority={false}
          />
          {/* Gradient Overlay bawah foto agar teks terbaca jelas */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </div>

        {/* --- INFO TEXT --- */}
        <div className="p-5 md:p-6 space-y-2 md:space-y-3">
          <div className="space-y-0.5 md:space-y-1">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 tracking-tight leading-snug">
              {member.name}
            </h3>
            <p className={`text-sm font-medium ${accentColor}`}>{member.role}</p>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
              {member.division}
            </p>
          </div>

          <p
            className={`
              text-xs md:text-sm text-gray-600 leading-relaxed transition-all duration-300
              line-clamp-3  /* Mencegah teks terlalu panjang */
              ${isHovered ? "opacity-100 translate-y-0" : "opacity-80 md:opacity-70 md:translate-y-1"}
            `}
          >
            {member.bio}
          </p>
        </div>

        {/* --- SOCIAL ICONS --- */}
        <div
          className={`
            absolute bottom-5 right-5 flex gap-2 md:gap-3 transition-all duration-300
            /* HP: Selalu terlihat (opacity-100), Laptop: Muncul saat hover */
            opacity-100 md:opacity-60 
            ${isHovered ? "md:opacity-100 md:translate-x-0" : "md:translate-x-2"}
          `}
        >
          {member.social.linkedin && (
            <SocialButton
              href={member.social.linkedin}
              color="text-blue-600"
              onClick={(e) => e.stopPropagation()}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </SocialButton>
          )}

          {member.social.instagram && (
            <SocialButton
              href={member.social.instagram}
              color="text-pink-600"
              onClick={(e) => e.stopPropagation()}
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
            </SocialButton>
          )}
        </div>
      </div>
    </div>
  )
}

/* Reusable social icon button */
function SocialButton({
  href,
  color,
  children,
  onClick,
}: {
  href: string
  color: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1.5 md:p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 hover:scale-110 shadow-sm"
      onClick={onClick}
    >
      <svg className={`w-3.5 h-3.5 md:w-4 md:h-4 ${color}`} fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  )
}