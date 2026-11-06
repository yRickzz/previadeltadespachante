import fundoEscuro from "@/assets/fundo-escuro.jpg";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

import { directWhatsAppUrl, fullAddress, navLinks, phoneUrl, site } from "@/config/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <img src={fundoEscuro} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" className="w-44" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Serviços de despachante em Socorro – SP, com atendimento dedicado e orientação clara.
          </p>
          <p className="mt-6 font-display text-sm font-medium italic text-primary-foreground/85">
            {site.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Despachante Delta"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Despachante Delta"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
            Contato
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
              <span className="text-primary-foreground/85">{fullAddress}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
              <a href={phoneUrl} className="text-primary-foreground/85 hover:text-primary-foreground">
                Telefone fixo {site.landlineDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
            Horário
          </h2>
          <div className="mt-4 flex gap-3 text-sm">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
            <p className="leading-relaxed text-primary-foreground/85">
              Segunda a sexta-feira
              <br />
              <span className="text-primary-foreground">08h30 às 17h30</span>
              <br />
              <span className="text-primary-foreground/60">Sábado e domingo: fechado</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 pb-24 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-6 sm:pr-24">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>Socorro – SP</p>
        </div>
      </div>
    </footer>
  );
}
