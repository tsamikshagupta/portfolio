"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import SectionWrapper from "../ui/SectionWrapper";
import { projectLibrary } from "../../projects/data";

const filters = [
  { key: "all", label: "All" },
  { key: "ml", label: "ML" },
  { key: "mern", label: "MERN" },
  { key: "data", label: "Data Engineering" },
  { key: "nlp", label: "NLP" }
];

export default function ProjectLibrary() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projectLibrary;
    return projectLibrary.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <SectionWrapper
      id="projects"
      label="06B — Project Library"
      title="Supporting Systems"
      subtitle="Additional systems that reinforce how I think about reliability, delivery, and scale."
      className="bg-gradient-to-b from-cream to-surface/60"
    >
      <div className="story-item mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            variant={activeFilter === filter.key ? "secondary" : "ghost"}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.key}
              layout
              className="story-item"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28 }}
            >
              <Card interactive className="h-full p-6">
                <button type="button" onClick={() => setActiveProject(project)} className="h-full text-left">
                  <h3 className="font-display text-3xl text-moss">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cypress/85">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={`${project.key}-${tag}`} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title}
        subtitle={activeProject?.subtitle}
        body={activeProject?.body}
        stack={activeProject?.stack || []}
      />
    </SectionWrapper>
  );
}
