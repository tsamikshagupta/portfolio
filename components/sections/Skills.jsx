import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { skillCategories } from "../../projects/data";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="03 — Skills"
      title="What I'm Capable Of"
      subtitle="The stack I use to ship systems from experimental idea to production behavior."
      className="bg-gradient-to-b from-surface/60 to-cream"
    >
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skillCategories.map((group) => (
          <Card key={group.category} className="story-item p-6" interactive>
            <h3 className="font-display text-3xl text-moss">{group.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={`${group.category}-${skill}`} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
