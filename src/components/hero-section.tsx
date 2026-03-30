import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroContent, heroStats } from "@/data/content";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax Values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 py-28 md:px-12 md:py-32"
    >
      {/* Background Parallax Gradient (Soft Pastels) */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(245,235,235,0.8),rgba(235,238,245,0.6))] opacity-100"
      />

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
        {/* Text Content */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
              {heroContent.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            initial={{ clipPath: "inset(100% 0 -50% 0)", y: 40 }}
            animate={{ clipPath: "inset(0% 0 -50% 0)", y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pb-4 font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-none tracking-tight text-foreground"
          >
            {heroContent.name.split("\n").map((line, i) => (
              <span key={i} className="block pb-2">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl space-y-4"
          >
            <p className="font-display text-xl text-foreground/90 md:text-2xl">
              {heroContent.headline}
            </p>
            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
              {heroContent.summary}
            </p>
          </motion.div>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-8 pt-4"
          >
            {heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-foreground/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-4 pt-4"
          >
            <a
              href="#work"
              className="magnetic-btn rounded-full bg-foreground px-8 py-3.5 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:scale-105"
            >
              {heroContent.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="magnetic-btn rounded-full border border-foreground/20 px-8 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground transition-all hover:border-foreground/40 hover:bg-foreground/5"
            >
              {heroContent.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Image Parallax & Soft Blending */}
        <motion.div
          style={{ y: yImage }}
          className="relative aspect-[3/4] w-full max-w-[460px] justify-self-center md:justify-self-end"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-hidden rounded-[2rem]"
          >
            {/* Soft Edge Blending Container */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none rounded-[2rem]" 
              style={{
                boxShadow: "inset 0 0 60px 20px hsl(40 30% 96% / 0.4)",
              }}
            />
            
            {/* The Image itself with slight desaturation & grain */}
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <img
                src="/images/samiksha-portrait.jpg"
                alt="Samiksha Gupta"
                className="h-full w-full object-cover saturate-[0.85] contrast-[1.05]"
              />
              {/* Image Grain Overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
