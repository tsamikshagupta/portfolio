import { motion } from "framer-motion";

import { skillGroups } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="section-kicker">Skills & Expertise</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-hero-heading">
              The tools behind{" "}
              <span className="font-serif italic font-normal text-hero-sub">the outcomes.</span>
            </h2>
            <p className="mt-5 text-[14.5px] leading-[1.85] text-foreground/50">
              A practical stack tuned for real delivery — not résumé decoration.
            </p>
          </motion.div>

          {/* Right — offset skill cards */}
          <div className="space-y-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 28, x: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease }}
                className={`group rounded-2xl border border-border/40 bg-card/40 p-7 sm:p-9 transition-all duration-400 hover:border-primary/15 hover:bg-card/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] ${
                  index % 2 === 1 ? "lg:ml-12" : ""
                }`}
              >
                <h3 className="font-display text-xl text-hero-heading">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item, j) => (
                    <motion.span
                      key={`${group.title}-${item}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + j * 0.03, ease }}
                      className="rounded-full border border-border/40 bg-background/50 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.13em] text-foreground/55 transition-all duration-300 hover:border-primary/25 hover:text-foreground/80 hover:shadow-[0_0_12px_rgba(139,58,58,0.06)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
