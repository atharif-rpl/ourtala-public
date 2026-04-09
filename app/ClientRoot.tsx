"use client";

import { useState, useEffect } from "react";

// Komponen Halaman
import IntroAnimation from "./components/IntroAnimation";
import AnimatedHero from "./components/animated-hero/AnimatedHero";
import { AnimatedGallery } from "./components/gallery";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import AnimatedSocialSection from "./components/social/EnhancedSocialSection";
import AnimatedNewsSection from "./components/News-Section";
import AnimatedAbout from "./components/animated-about";
import AnimatedTeamSection from "./components/team-section/AnimatedTeamSection";
import DonationSectionProps from "./components/donation";
import RecruitmentSection from "./components/reqruitment/RecruitmentSection";



// Komponen Popup Baru
import NewsCarouselPopup from "./components/popups/components/NewsCarouselPopup";
import CautionPopup from "./components/popups/components/CautionPopup";

// Types
import type { DonationProject } from "./components/donation/types";

interface ClientRootProps {
  projects: DonationProject[];
}

export default function ClientRoot({ projects }: ClientRootProps) {
  // --- STATE ---
  const [showIntro, setShowIntro] = useState(true);
  const [showNewsPopup, setShowNewsPopup] = useState(false);
  const [showCautionAnimation, setShowCautionAnimation] = useState(false);
  const [hideCautionAnimation, setHideCautionAnimation] = useState(false);

  // --- LOGIC: Intro Selesai ---
  const handleIntroAnimationComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setShowNewsPopup(true);
    }, 600);
  };

  // --- LOGIC: Navigasi & Close Popup ---
  const handleCloseNewsPopup = () => {
    setShowNewsPopup(false);
  };

  const handleNavigateToSection = (sectionId: string) => {
    setShowNewsPopup(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  // --- EFFECT: Lock Body Scroll (Intro & Popup) ---
  useEffect(() => {
    if (showIntro || showNewsPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro, showNewsPopup]);

  // --- EFFECT: Scroll Detection (Caution Popup) ---
  useEffect(() => {
    if (showIntro || showNewsPopup) return;

    const handleScroll = () => {
      const positionsSection = document.getElementById("positions");
      if (positionsSection) {
        const rect = positionsSection.getBoundingClientRect();
        // Trigger saat elemen terlihat dan belum pernah muncul
        if (rect.top < window.innerHeight && rect.top > 0 && !showCautionAnimation) {
          setShowCautionAnimation(true);
          // Auto hide after 5s
          const timer = setTimeout(() => setHideCautionAnimation(true), 5000);
          return () => clearTimeout(timer);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showIntro, showCautionAnimation, showNewsPopup]);

  return (
    <main>
      {showIntro ? (
        <IntroAnimation onAnimationComplete={handleIntroAnimationComplete} />
      ) : (
        <>
          <NavBar />
          <AnimatedHero />

          {/* 🔥 NEWS POPUP (Clean Component) 🔥 */}
          <NewsCarouselPopup
            isOpen={showNewsPopup}
            onClose={handleCloseNewsPopup}
            onNavigate={handleNavigateToSection}
          />

          <AnimatedAbout />

          {/* Trigger untuk Caution Popup */}
          <div id="positions" className="h-1 w-full opacity-0 pointer-events-none"></div>

          <div id="recruitment-section">
          <RecruitmentSection />
          </div>

          <div id="news-section">
            <AnimatedNewsSection />
          </div>

          <AnimatedTeamSection />

          <div id="donation-section">
            {projects && projects.length > 0 && (
              <DonationSectionProps projects={projects} />
            )}
          </div>

          <AnimatedGallery />
          <AnimatedSocialSection />
          <Footer />

          {/* 🔥 CAUTION POPUP (Clean Component) 🔥 */}
          {showCautionAnimation && !hideCautionAnimation && (
            <CautionPopup />
          )}
        </>
      )}
    </main>
  );
}