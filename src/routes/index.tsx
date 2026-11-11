import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Reviews } from "@/components/site/Reviews";
import { Services } from "@/components/site/Services";
import { LogoSymbol } from "@/components/site/Logo";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { WhatsAppBanner } from "@/components/site/WhatsAppBanner";
import { directionsUrl, openingHours, site } from "@/config/site";

const title = "Despachante Delta | Serviços de Despachante em Socorro – SP";
const description =
  "Entre em contato com o Despachante Delta em Socorro – SP. Consulte nossos serviços e receba atendimento pelo WhatsApp.";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description,
  telephone: `+${site.phoneIntl}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "City", name: "Socorro" },
  hasMap: directionsUrl,
  openingHoursSpecification: openingHours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.schemaDay}`,
      opens: h.open,
      closes: h.close,
    })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.google.rating,
    reviewCount: site.google.reviewCount,
    bestRating: 5,
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: site.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Socorro" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <WhatsAppBanner />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center p-8">
        <LogoSymbol className="h-auto max-h-[60vh] w-auto max-w-[70vw] opacity-[0.05] grayscale" />
      </div>
      <WhatsAppFloat />
    </>
  );
}
