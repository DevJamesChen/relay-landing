import { Cpu, Layers, Megaphone } from "lucide-react";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const cases = [
  {
    icon: Cpu,
    title: "AI Engineers",
    body: "Ship RAG that doesn't hallucinate. Feed your models fresh, clean, citable context and stop babysitting a crawler the week before launch.",
    points: ["Token-aware chunks", "Source citations", "Sub-second retrieval"],
  },
  {
    icon: Layers,
    title: "Platform Teams",
    body: "Give every internal team one content API. Govern sources, quotas, and access from a single control plane with full audit history.",
    points: ["Central governance", "Per-team quotas", "SSO and audit logs"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    body: "Keep AI search, support bots, and docs assistants current with every site change, automatically, without filing an engineering ticket.",
    points: ["No-code sources", "Always up to date", "Brand-safe answers"],
  },
];

export function UseCases() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Use cases"
          title="Built for builders."
          description="However you turn content into intelligence, Relay is the layer that keeps it clean and current."
        />

        <Reveal className="reveal-children mt-12 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="card-lift group flex flex-col rounded-xl border border-border bg-card/50 p-6 hover:border-brand/30"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand/12 text-brand ring-1 ring-brand/20 transition-transform group-hover:scale-110">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                {c.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="size-1.5 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
