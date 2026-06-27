"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Seg = { t: string; c?: string };

const C = {
  comment: "text-muted-foreground/60",
  cmd: "text-brand",
  flag: "text-muted-foreground",
  str: "text-emerald-300",
  num: "text-sky-300",
  ok: "text-brand",
  run: "text-amber-300",
  key: "text-brand",
  punct: "text-muted-foreground",
  fg: "text-foreground/90",
};

type Step = {
  n: string;
  title: string;
  body: string;
  content: Seg[];
};

const steps: Step[] = [
  {
    n: "01",
    title: "Add a source",
    body: "Point Relay at a URL, sitemap, or connect Notion, GitHub, or Google Drive. We discover every page automatically.",
    content: [
      { t: "# register a new source\n", c: C.comment },
      { t: "$ ", c: C.cmd },
      { t: "relay", c: C.cmd },
      { t: " sources add \\\n", c: C.fg },
      { t: "    --url ", c: C.flag },
      { t: "https://acme.dev/docs", c: C.str },
      { t: " \\\n", c: C.fg },
      { t: "    --name ", c: C.flag },
      { t: "acme-docs", c: C.str },
      { t: "\n\n" },
      { t: "✓ ", c: C.ok },
      { t: "Source created: acme-docs\n", c: C.fg },
      { t: "✓ ", c: C.ok },
      { t: "Discovered 284 pages from sitemap\n", c: C.fg },
      { t: "→ ", c: C.run },
      { t: "Crawling 284/284 complete", c: C.flag },
    ],
  },
  {
    n: "02",
    title: "Configure",
    body: "Set chunk size, extraction rules, and a sync interval. Sensible defaults mean you can skip this entirely.",
    content: [
      { t: "# tune chunking + sync\n", c: C.comment },
      { t: "$ ", c: C.cmd },
      { t: "relay", c: C.cmd },
      { t: " config set \\\n", c: C.fg },
      { t: "    --chunk ", c: C.flag },
      { t: "512", c: C.num },
      { t: " --overlap ", c: C.flag },
      { t: "64", c: C.num },
      { t: " \\\n", c: C.fg },
      { t: "    --sync ", c: C.flag },
      { t: "realtime", c: C.str },
      { t: "\n\n" },
      { t: "✓ ", c: C.ok },
      { t: "Saved relay.config.json\n", c: C.fg },
      { t: "✓ ", c: C.ok },
      { t: "Re-chunked 284 pages → 3,910 chunks\n", c: C.fg },
      { t: "→ ", c: C.run },
      { t: "Sync mode: realtime", c: C.flag },
    ],
  },
  {
    n: "03",
    title: "Query",
    body: "Hit one endpoint and get clean, chunked Markdown with metadata, ready to embed and drop into your vector store.",
    content: [
      { t: "# fetch chunked, embed-ready content\n", c: C.comment },
      { t: "$ ", c: C.cmd },
      { t: "curl", c: C.cmd },
      { t: " https://api.relay.dev/v2/content \\\n", c: C.fg },
      { t: "    -H ", c: C.flag },
      { t: '"Authorization: Bearer rl_live_***"', c: C.str },
      { t: " \\\n", c: C.fg },
      { t: "    -d ", c: C.flag },
      { t: '"source=acme-docs"', c: C.str },
      { t: "\n\n" },
      { t: "{\n", c: C.punct },
      { t: '  "source"', c: C.key },
      { t: ": ", c: C.punct },
      { t: '"acme-docs"', c: C.str },
      { t: ",\n", c: C.punct },
      { t: '  "chunks"', c: C.key },
      { t: ": ", c: C.punct },
      { t: "3910", c: C.num },
      { t: ",\n", c: C.punct },
      { t: '  "data"', c: C.key },
      { t: ": [{ ", c: C.punct },
      { t: '"text"', c: C.key },
      { t: ": ", c: C.punct },
      { t: '"# Quickstart…"', c: C.str },
      { t: ", ", c: C.punct },
      { t: '"tokens"', c: C.key },
      { t: ": ", c: C.punct },
      { t: "512", c: C.num },
      { t: " }]\n", c: C.punct },
      { t: "}", c: C.punct },
    ],
  },
];

const totalChars = (s: Step) => s.content.reduce((a, seg) => a + seg.t.length, 0);

function TypedCode({ content, count }: { content: Seg[]; count: number }) {
  const out: React.ReactNode[] = [];
  let remaining = count;
  for (let i = 0; i < content.length && remaining > 0; i++) {
    const seg = content[i];
    const slice = seg.t.slice(0, remaining);
    out.push(
      <span key={i} className={seg.c}>
        {slice}
      </span>,
    );
    remaining -= seg.t.length;
  }
  return <>{out}</>;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function HowItWorksSteps() {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const interacted = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Reset the typing position whenever the step or visibility changes — done
  // during render (React's prop-change pattern) rather than in an effect.
  const [marker, setMarker] = useState(`${active}:${inView}`);
  if (marker !== `${active}:${inView}`) {
    setMarker(`${active}:${inView}`);
    setCount(inView && !prefersReducedMotion() ? 0 : totalChars(steps[active]));
  }

  // Pause/resume the animation based on visibility.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? false),
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Type the active step, then auto-advance unless the user has taken over.
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const total = totalChars(steps[active]);

    let raf = 0;
    let advanceTimer = 0;
    let start = 0;
    const duration = Math.min(2600, Math.max(1300, total * 9));

    const frame = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      setCount(Math.floor(progress * total));
      if (progress < 1) {
        raf = requestAnimationFrame(frame);
      } else if (!interacted.current) {
        advanceTimer = window.setTimeout(
          () => setActive((a) => (a + 1) % steps.length),
          2400,
        );
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(advanceTimer);
    };
  }, [active, inView]);

  function selectStep(i: number) {
    interacted.current = true;
    setActive(i);
  }

  const total = totalChars(steps[active]);
  const progress = total > 0 ? count / total : 0;

  return (
    <div
      ref={rootRef}
      className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
    >
      {/* steps */}
      <ol className="flex flex-col gap-3">
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.n}>
              <button
                type="button"
                onClick={() => selectStep(i)}
                aria-pressed={isActive}
                className={cn(
                  "w-full rounded-xl border p-5 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                  isActive
                    ? "border-brand/30 bg-brand/[0.05] ring-1 ring-brand/10"
                    : "cursor-pointer border-border bg-card/40 hover:border-brand/20 hover:bg-card/70",
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "inline-flex size-9 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-brand text-brand-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </div>

                {/* progress bar for the active, typing step */}
                <div
                  className={cn(
                    "mt-4 h-0.5 overflow-hidden rounded-full bg-border transition-opacity",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                >
                  <div
                    className="h-full rounded-full bg-brand"
                    style={{
                      width: `${Math.round((isActive ? progress : 0) * 100)}%`,
                      transition: "width 80ms linear",
                    }}
                  />
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      {/* terminal */}
      <div className="card-lift overflow-hidden rounded-xl border border-border bg-card/80 shadow-xl shadow-black/30 hover:border-brand/25">
        <div className="flex items-center gap-3 border-b border-border bg-background/40 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/60" />
            <span className="size-2.5 rounded-full bg-amber-400/60" />
            <span className="size-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">
            relay — {steps[active].title.toLowerCase()}
          </span>
        </div>
        <pre className="min-h-[16rem] overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap">
          <code>
            <TypedCode content={steps[active].content} count={count} />
            <span
              className="ml-0.5 inline-block h-3.5 w-[7px] -translate-y-px bg-brand align-middle animate-caret"
              aria-hidden="true"
            />
          </code>
        </pre>
      </div>
    </div>
  );
}
