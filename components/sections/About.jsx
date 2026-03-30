import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";

const highlights = [
  { value: "970K", label: "Embeddings Engineered" },
  { value: "2K+", label: "Users Impacted" },
  { value: "6.3GB", label: "Legal Dataset Scale" }
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      label="01 — About"
      title="How I Think About Building"
      subtitle="I treat machine learning as a systems problem first, then a modeling problem."
      className="bg-gradient-to-b from-cream to-surface/60"
    >
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="story-item p-7 md:p-8">
          <p className="text-pretty text-sm leading-8 text-cypress/85 md:text-base">
            I start by mapping constraints: data quality, failure modes, security boundaries, and deployment realities. Then I choose models and
            architecture that can survive those constraints.
          </p>
          <p className="mt-5 text-pretty text-sm leading-8 text-cypress/85 md:text-base">
            The goal is simple: build software that continues to behave well when load increases, inputs get messy, and real users depend on it.
          </p>
        </Card>

        <div className="grid gap-4">
          {highlights.map((item) => (
            <Card key={item.label} className="story-item border-cypress/22 bg-gradient-to-br from-surface to-surface-strong/35 p-6" interactive>
              <p className="font-display text-5xl leading-none text-moss">{item.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-olive">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
