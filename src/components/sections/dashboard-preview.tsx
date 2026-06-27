import {
  Boxes,
  FileText,
  Search,
  Settings,
  LayoutGrid,
  Plug,
  Database,
} from "lucide-react";

import { cn } from "@/lib/utils";

const sources = [
  { label: "Documentation", icon: FileText, active: true },
  { label: "Marketing site", icon: LayoutGrid, active: false },
  { label: "Help center", icon: Boxes, active: false },
  { label: "Integrations", icon: Plug, active: false },
];

type Row = {
  path: string;
  status: "Synced" | "Crawling" | "Queued";
  chunks: number;
  tokens: string;
  updated: string;
};

const rows: Row[] = [
  { path: "/docs/quickstart", status: "Synced", chunks: 18, tokens: "4.2k", updated: "2m ago" },
  { path: "/docs/authentication", status: "Synced", chunks: 12, tokens: "3.1k", updated: "2m ago" },
  { path: "/docs/api/content", status: "Crawling", chunks: 9, tokens: "2.6k", updated: "now" },
  { path: "/docs/webhooks", status: "Synced", chunks: 14, tokens: "3.8k", updated: "11m ago" },
  { path: "/docs/rate-limits", status: "Queued", chunks: 0, tokens: "—", updated: "—" },
  { path: "/changelog/2026-06", status: "Synced", chunks: 7, tokens: "1.9k", updated: "1h ago" },
];

const statusStyles: Record<Row["status"], string> = {
  Synced: "bg-brand/15 text-brand ring-brand/25",
  Crawling: "bg-amber-400/15 text-amber-300 ring-amber-400/25",
  Queued: "bg-muted text-muted-foreground ring-border",
};

export function DashboardPreview() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_0%,color-mix(in_oklch,var(--brand)_18%,transparent),transparent)]" />

      <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur">
        {/* window chrome */}
        <div className="flex items-center gap-4 border-b border-border bg-background/40 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-amber-400/70" />
            <span className="size-3 rounded-full bg-emerald-400/70" />
          </div>
          <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground">
            <Search className="size-3.5" />
            <span className="font-mono">app.relay.dev/sources/acme-docs</span>
          </div>
          <div className="size-6 shrink-0 rounded-full bg-gradient-to-br from-brand/60 to-emerald-300/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr]">
          {/* sidebar */}
          <aside className="hidden flex-col gap-1 border-r border-border bg-background/30 p-3 sm:flex">
            <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              Sources
            </p>
            {sources.map((s) => (
              <div
                key={s.label}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs",
                  s.active
                    ? "bg-brand/10 font-medium text-foreground ring-1 ring-brand/20"
                    : "text-muted-foreground",
                )}
              >
                <s.icon className="size-3.5" />
                {s.label}
              </div>
            ))}
            <div className="mt-auto flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground">
              <Settings className="size-3.5" />
              Settings
            </div>
          </aside>

          {/* main panel */}
          <div className="min-w-0 p-4">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 rounded-md border border-border bg-background/60 px-2.5 py-1.5 font-mono text-xs">
                <span className="rounded bg-brand/15 px-1.5 py-0.5 text-[10px] font-semibold text-brand">
                  GET
                </span>
                <span className="text-muted-foreground">
                  /v2/content?source=acme-docs
                </span>
                <span className="ml-1 rounded bg-emerald-400/15 px-1.5 py-0.5 text-[10px] text-emerald-300">
                  200 OK
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-brand animate-pulse-soft" />
                <Database className="size-3.5" />
                284 pages · 3,910 chunks
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[420px] text-left text-xs">
                <thead className="bg-background/50 text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  <tr>
                    <th className="px-3 py-2 font-medium">Page</th>
                    <th className="px-3 py-2 font-medium">Status</th>
                    <th className="hidden px-3 py-2 text-right font-medium sm:table-cell">
                      Chunks
                    </th>
                    <th className="hidden px-3 py-2 text-right font-medium sm:table-cell">
                      Tokens
                    </th>
                    <th className="px-3 py-2 text-right font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((r) => (
                    <tr key={r.path} className="hover:bg-background/40">
                      <td className="px-3 py-2.5 font-mono text-foreground/90">
                        {r.path}
                      </td>
                      <td className="px-3 py-2.5">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset",
                            statusStyles[r.status],
                          )}
                        >
                          <span
                            className={cn(
                              "size-1.5 rounded-full bg-current",
                              r.status === "Crawling" && "animate-pulse-soft",
                            )}
                          />
                          {r.status}
                        </span>
                      </td>
                      <td className="hidden px-3 py-2.5 text-right tabular-nums text-muted-foreground sm:table-cell">
                        {r.chunks}
                      </td>
                      <td className="hidden px-3 py-2.5 text-right tabular-nums text-muted-foreground sm:table-cell">
                        {r.tokens}
                      </td>
                      <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground">
                        {r.updated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
