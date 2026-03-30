import { motion } from "framer-motion";

import { achievements } from "@/data/content";

export function AchievementsSection() {
  return (
    <section id="highlights" className="section-shell border-y border-border/60 bg-card/20">
      <div className="container">
        <p className="section-kicker">Achievements</p>
        <h2 className="section-title">Highlights that reflect capability and consistency</h2>

        <div className="mt-11 grid gap-4 md:grid-cols-2 lg:gap-5">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="liquid-glass rounded-xl border border-border/70 bg-background/35 p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.17em] text-secondary">{item.label}</p>
              <h3 className="mt-2 text-2xl leading-tight text-hero-heading">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
