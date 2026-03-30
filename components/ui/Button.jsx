"use client";

import { motion } from "framer-motion";

const variants = {
  primary:
    "border border-aloe bg-aloe text-moss hover:bg-cedar hover:text-cream shadow-[0_10px_30px_rgba(26,31,20,0.18)]",
  secondary:
    "border border-cypress/35 bg-surface/70 text-cypress hover:border-cypress/60 hover:bg-surface-strong/70",
  ghost: "border border-cypress/20 bg-transparent text-cypress hover:border-cypress/40 hover:bg-cypress/5"
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  as: Component = "button",
  ...props
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }} className="inline-flex">
      <Component
        type={Component === "button" ? type : undefined}
        className={`inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] transition ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
