import { useEffect, useState } from "react";

import { navLinks, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

const item =
  "inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-primary bg-section-dark px-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary sm:h-10 sm:gap-2 sm:px-4 sm:text-sm [&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-4 sm:[&_svg]:w-4";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "border-border shadow-soft" : "border-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-center gap-1.5 px-3 py-2.5 sm:gap-2 sm:px-8 md:justify-end"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={item}>
            {link.label}
          </a>
        ))}
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={item}>
          <WhatsAppIcon />
          Fale pelo WhatsApp
        </a>
      </nav>
    </header>
  );
}
