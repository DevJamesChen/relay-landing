import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Cta() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl border border-brand/25 bg-card/40 px-6 py-16 text-center sm:px-12">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="animate-float-slow pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-48 w-2/3 bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand)_30%,transparent),transparent)]" />

          <Reveal className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-5xl">
              Start indexing your world.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Get a clean, chunked, always-fresh content API in front of your
              model in under five minutes. Free to start, no credit card
              required.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "group h-11 rounded-full px-6 text-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20",
                )}
              >
                Get started
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="mailto:sales@relay.dev?subject=Relay%20demo"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 rounded-full px-6 text-sm transition-transform hover:-translate-y-0.5",
                )}
              >
                Contact sales
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
