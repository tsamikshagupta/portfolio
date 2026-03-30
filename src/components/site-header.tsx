import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { navLinks } from "@/data/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg tracking-[-0.01em] text-hero-heading transition-all duration-300 hover:opacity-70 cursor-none"
        >
          Samiksha Gupta
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 sm:gap-7">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={link.href}
                  className="link-underline text-[10px] uppercase tracking-[0.18em] text-foreground/50 transition-colors duration-300 hover:text-foreground/85 sm:text-[11px] cursor-none"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`h-px w-full transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to right, transparent, hsl(var(--border) / 0.4), transparent)"
        }}
      />
    </motion.header>
  );
}
