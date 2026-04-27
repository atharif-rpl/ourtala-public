"use client"

import { useState } from "react"
import { Category } from "./types"
import { categories, galleryItems } from "./data/galleryData"
import { useGalleryVisibility } from "./hooks/useGalleryVisibility"
import { useCarousel } from "./hooks/useCarousel"
import { useModal } from "./hooks/useModal"
import { GalleryHeader } from "./components/GalleryHeader"
import { CategoryFilter } from "./components/CategoryFilter"
import { ImageCarousel } from "./components/ImageCarousel"
import { ImageModal } from "./components/ImageModal"
import { CallToAction } from "./components/CallToAction"
import { BackgroundBubbles } from "./components/BackgroundBubbles" // Ini nanti ganti isinya ya!

export default function AnimatedGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  
  // Custom hooks
  const { isVisible, sectionRef } = useGalleryVisibility()
  
  // Filter items based on selected category
  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === selectedCategory)
  
  const { currentImageIndex, setCurrentImageIndex, nextImage, prevImage } = useCarousel(filteredItems)
  const { selectedImage, setSelectedImage, nextModalImage, prevModalImage, closeModal } = useModal(filteredItems)

  return (
    <section
      id="gallery"
      ref={sectionRef}
      // DNA: Canvas Krem & Padding besar untuk ruang gerak shadow
      className="relative py-24 sm:py-32 bg-[#f6f9f0] font-sans overflow-hidden min-h-screen"
    >
      {/* 1. TEXTURE & ORNAMENTS (DNA: Dot Pattern & Faded Watermarks) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* Faded Background Text - Kiri Atas */}
      <div className="absolute top-[10%] left-[-2%] text-[12vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform rotate-2">
        MOMENTS
      </div>
      
      {/* Faded Background Text - Kanan Bawah */}
      <div className="absolute bottom-[10%] right-[-2%] text-[10vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform -rotate-3">
        ALBUM
      </div>

      {/* Komponen Ornamen (Doodles, Sparkles, dll) */}
      <BackgroundBubbles />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* 2. HEADER - DNA: Sticker Title Style */}
        <GalleryHeader isVisible={isVisible} />
        
        {/* 3. FILTER - DNA: Button Stiker Style */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          isVisible={isVisible}
        />

        {/* 4. CAROUSEL - DNA: Polaroid Stack Style */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <ImageCarousel
            items={filteredItems}
            currentIndex={currentImageIndex}
            onNext={nextImage}
            onPrev={prevImage}
            onSelectImage={setSelectedImage}
            onIndexChange={setCurrentImageIndex}
          />
        </div>

        {/* 5. CTA - DNA: Memo/Announcement Style */}
        <CallToAction isVisible={isVisible} />
      </div>

      {/* 6. MODAL - DNA: Editorial Profile Style */}
      <ImageModal
        selectedImage={selectedImage}
        filteredItems={filteredItems}
        onClose={closeModal}
        onNext={nextModalImage}
        onPrev={prevModalImage}
      />
    </section>
  )
}