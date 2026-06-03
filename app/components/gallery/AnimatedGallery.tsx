"use client"

import { useState, useEffect } from "react"
import { useGalleryVisibility } from "./hooks/useGalleryVisibility"
import { useCarousel } from "./hooks/useCarousel"
import { useModal } from "./hooks/useModal"
import { GalleryHeader } from "./components/GalleryHeader"
import { CategoryFilter } from "./components/CategoryFilter"
import { ImageCarousel } from "./components/ImageCarousel"
import { ImageModal } from "./components/ImageModal"
import { CallToAction } from "./components/CallToAction"
import { BackgroundBubbles } from "./components/BackgroundBubbles" 
import { Loader2 } from "lucide-react"

export default function AnimatedGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const [galleryItems, setGalleryItems] = useState<any[]>([])
  const [categories, setCategories] = useState<{id: string, label: string}[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        // 🔥 UPDATE: Panggil URL Dashboard dari .env (Fallback ke localhost:3001 buat ngetes di laptop)
        const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001';
        
        // Panggil fetch ke absolute URL
        const res = await fetch(`${dashboardUrl}/api/gallery`);
        
        if (!res.ok) throw new Error("Gagal ngambil data dari API Dashboard");

        const data = await res.json()
        
        const formattedItems = data.map((item: any) => ({
          ...item,
          image: item.imageUrl 
        }))
        
        setGalleryItems(formattedItems)

        const uniqueCategories = Array.from(new Set(data.map((item: any) => item.category)))
        const dynamicCategories = [
          { id: "all", label: "Semua" },
          ...uniqueCategories.map(cat => ({ 
            id: cat as string, 
            label: (cat as string).charAt(0).toUpperCase() + (cat as string).slice(1)
          }))
        ]
        
        setCategories(dynamicCategories)
      } catch (error) {
        console.error("Gagal mengambil data gallery:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGallery()
  }, [])

  const { isVisible, sectionRef } = useGalleryVisibility()
  
  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === selectedCategory)
  
  const { currentImageIndex, setCurrentImageIndex, nextImage, prevImage } = useCarousel(filteredItems)
  const { selectedImage, setSelectedImage, nextModalImage, prevModalImage, closeModal } = useModal(filteredItems)

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#f6f9f0] font-sans overflow-hidden min-h-screen"
    >
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute top-[10%] left-[-2%] text-[12vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform rotate-2">
        MOMENTS
      </div>
      <div className="absolute bottom-[10%] right-[-2%] text-[10vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform -rotate-3">
        ALBUM
      </div>

      <BackgroundBubbles />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <GalleryHeader isVisible={isVisible} />
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#0a2f1f] animate-spin mb-4" />
            <p className="font-bold text-[#0a2f1f] animate-pulse">Menyiapkan Kliping Foto...</p>
          </div>
        ) : (
          <>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              isVisible={isVisible}
            />

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
              {galleryItems.length > 0 ? (
                <ImageCarousel
                  items={filteredItems}
                  currentIndex={currentImageIndex}
                  onNext={nextImage}
                  onPrev={prevImage}
                  onSelectImage={setSelectedImage}
                  onIndexChange={setCurrentImageIndex}
                />
              ) : (
                <div className="text-center py-20 border-4 border-dashed border-[#0a2f1f]/20 rounded-3xl">
                  <p className="font-bold text-xl text-[#0a2f1f]/50">Belum ada foto di Gallery.</p>
                </div>
              )}
            </div>
          </>
        )}

        <CallToAction isVisible={isVisible} />
      </div>

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