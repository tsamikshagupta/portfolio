import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/data/content";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide navbar if scrolling down past 300px, show if scrolling up
    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Shrink navbar slightly when scrolled down
    if (latest > 100) {
      setCompact(true);
    } else {
      setCompact(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-1/2 top-4 z-[90] flex -translate-x-1/2 items-center justify-between rounded-full border border-[rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-500 will-change-transform ${
        compact
          ? "w-[min(90vw,900px)] bg-background/60 py-2 shadow-sm"
          : "w-[min(94vw,1200px)] bg-background/30 py-4 shadow-none"
      }`}
    >
      <div className="pl-6 md:pl-8">
        <a
          href="#hero"
          className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/90 transition-colors hover:text-primary"
        >
          Samiksha Gupta
        </a>
      </div>

      <nav className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group relative px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground/95"
          >
            {link.label}
            <span className="absolute bottom-1.5 left-4 right-4 h-[1px] origin-left scale-x-0 bg-primary/40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
          </a>
        ))}
      </nav>

      <div className="pr-2 md:pr-4">
        <a
          href="#contact"
          className="magnetic-btn inline-flex items-center justify-center rounded-full border border-foreground/15 bg-background/80 px-6 py-2.5 font-mono text-[0.65rem] uppercase tracking-widest text-foreground/80 transition-all hover:bg-background hover:text-primary"
        >
          Let's Talk
        </a>
      </div>
    </motion.header>
  );
}
