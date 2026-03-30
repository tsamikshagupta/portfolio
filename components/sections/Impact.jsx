import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { impactMetrics, optimizationFocus } from "../../projects/data";

export default function Impact() {
  return (
    <SectionWrapper
      id="impact"
      label="05 — Impact"
      title="What I Optimize For"
      subtitle="I optimize for systems that remain dependable under scale, complexity, and real user pressure."
      className="bg-moss"
      dark
    >
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {impactMetrics.map((metric) => (
          <Card key={metric.label} className="story-item border-cypress/30 bg-ink/25 p-5" interactive>
            <p className="font-display text-5xl leading-none text-aloe">{metric.value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-olive">{metric.label}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {optimizationFocus.map((focus) => (
          <Card key={focus.title} className="story-item border-cypress/25 bg-cypress/10 p-6">
            <h3 className="font-display text-3xl text-aloe">{focus.title}</h3>
            <p className="mt-3 text-sm leading-7 text-cedar">{focus.detail}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
