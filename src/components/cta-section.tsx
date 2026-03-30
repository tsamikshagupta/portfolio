import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { closingCta } from "@/data/content";

export function CtaSection() {
  return (
    <section id="cta" className="section-shell-compact">
      <div className="container">
        <div className="liquid-glass rounded-2xl border border-border/70 bg-card/25 p-8 sm:p-12">
          <p className="section-kicker">Next Step</p>
          <h2 className="mt-3 max-w-3xl text-4xl leading-tight text-hero-heading sm:text-5xl">{closingCta.title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/80">{closingCta.copy}</p>
          <div className="mt-8">
            <Button asChild>
              <a href="#contact">
                Start a Conversation <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
