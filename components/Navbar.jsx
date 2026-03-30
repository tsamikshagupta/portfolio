"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, observedSections } from "../lib/navigation";
import useActiveSection from "../lib/useActiveSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(observedSections);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    if (window.lenis) {
      window.lenis.scrollTo(section, { offset: -74 });
    } else {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-cypress/15 bg-cream/90 py-3 backdrop-blur" : "bg-transparent py-5"
      }`}
    >
      <div className="section-inner flex items-center justify-between px-[var(--space-section-x)]">
        <a
          href="#hero"
          onClick={(event) => scrollToSection(event, "hero")}
          className="font-display text-2xl text-moss md:text-3xl"
        >
          Samiksha Terala
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cypress/20 text-cypress md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={`group relative inline-block font-mono text-[11px] uppercase tracking-[0.16em] transition ${
                    isActive ? "text-moss" : "text-cypress/80 hover:text-moss"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {isOpen ? (
        <div className="border-t border-cypress/15 bg-cream/95 px-[var(--space-section-x)] py-3 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={`mobile-${item.id}`}>
                  <a
                    href={item.href}
                    onClick={(event) => scrollToSection(event, item.id)}
                    className={`block font-mono text-xs uppercase tracking-[0.16em] ${
                      isActive ? "text-moss" : "text-cypress"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
