"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.1
    });

    window.lenis = lenis;

    let frame;
    const loop = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return children;
}
