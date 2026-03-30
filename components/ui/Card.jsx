"use client";

import { motion } from "framer-motion";

export default function Card({ children, className = "", interactive = false, as: Component = "div" }) {
  const Wrapper = interactive ? motion.div : Component;
  const motionProps = interactive
    ? {
        whileHover: { y: -8, scale: 1.01 },
        transition: { type: "spring", stiffness: 190, damping: 20 }
      }
    : {};

  return (
    <Wrapper
      className={`surface-card overflow-hidden ${interactive ? "will-change-transform hover:shadow-[0_24px_55px_rgba(26,31,20,0.15)]" : ""} ${className}`}
      {...motionProps}
    >
      {children}
    </Wrapper>
  );
}
