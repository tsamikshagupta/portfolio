import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { principles, systemFlow } from "../../projects/data";

export default function SystemThinking() {
  return (
    <SectionWrapper
      id="system"
      label="02 — System Thinking"
      title="How I Build Systems"
      subtitle="Data, representation, modeling, optimization, and deployment are treated as one connected system."
    >
      <div className="story-item mt-10 grid gap-3 rounded-3xl border border-cypress/18 bg-surface-strong/35 p-5 md:grid-cols-5">
        {systemFlow.map((step, index) => (
          <div key={step.name} className="relative rounded-2xl border border-cypress/15 bg-surface/80 p-4">
            <p className="font-display text-2xl text-cypress">{step.icon}</p>
            <h3 className="mt-2 font-display text-2xl text-moss">{step.name}</h3>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-cypress/80">{step.detail}</p>
            {index < systemFlow.length - 1 ? (
              <span className="absolute right-[-10px] top-1/2 hidden h-px w-4 -translate-y-1/2 bg-cypress/30 md:block" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <Card key={item.title} className="story-item p-6" interactive>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-olive">{item.number}</p>
            <h3 className="mt-3 font-display text-3xl text-moss">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-cypress/85">{item.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
