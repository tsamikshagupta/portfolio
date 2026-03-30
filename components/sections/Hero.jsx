"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { heroData } from "../../projects/data";

const headlineWords = heroData.heading
  .replace(".", "")
  .split(" ")
  .filter(Boolean);

export default function Hero() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 120, damping: 18, mass: 0.45 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18, mass: 0.45 });

  const shadowX = useTransform(springY, [-10, 10], [-20, 20]);

  const onMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    rotateX.set((0.5 - y) * 10);
    rotateY.set((x - 0.5) * 12);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const goToWork = (event) => {
    event.preventDefault();
    const target = document.getElementById("featured");
    if (!target) return;
    if (window.lenis) {
      window.lenis.scrollTo(target, { offset: -76 });
      return;
    }
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-moss px-[var(--space-section-x)] pb-20 pt-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-32 h-72 w-72 rounded-full bg-gradient-to-br from-olive/40 to-cypress/0 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-aloe/10 to-cypress/0 blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, -26, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-inner relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.88fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-olive md:text-xs"
          >
            {heroData.tagline}
          </motion.p>

          <h1 className="mt-6 text-balance font-display text-[2.65rem] font-light leading-[0.9] text-aloe sm:text-6xl lg:text-[6.9rem]">
            {headlineWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.17 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`mr-[0.22em] inline-block ${word.toLowerCase() === "scale" ? "italic text-cedar" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.56 }}
            className="mt-8 max-w-xl text-sm leading-7 text-cedar md:text-base"
          >
            {heroData.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.54 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {heroData.roles.map((role) => (
              <span key={role} className="chip border-cypress/45 text-aloe">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.5 }}
            className="mt-10"
          >
            <Button as="a" href="#featured" onClick={goToWork}>
              Explore Work
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="story-media"
          style={{ perspective: 1000 }}
          onMouseMove={onMove}
          onMouseLeave={resetTilt}
        >
          <motion.div
            style={{ rotateX: springX, rotateY: springY, x: shadowX }}
            className="relative mx-auto max-w-[25rem] rounded-[2rem] border border-cypress/35 bg-gradient-to-br from-cypress/45 to-moss/90 p-4 shadow-[0_34px_80px_rgba(26,31,20,0.5)]"
          >
            <div className="absolute inset-0 rounded-[1.7rem] bg-[radial-gradient(circle_at_20%_20%,rgba(218,222,216,0.2),transparent_55%)]" />
            <div className="relative overflow-hidden rounded-[1.45rem] border border-aloe/20">
              <Image
                src="/images/profile-portrait.svg"
                alt="Portrait area for Samiksha Terala"
                width={900}
                height={1100}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="relative mt-4 grid grid-cols-3 gap-2">
              {heroData.metrics.map((item) => (
                <div key={item.label} className="rounded-xl border border-cypress/35 bg-ink/25 p-3">
                  <p className="font-display text-3xl leading-none text-aloe">{item.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-olive">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
