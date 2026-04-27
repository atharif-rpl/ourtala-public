"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (!res.ok) {
        toast({
          title: data.title ?? "Gagal ❌",
          description: data.message ?? "Pesan gagal dikirim, coba lagi ya.",
          variant: "destructive",
        })
        return
      }

      toast({
        title: data.title ?? "Berhasil ✨",
        description: data.message ?? "Pesan lo udah masuk ke radar kita!",
      })

      // Reset form kalau sukses
      setFormData({ name: "", email: "", message: "" })
    } catch {
      toast({
        title: "Koneksi Terputus",
        description: "Gagal terhubung ke server. Cek internet lo ya.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative max-w-xl mx-auto py-8 px-4 font-sans">
      
      {/* =========================================
          1. CONTAINER FORM (DNA: Memo Card Style)
          ========================================= */}
      <div className="relative bg-white border-[4px] border-[#0a2f1f] rounded-[2.5rem] p-8 sm:p-12 shadow-[12px_12px_0_0_#0a2f1f] transform -rotate-1">
        
        {/* Aksen Selotip Kuning di Atas */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] rounded-md shadow-sm z-20 transform rotate-2"></div>

        {/* Ornamen Bintang di Pojok */}
        <div className="absolute top-6 right-8 text-[#0a2f1f]/10 text-4xl hidden sm:block select-none pointer-events-none">✦</div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          
          {/* ================= INPUT NAMA ================= */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0a2f1f] ml-2 cursor-pointer">
              Nama Anda
            </label>
            <input
              id="name"
              type="text"
              placeholder="Siapa nama lo?"
              className="w-full bg-[#f6f9f0] border-[3px] border-[#0a2f1f] rounded-2xl px-6 py-4 text-[#0a2f1f] font-bold placeholder:text-[#0a2f1f]/30 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#d6fc71] transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              autoComplete="name"
            />
          </div>

          {/* ================= INPUT EMAIL ================= */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0a2f1f] ml-2 cursor-pointer">
              Email Aktif
            </label>
            <input
              id="email"
              type="email"
              placeholder="Biar kita bisa bales..."
              className="w-full bg-[#f6f9f0] border-[3px] border-[#0a2f1f] rounded-2xl px-6 py-4 text-[#0a2f1f] font-bold placeholder:text-[#0a2f1f]/30 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#d6fc71] transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              autoComplete="email"
            />
          </div>

          {/* ================= TEXTAREA PESAN ================= */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0a2f1f] ml-2 cursor-pointer">
              Pesan Lo
            </label>
            <textarea
              id="message"
              placeholder="Tulis aspirasi atau pertanyaan lo di sini..."
              rows={4}
              className="w-full bg-[#f6f9f0] border-[3px] border-[#0a2f1f] rounded-[1.5rem] px-6 py-4 text-[#0a2f1f] font-bold placeholder:text-[#0a2f1f]/30 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#d6fc71] transition-all resize-none custom-scrollbar"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          {/* ================= BUTTON SUBMIT ================= */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full bg-[#d6fc71] border-[3.5px] border-[#0a2f1f] py-4 rounded-2xl font-black uppercase tracking-[0.3em] text-xs sm:text-sm text-[#0a2f1f] shadow-[6px_6px_0_0_#0a2f1f] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0_0_#0a2f1f]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#0a2f1f] border-t-transparent rounded-full animate-spin"></div>
                Mengirim...
              </span>
            ) : (
              <>
                Kirim Pesan
                <Send size={18} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Sticker Bunga Kanan Bawah */}
        <div className="absolute -bottom-6 -left-4 text-5xl text-[#f37c7c] transform rotate-12 drop-shadow-[3px_3px_0_#0a2f1f] select-none pointer-events-none">
          ✿
        </div>
      </div>

      {/* Watermark Background */}
      <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-[#0a2f1f]/5 pointer-events-none select-none z-0 transform rotate-12">
        MAIL
      </div>
    </div>
  )
}