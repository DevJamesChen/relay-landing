"use client";

import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";

import { cn } from "@/lib/utils";

type Update = { path: string; badge: string };

// Pool of plausible content changes that stream into the index.
const POOL: Update[] = [
  { path: "docs/quickstart.md", badge: "+3 chunks" },
  { path: "api/webhooks.md", badge: "edited" },
  { path: "changelog/2026-06.md", badge: "+1 chunk" },
  { path: "guides/chunking.md", badge: "synced" },
  { path: "docs/authentication.md", badge: "+5 chunks" },
  { path: "pricing.mdx", badge: "edited" },
  { path: "docs/rate-limits.md", badge: "re-indexed" },
  { path: "blog/launch-week.md", badge: "+2 chunks" },
];

type Row = Update & { id: number; age: number };

const VISIBLE = 4;

function seed(): Row[] {
  return Array.from({ length: VISIBLE }, (_, i) => ({
    ...POOL[i],
    id: i,
    age: i * 3,
  }));
}

const ageLabel = (age: number) => (age === 0 ? "now" : `${age}s ago`);

export function InstantUpdates() {
  const [rows, setRows] = useState<Row[]>(seed);
  const ref = useRef<HTMLDivElement>(null);
  const idSeq = useRef(VISIBLE);
  const poolIdx = useRef(VISIBLE % POOL.length);
  const tick = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry?.isIntersecting ?? false;
        if (visible && !interval) {
          interval = window.setInterval(() => {
            tick.current += 1;
            const insert = tick.current % 3 === 0;
            setRows((prev) => {
              const aged = prev.map((r) => ({ ...r, age: r.age + 1 }));
              if (!insert) return aged;
              const next = POOL[poolIdx.current % POOL.length];
              poolIdx.current += 1;
              return [
                { ...next, id: idSeq.current++, age: 0 },
                ...aged,
              ].slice(0, VISIBLE);
            });
          }, 1100);
        } else if (!visible && interval) {
          window.clearInterval(interval);
          interval = 0;
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => {
      window.clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="mt-5">
      <div className="mb-2 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-brand animate-pulse-soft" />
          Live index
        </span>
        <span className="font-mono">realtime</span>
      </div>

      <ul className="flex flex-col gap-1">
        {rows.map((r, i) => (
          <li
            key={r.id}
            className={cn(
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors",
              i === 0
                ? "animate-rise bg-brand/[0.07] ring-1 ring-brand/15"
                : "bg-transparent",
            )}
          >
            <FileText
              className={cn(
                "size-3.5 shrink-0",
                i === 0 ? "text-brand" : "text-muted-foreground/60",
              )}
            />
            <span className="min-w-0 flex-1 truncate font-mono text-foreground/80">
              {r.path}
            </span>
            <span className="shrink-0 rounded bg-brand/10 px-1.5 py-0.5 text-[10px] font-medium text-brand">
              {r.badge}
            </span>
            <span className="w-14 shrink-0 text-right font-mono text-[10px] tabular-nums text-muted-foreground">
              {ageLabel(r.age)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
