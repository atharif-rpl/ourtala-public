"use client";

import { useState, useEffect } from "react";
import { RecruitmentData } from "./types"; 
import { RecruitmentHeader } from "./RecruitmentHeader";
import { PositionCard } from "./PositionCard";
import { PositionModal } from "./PositionModal"; 
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

  return (
    <section className="relative min-h-screen py-24 px-4 bg-[#f6f9f0] font-sans overflow-hidden">
      
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c6d8c4 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Faded Background Text */}
      <div className="absolute top-[20%] left-[-5%] text-[10vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform -rotate-3">
        CAREERS
      </div>
      <div className="absolute bottom-[30%] right-[-5%] text-[8vw] font-black text-[#0a2f1f]/5 select-none pointer-events-none z-0 tracking-tighter transform rotate-6">
        IMPACT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header UI - Udah Soft Brutalism */}
        <RecruitmentHeader />

        {/* Logic Rendering: Loading vs Data */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-[4px] border-[#0a2f1f] border-t-[#d6fc71] rounded-full animate-spin mb-4 shadow-[4px_4px_0_0_#0a2f1f]"></div>
            <p className="text-[#0a2f1f] font-black uppercase tracking-widest text-xs">Menyortir Posisi...</p>
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-20 relative z-10">
            {jobs.map((job) => (
              <PositionCard 
                key={job.id} 
                position={job} 
                onSelect={() => setSelectedJob(job)} 
              />
            ))}
          </div>
        ) : (
          // Empty State - Soft Brutalism Box
          <div className="text-center bg-white border-[3px] border-[#0a2f1f] rounded-[2rem] py-16 px-6 max-w-2xl mx-auto shadow-[8px_8px_0_0_#0a2f1f] relative z-10 mb-20">
            <div className="bg-[#f37c7c] border-[3px] border-[#0a2f1f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_0_#0a2f1f] transform -rotate-6">
              <span className="text-3xl">📭</span>
            </div>
            <h3 className="text-2xl font-black text-[#0a2f1f] mb-3 uppercase tracking-tighter">Belum Ada Posisi Dibuka</h3>
            <p className="text-[#0a2f1f]/70 font-medium max-w-md mx-auto text-sm">
              Saat ini kuota pahlawan bumi sedang penuh. Tapi tenang, pantau terus halaman ini buat update selanjutnya ya! 🌱
            </p>
          </div>
        )}

        {/* CTA UI - Udah Soft Brutalism */}
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