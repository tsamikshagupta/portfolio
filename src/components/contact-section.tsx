import { motion } from "framer-motion";
import { contactLinks, closingCta } from "@/data/content";

export function ContactSection() {
  return (
    <section id="contact" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-32 md:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,hsl(40_30%_90%),hsl(30_20%_98%))] opacity-80" />

      <div className="mx-auto w-full max-w-[1200px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50"
        >
          Conclusion
        </motion.p>

        <motion.h2
          initial={{ clipPath: "inset(100% 0 0 0)", y: 40 }}
          whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 max-w-4xl font-display text-5xl leading-tight text-foreground md:text-7xl lg:text-8xl"
        >
          {closingCta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl"
        >
          {closingCta.copy}
        </motion.p>
      </div>

      {/* Interactive Links Container */}
      <div className="mt-24 w-full flex-1">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-6 border-t border-foreground/10 pt-12 text-center md:gap-8">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="group relative font-mono text-[0.65rem] uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary md:text-xs"
            >
              [{link.label}]
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
