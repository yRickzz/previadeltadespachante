import logoAsset from "@/assets/despachante-delta-logo.png.asset.json";
import verticalLogoAsset from "@/assets/delta-logo-vertical.png.asset.json";
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

/** Decorative outline only; brand placements use the complete original logo. */
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
        "inline-flex w-28 shrink-0 items-center justify-center",
        tone === "light" && "rounded-lg bg-background p-3",
        className,
      )}
    >
      <img src={verticalLogoAsset.url} alt="Despachante Delta" width={1080} height={804} decoding="async" className="h-auto w-full object-contain" />
    </span>
  );
}
