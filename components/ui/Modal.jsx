"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, subtitle, body, stack = [] }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="surface-card max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 md:p-8"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-3xl text-moss">{title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-olive">{subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cypress/20 text-cypress transition hover:border-cypress/40"
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-sm leading-7 text-cypress/85 md:text-base">{body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
