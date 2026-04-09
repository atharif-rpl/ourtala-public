"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function AnimatedAbout() {
  const [showMore, setShowMore] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const aboutRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const images = [
    "/images/Galery/galeryabout.webp",
    "/images/Galery/galeryabout2.webp",
    "/images/Galery/galeryabout3.webp",
    "/images/Galery/galeryabout4.webp",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (aboutRef.current) observer.observe(aboutRef.current)

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [images.length])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  const toWebp = (src: string) => src.replace(/\.(jpeg|jpg|png)$/i, ".webp")

  return (
    <section
      id="about"
      ref={aboutRef}
      // UPDATE: Padding dikurangi di mobile (py-12) agar tidak terlalu boros tempat
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-lime-50 to-teal-50 relative overflow-hidden"
    >
      {/* Background decorations - Responsive size & opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 md:w-32 md:h-32 bg-teal-200/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-lime-300/15 rounded-full blur-lg animate-pulse delay-2000"></div>
        {/* Hidden on mobile to reduce clutter */}
        <div className="hidden md:block absolute top-1/4 right-1/3 w-24 h-24 bg-lime-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="hidden md:block absolute bottom-1/4 left-1/4 w-28 h-28 bg-teal-100/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-3 md:mb-4">
            <span className="bg-white/80 backdrop-blur-sm text-emerald-800 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase border border-emerald-200 shadow-sm">
              About Us
            </span>
          </div>
          {/* UPDATE: Font size responsive */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
            About Our
            <span className="text-emerald-600"> Tala</span>
            <span
              className="text-2xl md:text-5xl align-top"
              style={{
                color: "#8BC34A",
                textShadow: "0 0 10px rgba(139, 195, 74, 0.5)",
              }}
            >
              *
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-2">
            Mewujudkan masa depan yang lebih hijau melalui inovasi dan komunitas.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start relative">
          
          {/* Mascot left - UPDATE: Hidden on laptop small (lg), visible only on XL screens (xl/2xl) to prevent overlap */}
          <div
            className={`absolute -left-24 top-1/4 hidden 2xl:block transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
            style={{ zIndex: 20 }}
          >
            <picture>
              <source srcSet={toWebp("/images/mascot/mascotbunga.webp")} type="image/webp" />
              <Image
                id="mascot-explainer-1"
                src="/images/mascot/mascotbunga.webp"
                alt="Mascot explaining community"
                width={120}
                height={120}
                className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </picture>
          </div>

          {/* Left text content */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Community Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-emerald-100 shadow-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-emerald-600 w-2 h-6 md:w-3 md:h-8 rounded-full mr-3 md:mr-4"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Community</h3>
              </div>
              <div className="text-sm md:text-base text-gray-600 leading-relaxed text-justify md:text-left">
                <p className="mb-4">
                  Ourtala is a non-profit organization established since April 8, 2021, derived from the words
                  &quot;Our&quot; and &quot;Bentala,&quot; meaning &quot;Our Earth&quot;. Ourtala aims to raise
                  environmental awareness, promote sustainable lifestyles, and educate the younger generation.
                </p>
                {showMore && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p>
                      {`Through collaborative initiatives, Ourtala hopes to have a tangible impact in the form of behavioral changes, increased socio-environmental awareness, and the creation of a community that is more aware of the importance of protecting the earth for our shared future.`}
                    </p>
                    <p>Symbolizing a shared responsibility for protecting the planet.</p>
                  </div>
                )}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200 flex items-center text-sm md:text-base"
                >
                  {showMore ? (
                    <>
                      Show Less
                      <svg
                        className="w-4 h-4 ml-1 transform rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Show More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Vision & Mission - UPDATE: Stacked on mobile, Grid on MD+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-emerald-100 shadow-lg h-full">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-emerald-600 w-2 h-6 md:w-3 md:h-8 rounded-full mr-3 md:mr-4"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify md:text-left">
                  To spread awareness and remind the public to always take good care of the environment and the Earth,
                  as it is crucial for our present and future.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-emerald-100 shadow-lg h-full">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-emerald-600 w-2 h-6 md:w-3 md:h-8 rounded-full mr-3 md:mr-4"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <div className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed text-justify md:text-left">
                  <p>
                    To create programs and publish content related to global environmental issues that contribute to
                    the development of human action towards the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel & Stats - UPDATE: Sticky only on Large screens */}
          <div
            className={`lg:sticky lg:top-24 space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-emerald-100 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Our Community Gallery</h3>
              <div className="relative overflow-hidden rounded-xl group">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <picture>
                        <source srcSet={toWebp(image)} type="image/webp" />
                        <Image
                          src={image}
                          alt={`Community ${index + 1}`}
                          width={400}
                          height={256}
                          // UPDATE: Height responsive (h-48 on mobile, h-64 on tablet/desktop)
                          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md"
                        />
                      </picture>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Buttons - Visible on hover/touch */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110 opacity-70 group-hover:opacity-100"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110 opacity-70 group-hover:opacity-100"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-200 ${
                        index === currentImage
                          ? "bg-emerald-600 w-4 md:w-6"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-xs text-gray-500 mb-1">
                  {currentImage + 1} / {images.length}
                </p>
                <p className="text-xs md:text-sm text-emerald-800 leading-snug">
                  Lihat aktivitas dan kegiatan komunitas OurTala.
                </p>
              </div>
            </div>

            {/* Stats - UPDATE: Side-by-side on mobile too (grid-cols-2) */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-gradient-to-br from-emerald-100/80 to-lime-100/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl text-center border border-emerald-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-4xl font-bold text-emerald-700 mb-1 md:mb-2">30+</div>
                <div className="text-xs md:text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Members
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-100/80 to-emerald-100/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl text-center border border-teal-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-4xl font-bold text-teal-700 mb-1 md:mb-2">20+</div>
                <div className="text-xs md:text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Projects
                </div>
              </div>
            </div>
          </div>

          {/* Mascot right - UPDATE: Hidden on laptop small, visible only on XL screens */}
          <div
            className={`absolute -right-24 bottom-1/4 hidden 2xl:block transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
            style={{ zIndex: 20 }}
          >
            <picture>
              <source srcSet={toWebp("/images/mascot/mascotpot.webp")} type="image/webp" />
              <Image
                id="mascot-explainer-2"
                src="/images/mascot/mascotpot.webp"
                alt="Mascot explaining projects"
                width={150}
                height={150}
                className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}