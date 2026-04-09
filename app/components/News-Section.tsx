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
// 1. Komponen Modal (Popup)
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform scale-100 transition-transform duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-emerald-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2 pr-4">
            {article.title}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {article.urlToImage && (
            <div className="relative h-64 mb-6 rounded-xl overflow-hidden shadow-md">
                <Image src={article.urlToImage} alt={article.title} fill className="object-cover" />
            </div>
          )}

          <p className="text-sm text-gray-500 mb-4 border-b pb-4 flex items-center gap-2">
            <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{article.source.name}</span> 
            <span>•</span>
            <span>{publishedDate}</span>
          </p>

          <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
            {fullContent}
          </p>
        </div>

        <div className="p-6 border-t border-emerald-100 sticky bottom-0 bg-white z-10">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold text-center block hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-200"
          >
            Baca Artikel Lengkap di CNN
          </a>
        </div>
      </div>
    </div>
  )
}

// =========================================================================
// 2. Komponen Kartu Berita
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
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-emerald-100 cursor-pointer group flex flex-col h-full hover:shadow-emerald-100"
    >
      <div className="relative h-48 overflow-hidden">
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-emerald-50 text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
            Lingkungan
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-tight">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow leading-relaxed">
          {article.description || "Klik untuk membaca selengkapnya mengenai berita lingkungan ini."}
        </p>
        <div className="mt-auto pt-4 border-t border-emerald-50 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="text-xs text-gray-500 font-medium">{publishedDate}</span>
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
  
  // 🔥 DAFTAR KATA KUNCI LINGKUNGAN 🔥
  // Kita gunakan ini untuk menyaring berita
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

      // Loop semua data dari API
      for (const article of apiArticles) {
          
          // Gabungkan judul dan isi cuplikan untuk pengecekan, jadikan huruf kecil
          const textToCheck = `${article.title} ${article.contentSnippet}`.toLowerCase();
          
          // 🔥 LOGIKA FILTERING 🔥
          // Cek apakah ada SALAH SATU kata kunci lingkungan di dalam teks berita
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
        
        // Batasi hanya mengambil 4 berita LINGKUNGAN
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
  }, [NEWS_API_URL]); // environmentKeywords constant doesn't need to be in dependency if defined inside or outside component properly


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
      className="py-20 bg-gradient-to-br from-emerald-50 via-lime-50 to-teal-50 relative overflow-hidden" 
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-lime-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-block mb-4">
            <span className="bg-white/80 backdrop-blur-sm text-emerald-800 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide uppercase border border-emerald-200 shadow-sm flex items-center gap-2 mx-auto w-fit">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               Isu Lingkungan Terkini
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Kabar
            <span className="bg-gradient-to-r from-emerald-600 via-lime-600 to-teal-600 bg-clip-text text-transparent">
              {" "}Bumi Kita
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Update terbaru seputar alam, konservasi, dan perubahan iklim yang dikurasi dari CNN Indonesia.
          </p>
        </div>

        {/* Status Loading */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
            <p className="text-emerald-800 font-medium">Sedang memilah berita lingkungan...</p>
          </div>
        )}
        
        {/* Status Error */}
        {error && (
            <div className="text-center bg-red-50 border border-red-200 text-red-600 px-6 py-8 rounded-2xl max-w-xl mx-auto mb-10 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <p className="font-bold mb-1">Terjadi Kesalahan</p>
                <p className="text-sm opacity-90">{error}</p>
                <button onClick={() => fetchNews()} className="mt-4 text-sm font-semibold underline hover:text-red-800">Coba Lagi</button>
            </div>
        )}
        
        {/* Grid Berita */}
        {!isLoading && articles.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {articles.map((article, index) => (
              <div
                key={article.url}
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <NewsCard article={article} onClick={setSelectedArticle} />
              </div>
            ))}
          </div>
        )}
        
        {/* State Kosong (Jika API jalan tapi tidak ada berita lingkungan) */}
        {!isLoading && !error && articles.length === 0 && (
            <div className="text-center py-16 px-4">
                <div className="bg-emerald-100/50 rounded-full p-6 w-fit mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Belum Ada Berita Lingkungan Terbaru</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                    Saat ini feed berita terbaru CNN didominasi topik lain. Silakan coba muat ulang beberapa saat lagi.
                </p>
                <button
                    onClick={() => fetchNews()} 
                    className="mt-6 text-emerald-600 font-semibold hover:text-emerald-800 flex items-center gap-2 mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    Refresh Data
                </button>
            </div>
        )}

        <div className="text-center mt-8">
            <button
                onClick={() => fetchNews()} 
                className="group bg-white text-emerald-800 border border-emerald-200 px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 shadow-md flex items-center gap-2 mx-auto"
              >
                <span>Muat Ulang Berita</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </button>
        </div>
      </div>
      
      <NewsModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </section>
  )
}