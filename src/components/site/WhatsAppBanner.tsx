import { ArrowRight, CheckCheck, ChevronLeft, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/config/site";
import { Hexagons, LogoWatermark } from "./Decor";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

const message = "Olá! Tenho dúvidas com a documentação do meu veículo. Podem me ajudar?";

function Bubble({ side, children, time }: { side: "in" | "out"; children: React.ReactNode; time: string }) {
  const out = side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12px] leading-snug shadow-sm ${
          out ? "rounded-br-sm bg-highlight/25 text-foreground" : "rounded-bl-sm bg-background text-foreground"
        }`}
      >
        {children}
        <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
          {time}
          {out && <CheckCheck className="h-3 w-3 text-primary" />}
        </span>
      </div>
    </div>
  );
}

function Phone3D() {
  return (
    <div className="relative mx-auto w-[250px] sm:w-[280px] [transform:rotate(-7deg)]">
      {/* glow/depth layers */}
      <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-highlight/20 blur-2xl" />
      <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.6rem] bg-petrol/80" />
      <div className="relative rounded-[2.6rem] border-[10px] border-foreground bg-foreground shadow-2xl">
        <div aria-hidden className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />
        <div className="overflow-hidden rounded-[2rem] bg-secondary">
          {/* chat header */}
          <div className="flex items-center gap-2 bg-primary px-3 pb-3 pt-9 text-primary-foreground">
            <ChevronLeft className="h-4 w-4 opacity-80" />
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background p-1">
              <Logo className="w-full" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold">{site.name}</p>
              <p className="text-[10px] opacity-75">online</p>
            </div>
            <Phone className="h-4 w-4 opacity-80" />
          </div>
          {/* messages */}
          <div className="space-y-2.5 px-3 py-4">
            <div className="flex justify-center py-1">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background p-2 shadow-sm">
                <Logo className="w-full" />
              </span>
            </div>
            <Bubble side="out" time="09:12">Olá! Tenho dúvidas sobre a documentação do meu veículo.</Bubble>
            <Bubble side="in" time="09:13">Olá! Claro, estamos prontos para ajudar. Qual é a sua dúvida?</Bubble>
            <Bubble side="out" time="09:14">Preciso fazer a transferência.</Bubble>
            <Bubble side="in" time="09:14">Perfeito, vamos te orientar em cada etapa.</Bubble>
          </div>
          {/* input bar */}
          <div className="flex items-center gap-2 px-3 pb-5">
            <div className="h-8 flex-1 rounded-full bg-background px-3 text-[11px] leading-8 text-muted-foreground">Mensagem</div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-vivid text-primary-foreground">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppBanner() {
  return (
    <section aria-labelledby="duvidas-title" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <LogoWatermark tone="dark" className="-left-24 top-1/2 h-[130%] -translate-y-1/2" />
      <Hexagons />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-highlight/20" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-vivid/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 id="duvidas-title" className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-primary-foreground">Dúvidas</span> com a documentação do seu veículo?
          </h2>
          <p className="mt-5 max-w-md text-lg text-primary-foreground/85">
            Entre em contato pelo WhatsApp. Estamos prontos para ajudar você!
          </p>
          <Button asChild variant="light" size="lg" className="mt-8 uppercase tracking-wide">
            <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-5 w-5" />
              Falar pelo WhatsApp
              <ArrowRight />
            </a>
          </Button>
          <p className="mt-3 text-sm text-primary-foreground/70">{site.phoneDisplay}</p>
          <div className="mt-10 border-l-4 border-gold pl-5 font-display text-xl font-extrabold uppercase leading-tight tracking-[0.12em] sm:text-2xl lg:text-3xl">
            <span className="block text-primary-foreground">Rapidez e eficiência</span>
            <span className="block text-primary-foreground">que você merece</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Phone3D />
        </Reveal>
      </div>
    </section>
  );
}
