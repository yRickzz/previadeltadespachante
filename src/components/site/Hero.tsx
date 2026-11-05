import { ArrowRight, Clock, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/config/site";
import { LogoWatermark } from "./Decor";
import { LogoSymbol } from "./Logo";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

function DeltaComposition() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
        <path
          d="M30 60C120 16 280 8 370 40C370 196 322 334 200 398C80 334 30 200 30 60Z"
          className="stroke-silver/40"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M100 300C150 230 240 190 350 166"
          className="stroke-silver/30"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <LogoSymbol className="absolute inset-[8%] h-[84%] w-[84%] opacity-80 grayscale contrast-75 drop-shadow-[0_24px_40px_rgba(0,0,0,0.18)]" />

      <div className="animate-float-slow absolute right-0 top-[14%] flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-card sm:-right-4">
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold text-primary">{site.google.ratingDisplay} no Google</p>
          <p className="text-xs text-muted-foreground">{site.google.reviewCount} avaliações</p>
        </div>
      </div>

      <div
        className="animate-float-slow absolute bottom-[6%] left-0 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-card sm:-left-4"
        style={{ animationDelay: "-4s" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
          <Clock className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-primary">Seg. a sex.</p>
          <p className="text-xs text-muted-foreground">08h30 às 17h30</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-light-brand relative overflow-hidden pt-18"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
      <LogoWatermark className="-left-40 top-10 hidden h-[640px] w-[640px] lg:block" />

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
              <span className="mt-5 block font-display text-lg font-semibold uppercase leading-snug tracking-[0.28em] sm:text-xl">
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
