'use client'; // WAJIB: Agar jalan di browser (bukan server)

import { useEffect, useState } from 'react';
import ClientRoot from "./ClientRoot";
import type { DonationProject } from "./components/donation/types";

export default function Home() {
  // 1. Siapkan tempat penampungan data
  const [projects, setProjects] = useState<DonationProject[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Ambil data dari API Vercel saat halaman dibuka
  useEffect(() => {
    // GANTI URL INI nanti dengan Domain Vercel kamu (misal: https://ourtala-admin.vercel.app/api/donations)
    // Untuk sekarang (dev), pakai localhost dulu asal server admin nyala
    const API_URL = 'https://ourtalawebadmin.vercel.app/api/donations';

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((data) => {
        // --- PERBAIKAN DI SINI (åMAPPING DATA) ---
        // Kita ubah nama 'targetAmount' jadi 'goal' dan 'currentAmount' jadi 'raised'
        const dataYangSudahDirapikan = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          longDescription: item.longDescription || item.description, // Panjang (kalau kosong pakai yg singkat)

          // Mapping Link Donasi
          donationLink: item.donationLink || "https://forms.gle/defaultLink", // Pakai link dari admin

          // INI KUNCINYA BIAR GAK RpNaN:
          goal: item.targetAmount,       // Database bilang 'targetAmount', kita ubah jadi 'goal'
          raised: item.currentAmount,    // Database bilang 'currentAmount', kita ubah jadi 'raised'

          imageUrl: item.imageUrl || "https://via.placeholder.com/400x200", // Gambar default kalau kosong
          location: item.location || "Online",
          whatsappLink: item.whatsappLink,
          category: "General" // Tambahan default kalau type DonationProject butuh category
        }));

        setProjects(dataYangSudahDirapikan); // Simpan data yang sudah rapi
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
        setLoading(false);
      });
  }, []);

  // 3. Tampilkan Loading (Opsional, biar rapi)
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  // 4. Kirim data asli ke ClientRoot
  return <ClientRoot projects={projects} />;
}