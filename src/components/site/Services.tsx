import { ArrowUpRight } from "lucide-react";
import { SectionWatermark } from "./Decor";

import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import { whatsappUrl } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <SectionWatermark />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços de despachante em Socorro – SP"
          title="Como podemos ajudar?"
          subtitle="Entre em contato para conhecer os serviços disponíveis e receber orientações."
        />

        <ul className="mt-14 flex flex-wrap justify-center gap-5">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 3) * 90}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.875rem)]"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Button asChild variant="outline" className="mt-6 self-start">
                  <a
                    href={whatsappUrl(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar serviço: ${service.title} pelo WhatsApp`}
                  >
                    Consultar serviço
                    <ArrowUpRight />
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
