import { Cpu, ShieldCheck, Zap, Plug } from "lucide-react";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { InstantUpdates } from "@/components/sections/instant-updates";

const sourceTypes = [
  "Websites",
  "Sitemaps",
  "Notion",
  "GitHub",
  "Google Drive",
  "Confluence",
  "PDFs",
  "RSS feeds",
  "S3 buckets",
  "Markdown",
];

export function Pipeline() {
  return (
    <section id="pipeline" className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="One unified content pipeline."
          description="Stop stitching together scrapers, cleaners, and chunkers. Relay is a single, versioned pipeline from raw source to retrieval-ready content."
        />

        <Reveal className="reveal-children mt-14 grid gap-4 md:grid-cols-3">
          {/* Config as code — large */}
          <div className="card-lift flex flex-col justify-between rounded-xl border border-border bg-card/50 p-6 hover:border-brand/30 md:col-span-2">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <Plug className="size-4 text-brand" />
                Configuration as code
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Version every crawl rule, extractor, and sync schedule in a
                single file. Review changes in a pull request, roll back
                instantly, and keep staging and production identical.
              </p>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-background/60 p-4 font-mono text-[12px] leading-relaxed">
              <code>
                <span className="text-muted-foreground/60">
                  # relay.config.json
                </span>
                {"\n"}
                {"{"}
                {"\n"}
                {"  "}<span className="text-brand">&quot;source&quot;</span>:{" "}
                <span className="text-emerald-300">&quot;acme-docs&quot;</span>,{"\n"}
                {"  "}<span className="text-brand">&quot;crawl&quot;</span>: {"{"}{" "}
                <span className="text-brand">&quot;include&quot;</span>:{" "}
                <span className="text-emerald-300">[&quot;/docs/**&quot;]</span> {"}"},{"\n"}
                {"  "}<span className="text-brand">&quot;chunk&quot;</span>: {"{"}{" "}
                <span className="text-brand">&quot;size&quot;</span>:{" "}
                <span className="text-sky-300">512</span>,{" "}
                <span className="text-brand">&quot;overlap&quot;</span>:{" "}
                <span className="text-sky-300">64</span> {"}"},{"\n"}
                {"  "}<span className="text-brand">&quot;sync&quot;</span>:{" "}
                <span className="text-emerald-300">&quot;realtime&quot;</span>
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>

          {/* Instant updates */}
          <div className="card-lift rounded-xl border border-border bg-card/50 p-6 hover:border-brand/30">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <Zap className="size-4 text-brand" />
              Instant updates
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Edit a page and Relay reflects it in your index within seconds,
              not on a nightly cron.
            </p>
            <InstantUpdates />
          </div>

          {/* LLM optimized */}
          <div className="card-lift rounded-xl border border-border bg-card/50 p-6 hover:border-brand/30">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <Cpu className="size-4 text-brand" />
              LLM-optimized
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Token-aware chunking with overlap, heading-aware splits, and
              per-chunk metadata tuned for retrieval quality.
            </p>
          </div>

          {/* Enterprise ready */}
          <div className="card-lift rounded-xl border border-border bg-card/50 p-6 hover:border-brand/30">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="size-4 text-brand" />
              Enterprise-ready
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              SOC 2 Type II, SSO and SAML, audit logs, and regional data
              residency, all SLA-backed.
            </p>
          </div>

          {/* Connect anything — wide */}
          <div className="card-lift rounded-xl border border-border bg-card/50 p-6 hover:border-brand/30">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <Plug className="size-4 text-brand" />
              Connect anything
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              One pipeline for every source your content lives in.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sourceTypes.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
