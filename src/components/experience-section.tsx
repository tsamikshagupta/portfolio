import { motion } from "framer-motion";
import { experienceItems } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-[1000px]">
        
        <div className="mb-24 flex items-center gap-6">
          <h2 className="font-display text-4xl text-foreground md:text-6xl">
            Experience
          </h2>
          <div className="h-[1px] flex-1 bg-foreground/10" />
        </div>

        <div className="relative border-l border-foreground/10 pl-6 md:pl-16">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.65rem] md:-left-[4.2rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(200,80,100,0.5)] transition-transform duration-500 group-hover:scale-150" />
              
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground md:text-2xl">{item.title}</h3>
                  <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary/90 mt-1">{item.org}</p>
                </div>
                <div className="shrink-0 font-mono text-[0.65rem] font-medium uppercase tracking-widest text-foreground/70 md:text-right">
                  {item.period}
                </div>
              </div>
              
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/90">
                {item.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
