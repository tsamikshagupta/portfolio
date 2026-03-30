import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [variant, setVariant] = useState<"default" | "hover" | "drag">("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const minMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest(".magnetic-btn") || target.closest("[role='button']")) {
        setVariant("hover");
      } else if (target.closest(".draggable")) {
        setVariant("drag");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", minMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", minMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "rgba(100, 90, 80, 0.4)",
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(100, 90, 80, 0.1)",
      borderColor: "rgba(100, 90, 80, 0.5)",
      mixBlendMode: "difference" as const,
    },
    drag: {
      width: 60,
      height: 60,
      backgroundColor: "transparent",
      borderColor: "rgba(100, 90, 80, 0.6)",
    },
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-solid backdrop-blur-[2px]"
        initial="default"
        animate={variant}
        variants={variants}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {variant === "drag" && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono tracking-widest text-[#3a3530]">
            DRAG
          </span>
        )}
      </motion.div>
    </>
  );
}
