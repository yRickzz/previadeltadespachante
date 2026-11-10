import { ExternalLink, Star } from "lucide-react";
import { SectionWatermark } from "./Decor";

import { Button } from "@/components/ui/button";
import { googleReviewsUrl, site } from "@/config/site";
import fundoEscuro from "@/assets/fundo-escuro.jpg";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-title"
      className="relative overflow-hidden bg-section-dark py-20 text-primary-foreground sm:py-24"
    >
      <img src={fundoEscuro} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <SectionWatermark tone="dark" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-primary-foreground">Avaliações no Google</p>
          <h2
            id="avaliacoes-title"
            className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
          >
            A <span className="text-primary-foreground">confiança</span> de nossos clientes
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] px-8 py-10 backdrop-blur-sm">
            <p className="font-display text-6xl font-extrabold leading-none sm:text-7xl">
              {site.google.ratingDisplay}
              <span className="ml-1 text-2xl font-semibold text-primary-foreground/60">de 5</span>
            </p>
            <div
              className="mt-5 flex gap-1 text-gold"
              role="img"
              aria-label={`Nota ${site.google.ratingDisplay} de 5 estrelas`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" strokeWidth={1.5} />
              ))}
            </div>
            <p className="mt-4 text-primary-foreground/80">
              Com base em <strong className="text-primary-foreground">{site.google.reviewCount} avaliações</strong> no Google
            </p>
            <Button asChild variant="light" size="lg" className="mt-8">
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Ver avaliações no Google
                <ExternalLink />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
