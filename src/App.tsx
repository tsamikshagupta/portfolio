import { useEffect } from "react";
import Lenis from "lenis";

import { Cursor } from "./components/layout/Cursor";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { WorkSection } from "./components/work-section";
import { ExperienceSection } from "./components/experience-section";
import { TechMarquee } from "./components/tech-marquee";
import { ContactSection } from "./components/contact-section";

function App() {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Provide Lenis to global window for potential sync with framer-motion if needed
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative font-sans text-foreground bg-background selection:bg-primary/20 selection:text-primary">
      {/* Global Grain Overlay */}
      <div className="noise-overlay" />

      {/* Global Context-Aware Cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex flex-col relative z-10 w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        
        {/* Visual separation logic could go here, but sections have padding */}
        <WorkSection />
        
        <TechMarquee />
        <ExperienceSection />
        
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
