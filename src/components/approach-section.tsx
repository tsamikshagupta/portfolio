import { approachPrinciples } from "@/data/content";

export function ApproachSection() {
  return (
    <section id="approach" className="section-shell border-y border-border/65 bg-card/20">
      <div className="container">
        <p className="section-kicker">Approach</p>
        <h2 className="section-title">How I approach engineering problems</h2>
        <p className="section-copy">I use a systems lens: understand context, choose deliberate trade-offs, and optimize for dependable behavior.</p>

        <div className="mt-11 grid gap-4 md:grid-cols-3 lg:gap-5">
          {approachPrinciples.map((principle) => (
            <article key={principle.title} className="liquid-glass rounded-lg border border-border/70 bg-background/35 p-6">
              <h3 className="text-xl leading-tight text-hero-heading">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80">{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
