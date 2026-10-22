import logoAsset from "@/assets/despachante-delta-logo.png.asset.json";
import { cn } from "@/lib/utils";

/** Official Despachante Delta symbol (shield), used as-is from the client's file. */
export function LogoSymbol({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt=""
      width={512}
      height={510}
      decoding="async"
      className={cn("object-contain", className)}
    />
  );
}

/**
 * Decorative shield outline inspired by the logo silhouette.
 * Used only as a faint background element, never as the logo itself.
 */
export function ShieldOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 16C28 4 72 2 94 10C94 50 82 86 50 106C20 86 6 52 6 16Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M30 74C44 54 66 44 92 36M38 86C50 70 66 60 88 54"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        tone === "dark" ? "text-primary" : "text-primary-foreground",
        className,
      )}
    >
      {tone === "dark" ? (
        <LogoSymbol className="h-10 w-10 shrink-0" />
      ) : (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background p-1.5 shadow-soft">
          <LogoSymbol className="h-full w-full" />
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.62rem] font-semibold tracking-[0.32em] opacity-80">
          DESPACHANTE
        </span>
        <span className="font-display text-xl font-extrabold tracking-[0.12em]">DELTA</span>
      </span>
    </span>
  );
}
