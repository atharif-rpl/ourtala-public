"use client"

import Image from "next/image"
import type { TeamMember } from "../types/TeamMember"
import { useEffect, useRef } from "react"

interface TeamModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Lock scroll body
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  // Close on ESC or Click Outside
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-0 md:p-8">
      {/* Backdrop Overlay dengan Blur */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-300" />

      {/* --- MODAL CONTAINER --- */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-5xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300
        rounded-[2rem] /* Sudut sangat bulat untuk kesan modern */
        max-h-[90vh] md:h-auto /* Mobile max height, Desktop auto height */
        "
        role="dialog"
        aria-modal="true"
      >
        {/* Tombol Close (Floating) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/20 text-white hover:bg-black/40 md:bg-white/80 md:text-slate-800 md:hover:bg-white transition-all backdrop-blur-md"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* ========= BAGIAN KIRI: FOTO BESAR ========= */}
        {/* Desktop: Lebar 50%, Tinggi Full. Mobile: Lebar Full, Tinggi 45vh */}
        <div className="relative w-full md:w-1/2 h-[45vh] md:h-auto md:min-h-[600px] flex-shrink-0 bg-slate-100">
           <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            // object-center biasanya paling aman untuk portrait. 
            // Jika kepala terpotong, ganti ke object-top
            className="object-cover object-center" 
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Gradient halus di bawah untuk mobile agar transisi ke teks mulus */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* ========= BAGIAN KANAN: KONTEN INFORMATIF ========= */}
        {/* Mobile: Naik sedikit (-mt-10) dan rounded top agar menimpa foto */}
        <div className="relative w-full md:w-1/2 flex flex-col bg-white -mt-12 md:mt-0 rounded-t-[2rem] md:rounded-none z-10 overflow-hidden">
          
          {/* Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 sm:p-8 custom-scrollbar">
            
            {/* Header: Divisi, Nama, Role */}
            <div className="mb-8">
              {/* Badge Divisi Simple */}
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-emerald-100/80 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                {member.division}
              </div>
              
              {/* Nama Besar & Eye-catching */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-none mb-2">
                {member.name}
              </h2>
              {/* Role Berwarna */}
              <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                {member.role}
              </p>
            
              {/* Social Icons - Langsung di bawah role */}
              <div className="flex gap-3 mt-5">
                  {member.social.linkedin && <SocialLink href={member.social.linkedin} type="linkedin" />}
                  {member.social.instagram && <SocialLink href={member.social.instagram} type="instagram" />}
                  {member.social.twitter && <SocialLink href={member.social.twitter} type="twitter" />}
              </div>
            </div>

            {/* Divider Halus */}
            <div className="w-full h-px bg-slate-100 my-6"></div>

            {/* Bio Section */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                About
              </h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {member.bio}
              </p>
            </div>

             {/* Expertise Section */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                 Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                  <ExpertiseTags role={member.role} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// --- SUB-COMPONENTS UNTUK KEBERSIHAN KODE ---

// 1. Logic Tagging Otomatis
function ExpertiseTags({ role }: { role: string }) {
  const r = role.toLowerCase();
  let tags = [{l: "Teamwork", c: "blue"}, {l: "Communication", c: "blue"}]; // Default

  if (r.includes("frontend") || r.includes("web")) {
    tags = [{l:"React",c:"emerald"}, {l:"TypeScript",c:"emerald"}, {l:"Tailwind",c:"teal"}];
  } else if (r.includes("backend") || r.includes("engineer")) {
    tags = [{l:"Node.js",c:"blue"}, {l:"Database",c:"indigo"}, {l:"API Architect",c:"violet"}];
  } else if (r.includes("design") || r.includes("ui/ux")) {
    tags = [{l:"Figma",c:"pink"}, {l:"User Research",c:"rose"}, {l:"Prototyping",c:"orange"}];
  } else if (r.includes("product") || r.includes("manager")) {
    tags = [{l:"Strategy",c:"amber"}, {l:"Analytics",c:"yellow"}, {l:"Agile",c:"lime"}];
  }

  return (
    <>
      {tags.map((t, i) => (
        <span key={i} className={`px-4 py-1.5 rounded-lg text-sm font-semibold border bg-${t.c}-50 text-${t.c}-700 border-${t.c}-100`}>
          {t.l}
        </span>
      ))}
    </>
  )
}

// 2. Tombol Social Media yang Konsisten
function SocialLink({ href, type }: { href: string, type: 'linkedin' | 'instagram' | 'twitter' }) {
  const icons = {
    linkedin: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
    instagram: <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />,
    twitter: <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  };
  
  const colors = {
    linkedin: "hover:text-blue-600 hover:bg-blue-50",
    instagram: "hover:text-pink-600 hover:bg-pink-50",
    twitter: "hover:text-sky-500 hover:bg-sky-50"
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className={`p-3 rounded-xl bg-slate-50 text-slate-400 transition-all duration-300 hover:scale-110 ${colors[type]}`}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{icons[type]}</svg>
    </a>
  )
}