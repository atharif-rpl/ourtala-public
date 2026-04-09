"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { teamData, divisions } from "./data/teamData"
import { useWindowSize } from "./hooks/useWindowSize"
import type { TeamMember } from "./types/TeamMember"

// Import Sub-Components
import TeamBackground from "./components/TeamBackground"
import TeamHeader from "./components/TeamHeader"
import TeamFilters from "./components/TeamFilters"
import TeamCTA from "./components/TeamCTA"
import { TeamCarousel } from "./components/TeamCarousel"
import { TeamModal } from "./components/TeamModal"

export default function AnimatedTeamSection() {
  // --- STATE ---
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // --- REFS & HOOKS ---
  const sectionRef = useRef<HTMLElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)
  const [width] = useWindowSize()

  // --- LOGIC: CAROUSEL CALCULATION (RESPONSIVE) ---
  // Default 1 kartu (Mobile)
  let cardsPerSlide = 1;

  if (width >= 1024) {
    cardsPerSlide = 3; // Laptop/PC (Large) -> 3 Kartu
  } else if (width >= 640) {
    cardsPerSlide = 2; // Tablet/HP Besar -> 2 Kartu
  }
  
  const filteredMembers =
    activeFilter === "All" ? teamData : teamData.filter((member) => member.division === activeFilter)

  const totalSlides = Math.ceil(filteredMembers.length / cardsPerSlide)

  // --- HANDLERS ---
  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  const nextSlide = useCallback(() => {
    // Validasi agar tidak error jika slide hanya sedikit
    if (totalSlides > 0) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    if (totalSlides > 0) {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // --- EFFECTS ---
  
  // 1. Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    const currentRef = sectionRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  // 2. Auto Scroll Logic
  useEffect(() => {
    if (activeFilter === "All" && !isAutoScrollPaused && totalSlides > 1) {
      autoScrollRef.current = setInterval(nextSlide, 4000)
    }
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    }
  }, [activeFilter, isAutoScrollPaused, totalSlides, nextSlide])

  // 3. Reset index saat filter berubah
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  return (
    <>
      <section
        id="team"
        ref={sectionRef}
        // UBAH: py-12 (HP) agar tidak terlalu tinggi, md:py-24 (Laptop)
        className="py-12 md:py-24 bg-gradient-to-br from-emerald-50 via-lime-50 to-teal-50 relative overflow-hidden"
      >
        {/* 1. Background Visuals */}
        <TeamBackground />

        {/* UBAH: px-4 (HP) agar ada jarak aman kiri-kanan, md:px-8 (Tablet ke atas) */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          {/* 2. Header Section */}
          <TeamHeader isVisible={isVisible} />

          {/* 3. Filter Buttons */}
          <TeamFilters 
            divisions={divisions}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          {/* 4. Main Carousel */}
          {/* Logic responsif visualnya ada di dalam file TeamCarousel.tsx, 
              tapi jumlah kartunya dikontrol dari props cardsPerSlide di sini */}
          <TeamCarousel
            members={filteredMembers}
            currentIndex={currentIndex}
            cardsPerSlide={cardsPerSlide}
            width={width}
            onNext={nextSlide}
            onPrev={prevSlide}
            onGoToSlide={goToSlide}
            onMouseEnter={() => setIsAutoScrollPaused(true)}
            onMouseLeave={() => setIsAutoScrollPaused(false)}
            onCardClick={handleCardClick}
          />

          {/* 5. CTA Section */}
          <TeamCTA />
        </div>
      </section>

      {/* 6. Modal (Pop-up) */}
      {selectedMember && (
        <TeamModal 
          member={selectedMember} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  )
}