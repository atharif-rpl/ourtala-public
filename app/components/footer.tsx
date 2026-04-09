"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-orange-50 py-10 md:py-16 px-6 border-t border-orange-100/50">
      <div className="container mx-auto max-w-6xl">

        {/* GRID UTAMA:
           - Mobile: grid-cols-2 (Agar menu link bisa jejer 2 ke samping)
           - Laptop/PC: lg:grid-cols-5 (Agar semua menyebar horizontal)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 lg:gap-12">

          {/* 1. BAGIAN LOGO & MASCOT 
            - Mobile: col-span-2 (Mengambil lebar penuh baris pertama)
            - Laptop: col-span-2 (Tetap lebar, tapi di kiri)
          */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-40 h-40 md:w-52 md:h-52 mb-3">
              <Image
                src="/images/mascot/mascotpohon.webp"
                alt="Ourtala Mascot"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 208px"
                priority
              />
            </div>
            <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
              Misi kami adalah membawa inovasi berkelanjutan ke dalam kehidupan sehari-hari Anda.
            </p>
          </div>

          {/* 2. MENU "OURTALA"
            - Mobile: col-span-1 (Setengah layar kiri)
            - Teks rata kiri di mobile agar rapi sejajar dengan menu sebelah
          */}
          <div className="col-span-1 flex flex-col items-start pl-2 md:pl-0">
            <h3 className="font-bold text-slate-800 text-lg mb-4 relative inline-block">
              Ourtala
              {/* Dekorasi garis bawah kecil */}
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-orange-300 rounded-full"></span>
            </h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-slate-600 hover:text-orange-600 hover:pl-1 transition-all text-sm block">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-orange-600 hover:pl-1 transition-all text-sm block">Gallery</a></li>
              <li><a href="#" className="text-slate-600 hover:text-orange-600 hover:pl-1 transition-all text-sm block">Career</a></li>
            </ul>
          </div>

          {/* 3. MENU "INFORMASI"
            - Mobile: col-span-1 (Setengah layar kanan)
          */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="font-bold text-slate-800 text-lg mb-4 relative inline-block">
              Informasi
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-orange-300 rounded-full"></span>
            </h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-slate-600 hover:text-orange-600 hover:pl-1 transition-all text-sm block">Tentang Kami</a></li>
              <li><a href="#" className="text-slate-600 hover:text-orange-600 hover:pl-1 transition-all text-sm block">FAQ</a></li>
              <li><a href="#" className="text-slate-600 hover:text-orange-600 hover:pl-1 transition-all text-sm block">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* 4. BAGIAN SOSMED
            - Mobile: col-span-2 (Mengambil lebar penuh di bawah menu)
            - Layout: Rata tengah di mobile
          */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0">
            <h3 className="font-bold text-slate-800 text-lg mb-4">Ikuti Kami</h3>
            <div className="flex flex-col gap-3 w-full max-w-[200px] lg:max-w-none">
              <a

                target="_blank"

                rel="noopener noreferrer"

                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="text-sm font-medium text-slate-700">@Ourtala.id</span>

              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-slate-200/60">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs md:text-sm text-center md:text-left">
              © 2025 Ourtala. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors text-xs md:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors text-xs md:text-sm">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}