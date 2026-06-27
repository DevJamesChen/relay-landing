import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DashboardPreview } from "@/components/sections/dashboard-preview";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-background pt-16 pb-8 sm:pt-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="animate-float-slow pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-72 w-[42rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand)_22%,transparent),transparent)] blur-2xl" />

      <Container className="flex flex-col items-center text-center">
        <a
          href="#pipeline"
          className="animate-rise group mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 py-1 pr-2 pl-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:border-brand/30 hover:text-foreground"
        >
          <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[11px] font-semibold text-brand">
            New
          </span>
          Relay API v2 — streaming sync and smarter chunking
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>

        <h1
          className="animate-rise max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          <span className="text-gradient">The universal content API</span>
          <br />
          for{" "}
          <span className="bg-gradient-to-r from-brand to-emerald-300 bg-clip-text text-transparent">
            LLM pipelines.
          </span>
        </h1>

        <p
          className="animate-rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Turn any website, documentation, or Notion workspace into clean,
          chunked Markdown with metadata. Synced in real time. Ready for RAG.
        </p>

        <div
          className="animate-rise mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href="/get-started"
            className={cn(
              buttonVariants({ variant: "default" }),
              "group h-11 rounded-full px-6 text-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20",
            )}
          >
            Start building
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#how-it-works"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 rounded-full px-6 text-sm transition-transform hover:-translate-y-0.5",
            )}
          >
            Read the docs
          </a>
        </div>

        <p
          className="animate-rise mt-6 font-mono text-xs tracking-wide text-muted-foreground/70"
          style={{ animationDelay: "320ms" }}
        >
          No credit card required · 1,000 free pages every month
        </p>
      </Container>

      <Container className="mt-16">
        <div className="animate-rise" style={{ animationDelay: "420ms" }}>
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
