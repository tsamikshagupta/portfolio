import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "@/data/content";

export function TechMarquee() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="skills" className="relative flex min-h-screen w-full flex-col justify-center px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            Technical Arsenal
          </p>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-6xl lg:text-7xl">
            Capabilities.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Interactive Categories List */}
          <div className="flex flex-col justify-center">
            {skillGroups.map((group, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={group.title}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="group relative cursor-crosshair border-b border-foreground/10 py-6 md:py-8"
                >
                  <motion.div
                    animate={{
                      paddingLeft: isActive ? "2rem" : "0rem",
                      color: isActive ? "hsl(var(--foreground))" : "hsl(var(--foreground) / 0.4)",
                    }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                    className="flex items-center gap-6"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest opacity-50">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-3xl md:text-5xl">
                      {group.title}
                    </h3>
                  </motion.div>

                  {/* Hover indicator line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-primary"
                  />
                </div>
              );
            })}
          </div>

          {/* Dynamic Staggered Reveal Area */}
          <div className="relative flex min-h-[400px] w-full items-center justify-center rounded-3xl border border-foreground/5 bg-foreground/[0.02] p-8 md:min-h-[500px] lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex h-full w-full flex-wrap content-center items-center justify-center gap-4 md:gap-6"
              >
                {skillGroups[activeIndex].items.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.6,
                      delay: i * 0.04,
                    }}
                    whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
                    className="cursor-default rounded-full border border-foreground/10 bg-white/40 px-6 py-3 font-mono text-sm tracking-wide text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary md:px-8 md:py-4 md:text-base"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
