import { Check, X } from "lucide-react";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const diy = [
  "Brittle CSS selectors that break every redeploy",
  "Stripping nav, ads, and boilerplate by hand",
  "Re-crawling everything just to catch one edit",
  "Writing your own chunker and token counter",
  "Babysitting proxies, rate limits, and retries",
  "No metadata, no structure, no provenance",
];

const relay = [
  "Semantic extraction with zero selectors to maintain",
  "Clean Markdown returned in milliseconds",
  "Real-time sync the moment a page changes",
  "Smart chunking with token counts built in",
  "Managed crawl infrastructure, zero ops",
  "Structured metadata on every single page",
];

export function PainPoints() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Why building scrapers sucks."
          description="You're rebuilding the same brittle crawling infrastructure for every project. Stop fighting with markup and start shipping retrieval that works."
        />

        <Reveal className="reveal-children mt-14 grid gap-5 md:grid-cols-2">
          <div className="card-lift rounded-xl border border-destructive/25 bg-destructive/[0.04] p-6 hover:border-destructive/40 sm:p-8">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-destructive">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-destructive/15">
                <X className="size-3.5" />
              </span>
              The DIY approach
            </div>
            <ul className="flex flex-col gap-4">
              {diy.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <X className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-lift rounded-xl border border-brand/30 bg-brand/[0.05] p-6 ring-1 ring-brand/10 hover:border-brand/50 sm:p-8">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-brand">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand/15">
                <Check className="size-3.5" />
              </span>
              The Relay way
            </div>
            <ul className="flex flex-col gap-4">
              {relay.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/90"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
