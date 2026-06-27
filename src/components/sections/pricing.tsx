import { Check } from "lucide-react";

import Link from "next/link";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    cadence: "/month",
    description: "For side projects and prototypes.",
    cta: "Start for free",
    href: "/get-started?plan=hobby",
    variant: "outline" as const,
    featured: false,
    features: [
      "1,000 pages / month",
      "1 source",
      "Daily sync",
      "REST API + SDK access",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    cadence: "/month",
    description: "For production apps and growing teams.",
    cta: "Get started",
    href: "/get-started?plan=pro",
    variant: "default" as const,
    featured: true,
    features: [
      "50,000 pages / month",
      "Unlimited sources",
      "Real-time sync",
      "Webhooks + custom extractors",
      "Team workspaces",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For large-scale, high-compliance teams.",
    cta: "Contact sales",
    href: "mailto:sales@relay.dev?subject=Relay%20Enterprise",
    variant: "outline" as const,
    featured: false,
    features: [
      "Unlimited pages",
      "SSO / SAML + audit logs",
      "Regional data residency",
      "99.9% uptime SLA",
      "Dedicated support + Slack",
      "Custom integrations",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, usage-based pricing."
          description="Start free, scale when you ship. No per-seat tax, no surprise overage bills."
        />

        <Reveal className="reveal-children mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "card-lift relative flex flex-col rounded-2xl border p-7",
                tier.featured
                  ? "border-brand/40 bg-brand/[0.04] brand-glow lg:-mt-4 lg:mb-4"
                  : "border-border bg-card/40 hover:border-brand/30",
              )}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {tier.price}
                </span>
                {tier.cadence ? (
                  <span className="text-sm text-muted-foreground">
                    {tier.cadence}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {tier.description}
              </p>

              {tier.href.startsWith("/") ? (
                <Link
                  href={tier.href}
                  className={cn(
                    buttonVariants({ variant: tier.variant }),
                    "mt-6 h-10 rounded-full transition-transform hover:-translate-y-0.5",
                  )}
                >
                  {tier.cta}
                </Link>
              ) : (
                <a
                  href={tier.href}
                  className={cn(
                    buttonVariants({ variant: tier.variant }),
                    "mt-6 h-10 rounded-full transition-transform hover:-translate-y-0.5",
                  )}
                >
                  {tier.cta}
                </a>
              )}

              <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    {f}
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
