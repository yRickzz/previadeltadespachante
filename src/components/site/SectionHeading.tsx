import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  id?: string;
}) {
  return (
    <Reveal
      className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}
    >
      {eyebrow && (
        <p className={cn("eyebrow", tone === "light" && "text-primary-foreground/70")}>{eyebrow}</p>
      )}
      <h2
        id={id}
        className={cn(
          "mt-3 text-3xl font-bold leading-tight sm:text-4xl",
          tone === "dark" ? "text-primary" : "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={cn(
          "mt-5 block h-0.5 w-12 rounded-full",
          align === "center" && "mx-auto",
          tone === "dark" ? "bg-brand" : "bg-primary-foreground/50",
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted-foreground" : "text-primary-foreground/80",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
