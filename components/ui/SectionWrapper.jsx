"use client";

import { useEffect, useRef } from "react";

export default function SectionWrapper({ id, label, title, subtitle, dark = false, className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    let context;

    const setup = async () => {
      const gsapModule = await import("gsap");
      const triggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTrigger = triggerModule.ScrollTrigger || triggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const heading = gsap.utils.toArray(".story-heading");
        const items = gsap.utils.toArray(".story-item");
        const media = gsap.utils.toArray(".story-media");

        if (heading.length) {
          gsap.fromTo(
            heading,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 78%"
              }
            }
          );
        }

        if (items.length) {
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 28, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.72,
              ease: "power2.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 72%"
              }
            }
          );
        }

        if (media.length) {
          gsap.fromTo(
            media,
            { autoAlpha: 0, scale: 0.93, y: 16 },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 1.0,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 75%"
              }
            }
          );
        }
      }, ref);
    };

    setup();

    return () => context?.revert();
  }, []);

  return (
    <section id={id} className={`section-shell ${className}`}>
      <div ref={ref} className="section-inner">
        <header className="max-w-3xl">
          {label ? (
            <p className={`mono-label story-heading ${dark ? "text-olive/95" : ""}`}>{label}</p>
          ) : null}
          {title ? (
            <h2 className={`section-title story-heading ${dark ? "text-aloe" : ""}`}>{title}</h2>
          ) : null}
          {subtitle ? (
            <p className={`story-heading mt-5 max-w-2xl text-sm leading-7 md:text-base ${dark ? "text-cedar" : "text-cypress/80"}`}>
              {subtitle}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
