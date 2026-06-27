import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-7 items-center justify-center rounded-[8px] bg-brand/15 ring-1 ring-brand/30",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-4 text-brand"
        aria-hidden="true"
      >
        {/* relay / broadcast mark: a node emitting signal arcs */}
        <circle cx="7" cy="12" r="2.4" fill="currentColor" />
        <path
          d="M12.5 8.2a5.4 5.4 0 0 1 0 7.6M16 5.5a9.2 9.2 0 0 1 0 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  href = "#top",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90",
        className,
      )}
    >
      <LogoMark />
      <span className="text-[15px] font-semibold tracking-tight">Relay</span>
    </a>
  );
}
