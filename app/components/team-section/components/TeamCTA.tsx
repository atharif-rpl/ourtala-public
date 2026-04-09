"use client";

// import { useRouter } from "next/navigation";

export default function TeamCTA() {
  // const router = useRouter();

  return (
    <div className="text-center mt-12 md:mt-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-emerald-100 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Want to Join Our Mission?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We&apos;re always looking for passionate individuals who share our vision of creating sustainable communities.
          Join us in making a difference!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
           onClick={() => window.open("https://forms.gle/rJ9StWT2qgC3Lsv9A", "_blank")}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          >
            View Open Positions
          </button>
          <button
            onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282110627537&text=Halo%21+Saya+tertarik+dengan+layanan+Anda.&type=phone_number&app_absent=0", "_blank")}
            className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}