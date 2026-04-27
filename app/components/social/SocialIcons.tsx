// app/components/social/SocialIcons.tsx
import React from "react"
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"

export function getPlatformIcon(platform: string, size = "w-6 h-6") {
  // Sedikit tweak size default biar lebih proporsional di dalam kotak stiker
  switch (platform) {
    case "instagram":
      return <FaInstagram className={size} />
    case "spotify":
      return <FaSpotify className={size} />
    case "youtube":
      return <FaYoutube className={size} />
    case "tiktok":
      return <FaTiktok className={size} />
    case "linkedin":
      return <FaLinkedin className={size} />
    case "whatsapp":
      return <FaWhatsapp className={size} />
    default:
      return null
  }
}

// DNA BARU: Nggak ada lagi gradasi. Semuanya warna solid ala kertas karton/stiker!
export function getPlatformColorClass(platform: string) {
  switch (platform) {
    case "instagram":
      return "bg-[#f37c7c]" // Pink Ourtala
    case "spotify":
      return "bg-[#a5f3d5]" // Mint Ourtala
    case "youtube":
      return "bg-[#ff6b6b]" // Solid Red Brutalist
    case "tiktok":
      return "bg-[#fbef7d]" // Yellow Ourtala
    case "linkedin":
      return "bg-[#8fc9ff]" // Solid Light Blue Brutalist
    case "whatsapp":
      return "bg-[#d6fc71]" // Lime Ourtala
    default:
      return "bg-gray-200"
  }
}