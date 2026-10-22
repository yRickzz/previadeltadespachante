import { useEffect, useState } from "react";

import { formatHour, openingHours } from "@/config/site";
import { cn } from "@/lib/utils";

const weekdayIndex: Record<string, number> = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

/** Index (0 = Monday) of today's date in Socorro – SP; null before hydration. */
function useTodayIndex() {
  const [index, setIndex] = useState<number | null>(null);
  useEffect(() => {
    const name = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone: "America/Sao_Paulo",
    }).format(new Date());
    setIndex(weekdayIndex[name] ?? null);
  }, []);
  return index;
}

export function OpeningHours({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const today = useTodayIndex();
  const light = tone === "light";

  return (
    <ul className="space-y-1.5 text-sm">
      {openingHours.map((h, i) => {
        const isToday = today === i;
        return (
          <li
            key={h.day}
            className={cn(
              "flex items-center justify-between gap-4 rounded-md px-2 py-1",
              isToday && (light ? "bg-primary-foreground/10" : "bg-accent"),
            )}
          >
            <span
              className={cn(
                light ? "text-primary-foreground/80" : "text-muted-foreground",
                isToday && (light ? "text-primary-foreground" : "font-semibold text-primary"),
              )}
            >
              {h.day}
              {isToday && <span className="sr-only"> (hoje)</span>}
            </span>
            <span
              className={cn(
                "tabular-nums",
                light ? "text-primary-foreground" : "font-medium text-primary",
                !h.open && (light ? "text-primary-foreground/60" : "text-muted-foreground"),
              )}
            >
              {h.open && h.close ? `${formatHour(h.open)} às ${formatHour(h.close)}` : "Fechado"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
