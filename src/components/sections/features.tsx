import {
  ArrowRight,
  Braces,
  MousePointerClick,
  RefreshCw,
  Webhook,
} from "lucide-react";

import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

function FeatureRow({
  reverse,
  icon: Icon,
  eyebrow,
  title,
  body,
  cta,
  visual,
}: {
  reverse?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  visual: React.ReactNode;
}) {
  return (
    <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(reverse && "lg:order-2")}>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-brand transition-colors hover:border-brand/40">
          <Icon className="size-3.5" />
          {eyebrow}
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-gradient sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {body}
        </p>
        <a
          href="#how-it-works"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-emerald-300"
        >
          {cta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className={cn(reverse && "lg:order-1")}>{visual}</div>
    </Reveal>
  );
}

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-background/40 px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-red-400/60" />
        <span className="size-2.5 rounded-full bg-amber-400/60" />
        <span className="size-2.5 rounded-full bg-emerald-400/60" />
      </div>
      <span className="font-mono text-[11px] text-muted-foreground">{label}</span>
    </div>
  );
}

function MarkdownVisual() {
  return (
    <div className="card-lift overflow-hidden rounded-xl border border-border bg-card/80 shadow-xl shadow-black/30 hover:border-brand/25 hover:shadow-2xl hover:shadow-black/40">
      <WindowChrome label="response.md" />
      <div className="space-y-4 p-5 font-mono text-[12.5px] leading-relaxed">
        <div className="rounded-lg border border-border bg-background/50 p-4">
          <p className="text-muted-foreground/60">---</p>
          <p>
            <span className="text-brand">title</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-emerald-300">&quot;Quickstart&quot;</span>
          </p>
          <p>
            <span className="text-brand">url</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-emerald-300">
              &quot;acme.dev/docs/quickstart&quot;
            </span>
          </p>
          <p>
            <span className="text-brand">word_count</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-sky-300">842</span>
          </p>
          <p>
            <span className="text-brand">tokens</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-sky-300">1196</span>
          </p>
          <p>
            <span className="text-brand">updated</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-emerald-300">2026-06-27T14:02:11Z</span>
          </p>
          <p className="text-muted-foreground/60">---</p>
        </div>
        <div className="space-y-2 text-foreground/90">
          <p className="text-base font-semibold text-foreground">
            # Quickstart
          </p>
          <p className="text-muted-foreground">
            Get your first response from Relay in{" "}
            <span className="text-foreground">**under five minutes**</span>.
          </p>
          <p className="text-muted-foreground">- Create an API key</p>
          <p className="text-muted-foreground">- Register a source</p>
          <p className="text-muted-foreground">- Query clean Markdown</p>
        </div>
      </div>
    </div>
  );
}

function ExtractVisual() {
  return (
    <div className="card-lift overflow-hidden rounded-xl border border-border bg-card/80 shadow-xl shadow-black/30 hover:border-brand/25 hover:shadow-2xl hover:shadow-black/40">
      <WindowChrome label="acme.dev/pricing" />
      <div className="grid gap-4 p-5 sm:grid-cols-[1.2fr_1fr]">
        {/* mock page with a selection */}
        <div className="space-y-3 rounded-lg border border-border bg-background/40 p-4">
          <div className="h-2.5 w-1/2 rounded-full bg-muted" />
          <div className="h-2 w-3/4 rounded-full bg-muted/60" />
          <div className="relative mt-3 rounded-lg border-2 border-dashed border-brand/70 bg-brand/[0.06] p-3">
            <span className="absolute -top-2.5 left-3 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-brand-foreground">
              .pricing-table
            </span>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="h-2 w-16 rounded-full bg-brand/40" />
                <div className="h-2 w-10 rounded-full bg-brand/40" />
              </div>
              <div className="flex justify-between">
                <div className="h-2 w-20 rounded-full bg-brand/30" />
                <div className="h-2 w-8 rounded-full bg-brand/30" />
              </div>
              <div className="flex justify-between">
                <div className="h-2 w-14 rounded-full bg-brand/30" />
                <div className="h-2 w-9 rounded-full bg-brand/30" />
              </div>
            </div>
            <MousePointerClick className="absolute -bottom-3 right-4 size-5 text-brand drop-shadow" />
          </div>
          <div className="h-2 w-2/3 rounded-full bg-muted/60" />
        </div>

        {/* extracted schema */}
        <div className="rounded-lg border border-border bg-background/50 p-4 font-mono text-[12px]">
          <p className="mb-2 text-[10px] uppercase tracking-wider text-muted-foreground/70">
            schema
          </p>
          <p>
            <span className="text-brand">plan</span>
            <span className="text-muted-foreground">: string</span>
          </p>
          <p>
            <span className="text-brand">price</span>
            <span className="text-muted-foreground">: number</span>
          </p>
          <p>
            <span className="text-brand">interval</span>
            <span className="text-muted-foreground">: enum</span>
          </p>
          <p>
            <span className="text-brand">features</span>
            <span className="text-muted-foreground">: string[]</span>
          </p>
          <div className="mt-3 rounded-md bg-brand/10 px-2 py-1.5 text-[11px] text-brand">
            3 rows extracted
          </div>
        </div>
      </div>
    </div>
  );
}

const syncFeed = [
  { source: "docs.acme.dev", status: "Synced", detail: "+4 pages changed", time: "2s ago" },
  { source: "blog.acme.dev", status: "Synced", detail: "1 page updated", time: "38s ago" },
  { source: "acme.dev/changelog", status: "Syncing", detail: "crawling 6 urls", time: "now" },
  { source: "help.acme.dev", status: "Synced", detail: "no changes", time: "4m ago" },
];

function SyncVisual() {
  return (
    <div className="card-lift overflow-hidden rounded-xl border border-border bg-card/80 shadow-xl shadow-black/30 hover:border-brand/25 hover:shadow-2xl hover:shadow-black/40">
      <WindowChrome label="sync · live" />
      <div className="divide-y divide-border">
        {syncFeed.map((e) => (
          <div
            key={e.source}
            className="flex items-center justify-between gap-3 px-5 py-3.5"
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "inline-flex size-7 items-center justify-center rounded-full",
                  e.status === "Syncing"
                    ? "bg-amber-400/15 text-amber-300"
                    : "bg-brand/15 text-brand",
                )}
              >
                <RefreshCw
                  className={cn(
                    "size-3.5",
                    e.status === "Syncing" && "animate-spin",
                  )}
                />
              </span>
              <div>
                <p className="font-mono text-xs text-foreground/90">{e.source}</p>
                <p className="text-[11px] text-muted-foreground">{e.detail}</p>
              </div>
            </div>
            <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
              {e.time}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 bg-brand/[0.05] px-5 py-3 text-[11px] text-brand">
          <Webhook className="size-3.5" />
          POST https://api.yourapp.com/relay/webhook · 200
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <Container className="flex flex-col gap-24">
        <FeatureRow
          icon={Braces}
          eyebrow="Extraction"
          title="Clean Markdown, automatic metadata."
          body="Every page comes back as structured Markdown with the noise stripped out: navigation, ads, and cookie banners gone. Title, canonical URL, word count, and token estimates arrive as metadata you can filter and route on."
          cta="See the response schema"
          visual={<MarkdownVisual />}
        />
        <FeatureRow
          reverse
          icon={MousePointerClick}
          eyebrow="Precision"
          title="Point, click, extract exactly what you need."
          body="Don't want the whole page? Use the visual selector or a CSS rule to pull only the fields that matter: pricing tables, changelog entries, product specs. Relay keeps the schema stable even when the layout shifts."
          cta="Build an extractor"
          visual={<ExtractVisual />}
        />
        <FeatureRow
          icon={RefreshCw}
          eyebrow="Freshness"
          title="Never stale. Always in sync."
          body="Relay watches your sources and re-crawls only what changed, then pushes updates to your index in seconds. Set per-source intervals, trigger an instant refresh from the API, and fire webhooks downstream on every change."
          cta="Set up sync"
          visual={<SyncVisual />}
        />
      </Container>
    </section>
  );
}
