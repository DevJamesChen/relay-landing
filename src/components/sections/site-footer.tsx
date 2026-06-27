import { LogoMark } from "@/components/logo";
import { Reveal } from "@/components/reveal";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog", "Status"],
  },
  {
    title: "Developers",
    links: ["Documentation", "API Reference", "SDKs", "MCP Server", "Examples"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Customers"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA"],
  },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.75.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.2.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.96 6.82H1.69l7.73-8.83L1.27 2.25h6.82l4.71 6.23 5.44-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "#" },
  { label: "X", icon: XIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/20">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <Reveal className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="col-span-2 max-w-xs sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-[15px] font-semibold tracking-tight">
                Relay
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The universal content API for LLM pipelines. Clean Markdown,
              structured metadata, always in sync.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:text-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block text-sm text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Relay Labs, Inc. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono text-xs">
            <span className="size-1.5 rounded-full bg-brand animate-pulse-soft" />
            All systems operational ·{" "}
            <span className="text-brand">99.98% uptime</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
