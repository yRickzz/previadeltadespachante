import { cn } from "@/lib/utils";

/**
 * PROVISIONAL brand mark.
 * The original Despachante Delta logo file was not available when this site was built.
 * Replace this component's content with the official logo image
 * (e.g. <img src={logo} alt="Despachante Delta" />) as soon as it is provided.
 */
export function DeltaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" fill="none" aria-hidden="true" className={className}>
      <path d="M24 2 46 42H2L24 2Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M24 17 35 37H13L24 17Z" fill="currentColor" />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        tone === "dark" ? "text-primary" : "text-primary-foreground",
        className,
      )}
    >
      <DeltaMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.62rem] font-semibold tracking-[0.32em] opacity-80">
          DESPACHANTE
        </span>
        <span className="font-display text-xl font-extrabold tracking-[0.12em]">DELTA</span>
      </span>
    </span>
  );
}
