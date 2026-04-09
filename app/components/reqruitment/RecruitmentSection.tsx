// /components/recruitment/RecruitmentSection.tsx

"use client";

import { useState, useEffect } from "react";
import { RecruitmentData } from "./types"; // Pastikan tipe data sesuai
import { RecruitmentHeader } from "./RecruitmentHeader";
import { PositionCard } from "./PositionCard";
import { PositionModal } from "./PositionModal"; // Atau RecruitmentModal tergantung nama file kamu
import { RecruitmentCta } from "./RecruitmentCta";

export default function RecruitmentSection() {
  const [jobs, setJobs] = useState<RecruitmentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<RecruitmentData | null>(null);

  // FETCH DATA DARI API ADMIN
  useEffect(() => {
    // URL API Vercel Admin Kamu
    const API_URL = 'https://ourtalawebadmin.vercel.app/api/recruitment';

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Filter hanya lowongan yang statusnya OPEN
        const activeJobs = data.filter((item: RecruitmentData) => item.isOpen);
        setJobs(activeJobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data lowongan:", err);
        setLoading(false);
      });
  }, []);

  // Jika loading atau tidak ada lowongan, bisa return null atau loading spinner
  // Tapi biar layout gak loncat, kita biarkan kerangka section tetap ada
  
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-lime-50 to-teal-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header UI Tetap Sama */}
        <RecruitmentHeader />

        {/* Logic Rendering: Loading vs Data */}
        {loading ? (
          <div className="text-center py-20 text-emerald-600 font-medium animate-pulse">
            Sedang memuat lowongan tersedia...
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {jobs.map((job) => (
              <PositionCard 
                key={job.id} 
                position={job} 
                onSelect={() => setSelectedJob(job)} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            Saat ini belum ada posisi yang dibuka. Pantau terus ya! 🌱
          </div>
        )}

        {/* CTA UI Tetap Sama */}
        <RecruitmentCta />
      </div>

      {/* Modal Popup */}
      {selectedJob && (
        <PositionModal 
          position={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </section>
  );
}