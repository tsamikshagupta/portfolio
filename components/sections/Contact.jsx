import { ArrowUpRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Button from "../ui/Button";
import SectionWrapper from "../ui/SectionWrapper";

const links = [
  {
    label: "Email",
    href: "mailto:samikshaterala9@gmail.com",
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tsamikshagupta/",
    icon: BriefcaseBusiness
  },
  {
    label: "GitHub",
    href: "https://github.com/tsamikshagupta",
    icon: Code2
  }
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="08 — Contact"
      title="Let's Build Something Remarkable"
      subtitle="Open to research collaborations, product engineering roles, and ambitious systems work."
      dark
      className="bg-moss"
    >
      <div className="story-item mt-10 flex flex-wrap gap-3">
        <Button variant="primary" as="a" href="mailto:samikshaterala9@gmail.com">
          Start A Conversation
          <ArrowUpRight size={14} />
        </Button>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Button
              key={link.label}
              as="a"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              variant="ghost"
              className="border-cypress/45 text-aloe hover:border-cedar"
            >
              <Icon size={14} />
              {link.label}
            </Button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
