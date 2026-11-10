import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "border-border shadow-soft" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" aria-label="Despachante Delta — voltar ao início" className="rounded-md">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-primary/60 px-4 text-sm font-medium text-primary transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-md border border-primary/60 px-4 text-sm font-medium text-primary transition-colors hover:bg-accent [&_svg]:h-4 [&_svg]:w-4">
              <WhatsAppIcon />
              Fale pelo WhatsApp
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary transition-colors hover:bg-accent md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <nav aria-label="Navegação móvel" className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="rounded-md px-3 py-3 text-base font-medium text-primary transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="lg" className="mt-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon />
              Fale pelo WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
