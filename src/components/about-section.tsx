import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { aboutContent } from "@/data/content";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-2 mt-2 lg:mr-3 lg:mt-3 inline-block">
      <motion.span style={{ opacity }} className="text-foreground transition-opacity duration-200">
        {children}
      </motion.span>
    </span>
  );
}

function ParagraphReveal({ value }: { value: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = value.split(" ");
  return (
    <p ref={containerRef} className="flex flex-wrap text-2xl font-medium leading-snug md:text-4xl lg:text-5xl lg:leading-tight">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen w-full flex-col justify-center px-6 py-24 md:px-12 lg:px-24">
      {/* Background soft element */}
      <div className="absolute left-0 top-1/4 -z-10 h-[50vh] w-[40vw] rounded-full bg-primary/5 opacity-50 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1200px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-12 font-mono text-xs uppercase tracking-widest text-foreground/50 md:mb-24 md:text-sm"
        >
          {aboutContent.title}
        </motion.p>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Main Statement Reveal */}
          <div className="col-span-1 md:col-span-9">
            <ParagraphReveal value={aboutContent.intro} />
            <div className="mt-8 md:mt-16">
              <ParagraphReveal value={aboutContent.mindset} />
            </div>
          </div>

          {/* Principle Points Aside */}
          <div className="col-span-1 mt-12 flex flex-col justify-end space-y-8 md:col-span-3 md:mt-0">
            {aboutContent.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="flex items-start gap-4"
              >
                <span className="font-mono text-xs text-primary/60">0{index + 1}</span>
                <p className="border-l border-foreground/10 pl-4 text-sm font-medium leading-relaxed text-foreground/80">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
