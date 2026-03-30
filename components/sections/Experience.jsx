import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { experienceBullets, experienceItems, experienceScale } from "../../projects/data";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="07 — Experience"
      title="Systems Built In Real Environments"
      subtitle="Professional and academic experiences where product constraints shaped engineering decisions."
    >
      <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          {experienceItems.map((item) => (
            <Card key={`${item.company}-${item.period}`} className="story-item p-6" interactive>
              <h3 className="font-display text-3xl text-moss">{item.company}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-cypress">{item.role}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-olive">{item.period}</p>
            </Card>
          ))}
        </div>

        <Card className="story-item p-6 md:p-7">
          <div className="grid gap-3 sm:grid-cols-3">
            {experienceScale.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-cypress/15 bg-surface-strong/40 p-4">
                <p className="font-display text-4xl leading-none text-moss">{metric.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-olive">{metric.label}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-cypress/85">
            {experienceBullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}
