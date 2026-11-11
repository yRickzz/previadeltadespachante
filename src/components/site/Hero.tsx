import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

function DeltaComposition() {
  return (
    <div className="mx-auto flex aspect-square w-full max-w-md items-center justify-center" aria-hidden="true">
      <Logo className="w-[80%] max-w-full" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-light-brand relative overflow-hidden pt-40 md:pt-28"
    >
            <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              Despachante em Socorro – SP
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-6 text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.25rem]"
            >
              Despachante Delta
              <span className="mt-6 block border-l-4 border-vivid pl-5 font-display text-2xl font-extrabold uppercase leading-tight tracking-[0.12em] sm:text-3xl lg:text-4xl">
                <span className="block text-muted-foreground">Rapidez e eficiência</span>
                <span className="block text-primary">que você merece</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Conte com um atendimento dedicado para resolver suas necessidades com praticidade,
              transparência e eficiência.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Falar com um especialista
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">
                Conheça nossos serviços
                <ArrowRight />
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:order-first">
          <DeltaComposition />
        </Reveal>
      </div>
    </section>
  );
}
