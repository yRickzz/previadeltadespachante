import { Clock, Facebook, Instagram, MapPin, Navigation, Phone } from "lucide-react";
import { SectionWatermark } from "./Decor";

import { Button } from "@/components/ui/button";
import {
  directionsUrl,
  directWhatsAppUrl,
  fullAddress,
  mapEmbedUrl,
  phoneUrl,
  site,
  whatsappUrl,
} from "@/config/site";
import { OpeningHours } from "./OpeningHours";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <SectionWatermark />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="contato-title"
          eyebrow="Contato"
          title="Entre em contato com o Despachante Delta"
          subtitle="Atendimento presencial no centro de Socorro – SP e pelo WhatsApp."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="flex flex-col gap-5">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    Endereço
                  </h3>
                  <address className="mt-1.5 not-italic leading-relaxed text-primary">
                    {fullAddress}
                  </address>
                </div>
              </div>

              <div className="mt-6 flex gap-4 border-t border-border pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    Telefone fixo
                  </h3>
                  <a
                    href={phoneUrl}
                    className="mt-1.5 inline-block rounded text-lg font-semibold text-primary transition-colors hover:text-brand"
                  >
                    {site.landlineDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-4 border-t border-border pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">WhatsApp</h3>
                  <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-block rounded text-lg font-semibold text-primary hover:underline">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-4 border-t border-border pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    Horário de atendimento
                  </h3>
                  <div className="-mx-2 mt-2">
                    <OpeningHours />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" className="sm:col-span-2">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Conversar pelo WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="brand" className="sm:px-4">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation />
                  Como chegar
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="sm:px-4">
                <a href={phoneUrl}>
                  <Phone />
                  Ligar agora
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>Siga nas redes:</span>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-primary transition-colors hover:bg-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-primary transition-colors hover:bg-accent">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-h-[340px] overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <iframe
              title={`Mapa: ${site.name}, ${fullAddress}`}
              src={mapEmbedUrl}
              className="h-full min-h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
