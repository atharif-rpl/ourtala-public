"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"

// =========================================================================
// INTERFACE
// =========================================================================

interface ApiArticleData {
  link: string;
  title: string;
  isoDate: string;
  image: {
    small: string;
    medium: string;
    large: string;
  };
  contentSnippet: string;
}

interface Article {
  url: string;
  title: string;
  publishedAt: string;
  urlToImage: string | null;
  description: string | null;
  content: string | null;
  source: {
    name: string;
  };
}

// =========================================================================
// 1. Komponen Modal (Popup) - SOFT BRUTALISM
// =========================================================================
interface NewsModalProps {
  article: Article | null
  onClose: () => void
}

function NewsModal({ article, onClose }: NewsModalProps) {
  if (!article) return null

  const publishedDate = new Date(article.publishedAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
  
  const fullContent = article.content || article.description || "Ringkasan berita tidak tersedia."

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a2f1f]/60 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#f6f9f0] border-[4px] border-[#0a2f1f] rounded-[2rem] shadow-[12px_12px_0_0_rgba(10,47,31,0.5)] w-full max-w-2xl transform scale-100 transition-transform duration-300 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Aksen Selotip di atas modal */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] rounded-md shadow-sm z-50 transform rotate-2"></div>

        {/* Header Modal */}
        <div className="p-6 pb-4 border-b-[3px] border-[#0a2f1f] flex justify-between items-start gap-4 sticky top-0 bg-[#c2f298] rounded-t-[1.7rem] z-10">
          <h3 className="text-xl sm:text-2xl font-black text-[#0a2f1f] leading-tight">
            {article.title}
          </h3>
          <button 
            onClick={onClose} 
            className="flex-shrink-0 bg-[#f37c7c] border-[3px] border-[#0a2f1f] w-10 h-10 rounded-full flex items-center justify-center shadow-[2px_2px_0_0_#0a2f1f] text-[#0a2f1f] hover:bg-white transition-colors hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Konten Modal */}
        <div className="p-6 overflow-y-auto bg-white flex-grow">
          {article.urlToImage && (
            <div className="relative h-48 sm:h-64 mb-6 border-[3px] border-[#0a2f1f] rounded-[1rem] overflow-hidden bg-gray-100">
                <Image src={article.urlToImage} alt={article.title} fill className="object-cover" />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 mb-4 border-b-[2px] border-dashed border-[#0a2f1f]/20 pb-4">
            <span className="font-black text-[10px] sm:text-xs text-[#0a2f1f] bg-[#fbef7d] border-[2px] border-[#0a2f1f] px-3 py-1 rounded-full uppercase tracking-wider">
              {article.source.name}
            </span> 
            <span className="text-[#0a2f1f] font-bold">•</span>
            <span className="text-xs sm:text-sm font-medium text-[#0a2f1f]/70">{publishedDate}</span>
          </div>

          <p className="text-[#0a2f1f]/80 whitespace-pre-line leading-relaxed text-sm sm:text-base font-medium">
            {fullContent}
          </p>
        </div>

        {/* Footer Modal */}
        <div className="p-5 border-t-[3px] border-[#0a2f1f] bg-white sticky bottom-0 rounded-b-[1.7rem] z-10">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#d6fc71] text-[#0a2f1f] border-[3px] border-[#0a2f1f] py-3.5 rounded-full font-black text-center block uppercase tracking-widest text-sm hover:bg-white shadow-[4px_4px_0_0_#0a2f1f] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0a2f1f] active:translate-y-1 active:shadow-none transition-all duration-200"
          >
            Baca Lanjut di CNN ➔
          </a>
        </div>
      </div>
    </div>
  )
}

// =========================================================================
// 2. Komponen Kartu Berita - SOFT BRUTALISM
// =========================================================================
function NewsCard({ article, onClick }: { article: Article, onClick: (article: Article) => void }) {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })

  return (
    <div 
      onClick={() => onClick(article)}
      className="bg-white border-[3px] border-[#0a2f1f] rounded-[1.5rem] shadow-[6px_6px_0_0_#0a2f1f] overflow-hidden transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0a2f1f] transition-all duration-200 cursor-pointer group flex flex-col h-full"
    >
      <div className="relative h-48 border-b-[3px] border-[#0a2f1f] overflow-hidden bg-[#c2f298]">
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-[#0a2f1f]/30">
            <span className="text-4xl font-black">NO IMAGE</span>
          </div>
        )}
        
        {/* Stiker Kategori */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#fbef7d] text-[#0a2f1f] border-[2px] border-[#0a2f1f] px-3 py-1 rounded-full text-[10px] font-black shadow-[2px_2px_0_0_#0a2f1f] uppercase tracking-widest transform -rotate-3 inline-block">
            Lingkungan
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow relative bg-white">
        <h3 className="text-lg font-black text-[#0a2f1f] mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-tight">
          {article.title}
        </h3>
        <p className="text-[#0a2f1f]/70 font-medium mb-4 text-xs sm:text-sm line-clamp-3 flex-grow leading-relaxed">
          {article.description || "Klik untuk membaca selengkapnya mengenai berita lingkungan ini."}
        </p>
        
        <div className="mt-auto pt-4 border-t-[2px] border-dashed border-[#0a2f1f]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📰</span>
            <span className="text-xs text-[#0a2f1f]/70 font-bold uppercase tracking-wider">{publishedDate}</span>
          </div>
          {/* Ikon panah kecil pas di hover */}
          <div className="w-6 h-6 bg-[#0a2f1f] rounded-full flex items-center justify-center text-[#d6fc71] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// =========================================================================
// 3. Komponen Utama Section
// =========================================================================
export default function EnvironmentalNewsSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null) 
  const sectionRef = useRef<HTMLElement>(null)

  const NEWS_API_URL = "https://berita-indo-api.vercel.app/v1/cnn-news/";
  
  const environmentKeywords = [
    "lingkungan", "alam", "hutan", "sampah", "plastik", 
    "iklim", "pemanasan global", "polusi", "banjir", "bencana", 
    "konservasi", "energi", "hijau", "satwa", "flora", "fauna", 
    "bumi", "ekosistem", "limbah", "daur ulang", "cuaca", "gempa",
    "kebakaran", "taman nasional", "gambut", "emisi", "karbon"
  ];
 
  const fetchNews = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(NEWS_API_URL);

      if (!response.ok) {
        throw new Error(`Gagal mengambil data! Status: ${response.status}`);
      }

      const result = await response.json(); 
      const apiArticles: ApiArticleData[] = result.data || [];
      const tempArticles: Article[] = [];

      for (const article of apiArticles) {
          const textToCheck = `${article.title} ${article.contentSnippet}`.toLowerCase();
          
          const isRelatedToEnvironment = environmentKeywords.some(keyword => 
            textToCheck.includes(keyword)
          );

          if (isRelatedToEnvironment) {
            tempArticles.push({
              url: article.link,
              title: article.title,
              publishedAt: article.isoDate,
              urlToImage: article.image.large || article.image.medium || null,
              description: article.contentSnippet,
              content: article.contentSnippet, 
              source: {
                name: "CNN Indonesia" 
              }
            });
          }
        
        if (tempArticles.length >= 4) break;
      }
      
      setArticles(tempArticles);

    } catch (err) { 
      if (err instanceof Error) {
        console.error("Gagal mengambil berita:", err);
        setError(`Gagal memuat berita: ${err.message}.`);
      } else {
        setError("Gagal memuat berita: Terjadi kesalahan yang tidak diketahui.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [NEWS_API_URL]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          fetchNews()
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [fetchNews])
  
  useEffect(() => {
      if (selectedArticle) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'unset';
      }
      return () => {
          document.body.style.overflow = 'unset';
      };
  }, [selectedArticle]);


  return (
    <section
      id="env-news"
      ref={sectionRef}
      // Tema Soft Brutalism (Krem + Dotted Pattern)
      className="py-20 lg:py-32 bg-[#f6f9f0] relative overflow-hidden font-sans" 
    >
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* Faded Background Text */}
      <div className="absolute top-[5%] right-[-5%] text-[10vw] font-black text-emerald-900/5 select-none pointer-events-none z-0 tracking-tighter transform rotate-3">
        NEWS
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Label Pill Neo-Brutalist */}
          <div className="inline-block mb-4">
            <span className="bg-[#fbef7d] text-[#0a2f1f] px-5 py-2 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase border-[3px] border-[#0a2f1f] shadow-[3px_3px_0_0_#0a2f1f] flex items-center gap-2 mx-auto w-fit transform rotate-1">
               <span className="w-2.5 h-2.5 rounded-full bg-[#f37c7c] animate-pulse border-[1.5px] border-[#0a2f1f]"></span>
               Isu Terkini
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-black text-[#0a2f1f] mb-4 leading-none uppercase tracking-tighter">
            Kabar
            <span className="font-serif italic font-medium text-emerald-600 normal-case ml-2">
              Bumi Kita.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#0a2f1f]/70 max-w-2xl mx-auto leading-relaxed">
            Update terbaru seputar alam, konservasi, dan perubahan iklim yang dikurasi langsung dari CNN Indonesia.
          </p>
        </div>

        {/* ================= LOADING STATE ================= */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 border-[4px] border-[#0a2f1f] border-t-[#d6fc71] rounded-full animate-spin mb-4 shadow-[4px_4px_0_0_#0a2f1f]"></div>
            <p className="text-[#0a2f1f] font-black uppercase tracking-widest text-xs">Mencari Sinyal Hijau...</p>
          </div>
        )}
        
        {/* ================= ERROR STATE ================= */}
        {error && (
            <div className="text-center bg-[#f37c7c] border-[3px] border-[#0a2f1f] text-[#0a2f1f] px-6 py-8 rounded-[1.5rem] max-w-xl mx-auto mb-10 shadow-[6px_6px_0_0_#0a2f1f] transform -rotate-1">
                <span className="text-4xl block mb-2">📡</span>
                <p className="font-black text-xl mb-1 uppercase tracking-tight">Koneksi Terputus!</p>
                <p className="text-sm font-medium opacity-90">{error}</p>
                <button 
                  onClick={() => fetchNews()} 
                  className="mt-5 bg-white border-[2px] border-[#0a2f1f] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#fbef7d] transition-colors shadow-[2px_2px_0_0_#0a2f1f]"
                >
                  Coba Tarik Ulang
                </button>
            </div>
        )}
        
        {/* ================= GRID BERITA ================= */}
        {!isLoading && articles.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {articles.map((article, index) => (
              <div
                key={article.url}
                className={`transition-all duration-700 h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <NewsCard article={article} onClick={setSelectedArticle} />
              </div>
            ))}
          </div>
        )}
        
        {/* ================= EMPTY STATE ================= */}
        {!isLoading && !error && articles.length === 0 && (
            <div className="text-center bg-white border-[3px] border-[#0a2f1f] rounded-[2rem] py-16 px-6 max-w-2xl mx-auto shadow-[8px_8px_0_0_#0a2f1f]">
                <div className="bg-[#c2f298] border-[3px] border-[#0a2f1f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_0_#0a2f1f] transform rotate-6">
                    <span className="text-3xl">🕊️</span>
                </div>
                <h3 className="text-2xl font-black text-[#0a2f1f] mb-3 uppercase tracking-tighter">Belum Ada Kabar Hijau</h3>
                <p className="text-[#0a2f1f]/70 font-medium max-w-md mx-auto text-sm">
                    Saat ini feed berita terbaru CNN sedang didominasi topik lain. Silakan coba muat ulang radar kita beberapa saat lagi.
                </p>
                <button
                    onClick={() => fetchNews()} 
                    className="mt-8 bg-[#fbef7d] border-[3px] border-[#0a2f1f] px-6 py-3 rounded-full font-black text-[#0a2f1f] text-xs uppercase tracking-widest hover:bg-white hover:-translate-y-1 transition-all duration-200 shadow-[4px_4px_0_0_#0a2f1f] flex items-center gap-2 mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    Refresh Radar
                </button>
            </div>
        )}

        {/* ================= TOMBOL MUAT ULANG BAWAH ================= */}
        {!isLoading && !error && articles.length > 0 && (
          <div className="text-center mt-8">
              <button
                  onClick={() => fetchNews()} 
                  className="group bg-white text-[#0a2f1f] border-[3px] border-[#0a2f1f] px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#d6fc71] hover:-translate-y-1 transition-all duration-200 shadow-[6px_6px_0_0_#0a2f1f] active:shadow-none active:translate-y-1 flex items-center gap-3 mx-auto"
                >
                  <span className="text-lg">↻</span>
                  <span>Muat Ulang Berita</span>
              </button>
          </div>
        )}

      </div>
      
      {/* MODAL POPUP */}
      <NewsModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </section>
  )
}