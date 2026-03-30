import Image from "next/image";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { featuredProjects } from "../../projects/data";

export default function FeaturedProjects() {
  return (
    <SectionWrapper
      id="featured"
      label="06 — Featured Projects"
      title="Signature Work"
      subtitle="Selected systems where architecture, optimization, and deployment depth converged into measurable outcomes."
    >
      <div className="mt-10 space-y-6">
        {featuredProjects.map((project) => (
          <Card key={project.key} className="story-item grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-cypress/15 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="story-media overflow-hidden rounded-2xl border border-cypress/20 bg-moss/90">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1200}
                  height={720}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-olive">{project.period}</p>
              <h3 className="mt-3 font-display text-5xl leading-[0.92] text-moss">{project.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.badges.map((badge, index) => (
                  <span key={`${project.key}-${badge}`} className={`chip ${index < 2 ? "bg-cypress/10 border-cypress/35" : ""}`}>
                    {badge}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-cypress/85">{project.summary}</p>
            </div>

            <div className="p-6 lg:p-8">
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-olive">Problem</p>
                  <p className="mt-2 text-sm leading-7 text-cypress/85">{project.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-olive">Architecture</p>
                  <ul className="mt-2 space-y-1">
                    {project.architecture.map((item) => (
                      <li key={`${project.key}-${item}`} className="text-sm leading-7 text-cypress/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-2 rounded-xl border border-cypress/15 bg-surface-strong/40 p-4">
                  {project.metrics.map((metric) => (
                    <div key={`${project.key}-${metric.label}`}>
                      <p className="font-display text-3xl leading-none text-moss">{metric.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-olive">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-olive">Impact</p>
                  <p className="mt-2 text-sm leading-7 text-cypress/85">{project.impact}</p>
                </div>
                <Button variant="secondary" as="a" href="#projects" className="mt-2">
                  View In Library
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
