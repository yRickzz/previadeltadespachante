import { cn } from "@/lib/utils";
import { LogoSymbol } from "./Logo";

/** Enlarged official symbol as a soft watermark (silver on light, blue-gray on dark). */
export function LogoWatermark({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute select-none", className)}>
      <LogoSymbol
        className={cn(
          "h-full w-full",
          tone === "light"
            ? "opacity-[0.13] grayscale contrast-75 drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            : "opacity-[0.12] grayscale brightness-[2.2]",
        )}
      />
    </div>
  );
}

const HEX = "M50 2 93 26v48L50 98 7 74V26Z";

/** Outlined hexagons for dark sections (white, gray and a discreet gold). */
export function Hexagons({ className }: { className?: string }) {
  const items = [
    { x: 0, y: 0, s: 1, c: "text-primary-foreground/25" },
    { x: 70, y: 70, s: 0.8, c: "text-gold/45" },
    { x: 150, y: 10, s: 0.65, c: "text-silver/30", fill: true },
    { x: 20, y: 150, s: 0.7, c: "text-primary-foreground/15" },
  ];
  return (
    <svg viewBox="0 0 260 260" fill="none" aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      {items.map((h, i) => (
        <path
          key={i}
          d={HEX}
          transform={`translate(${h.x} ${h.y}) scale(${h.s})`}
          className={h.c}
          stroke="currentColor"
          strokeWidth={2 / h.s}
          fill={h.fill ? "currentColor" : "none"}
          fillOpacity={h.fill ? 0.35 : 0}
        />
      ))}
    </svg>
  );
}
