import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const testimonials = [
  {
    quote:
      "We deleted four thousand lines of scraping code the week we adopted Relay. Our RAG answers got measurably more accurate overnight.",
    name: "Dana Okoro",
    role: "Staff Engineer, Lattice AI",
    initials: "DO",
    tint: "from-emerald-300/60 to-emerald-500/30",
  },
  {
    quote:
      "The git-based configuration is genius. We treat our content pipeline like any other service: reviewed in PRs, versioned, rolled back when we need to.",
    name: "Sayid Rahimi",
    role: "Platform Lead, Northwind",
    initials: "SR",
    tint: "from-sky-300/60 to-sky-500/30",
  },
  {
    quote:
      "Finally, a crawler that actually respects robots.txt and stays in sync. We pointed it at our docs and never thought about freshness again.",
    name: "Priya Nair",
    role: "ML Engineer, Vellum",
    initials: "PN",
    tint: "from-violet-300/60 to-violet-500/30",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by engineers."
          description="Teams shipping AI products in production trust Relay with their retrieval layer."
        />

        <Reveal className="reveal-children mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-lift flex flex-col rounded-xl border border-border bg-card/50 p-6 hover:border-brand/25"
            >
              <blockquote className="flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className={`inline-flex size-9 items-center justify-center rounded-full bg-gradient-to-br ${t.tint} text-xs font-semibold text-background`}
                >
                  {t.initials}
                </span>
                <div className="text-sm">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
