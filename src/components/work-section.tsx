import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { projects } from "@/data/content";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Hover Tilt & Zoom values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
      className="draggable relative h-[60vh] w-[85vw] max-w-[900px] shrink-0 transform-gpu cursor-grab overflow-hidden rounded-[2rem] bg-foreground/5 shadow-2xl transition-all active:cursor-grabbing md:h-[70vh] md:w-[65vw]"
    >
      <div className="absolute inset-0 z-0 select-none">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/60 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-12">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-white backdrop-blur-md">
            {project.role}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-white/60">
            {project.period}
          </span>
        </div>

        <h3 className="mb-4 font-display text-4xl leading-none text-white md:text-6xl drop-shadow-lg">
          {project.title}
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50">Problem</p>
            <p className="mt-2 text-sm leading-relaxed text-white/90">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50">Approach & Tech</p>
            <p className="mt-2 text-sm leading-relaxed text-white/90">{project.approach}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="rounded-md border border-white/20 bg-white/5 px-2 py-1 font-mono text-[0.6rem] uppercase text-white/80 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="relative flex min-h-screen w-full flex-col py-32 overflow-hidden">
      <div className="mb-16 px-6 md:px-12 lg:px-24">
        <h2 className="font-display text-6xl text-foreground md:text-8xl">Selected Work.</h2>
        <p className="mt-4 font-mono text-sm uppercase tracking-widest text-foreground/50">
          Drag horizontally to explore
        </p>
      </div>

      {/* Draggable Carousel */}
      <div
        ref={constraintsRef}
        className="relative flex w-full flex-1 items-center px-6 md:px-12 lg:px-24 overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="flex w-max flex-row gap-8 md:gap-16 pb-24"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}

          {/* End card filler */}
          <div className="flex h-full w-[20vw] shrink-0 items-center justify-center">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 text-center">
              End of Gallery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
