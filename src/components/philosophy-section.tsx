import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { philosophyContent } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "80%"]);

  return (
    <section ref={sectionRef} id="philosophy" className="section-shell relative overflow-hidden">
      <div className="section-divider absolute left-0 right-0 top-0" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, hsla(0, 45%, 45%, 0.06) 0%, transparent 70%)" }}
      />

      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            className="section-kicker"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            {philosophyContent.title}
          </motion.p>

          <motion.div
            className="mx-auto mt-5 h-px bg-primary/25"
            style={{ width: lineWidth }}
          />

          <motion.blockquote
            style={{ y: quoteY }}
            className="mt-12"
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block font-display text-[clamp(1.7rem,3.8vw,3.2rem)] leading-[1.15] tracking-[-0.01em] text-hero-heading"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
              >
                "{philosophyContent.statement}"
              </motion.span>
            </span>
          </motion.blockquote>

          <motion.div
            className="mx-auto mt-7 h-px w-16 bg-primary/15"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-8 mx-auto max-w-2xl text-[15px] leading-[1.9] text-foreground/50"
          >
            {philosophyContent.vision}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
