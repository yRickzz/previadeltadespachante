import { HeartHandshake, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const values: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Atendimento dedicado",
    text: "Cada cliente recebe atenção e orientação de acordo com a sua necessidade.",
    icon: HeartHandshake,
  },
  {
    title: "Agilidade nos processos",
    text: "Praticidade para que você resolva o que precisa sem complicação.",
    icon: Zap,
  },
  {
    title: "Compromisso e transparência",
    text: "Informações claras em cada etapa do atendimento.",
    icon: ShieldCheck,
  },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden bg-section-dark py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
          <SectionHeading
            id="sobre-title"
            align="left"
            tone="light"
            eyebrow="Sobre nós"
            title="Despachante Delta"
          />
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Estamos localizados no coração de{" "}
              <strong className="font-semibold text-primary-foreground">Socorro – SP</strong>. Nosso objetivo
              é oferecer atendimento eficiente, orientação clara e praticidade para quem precisa de
              serviços de despachante. Entre em contato para saber como podemos ajudar com sua
              necessidade.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 90}>
              <div className="group h-full rounded-xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
