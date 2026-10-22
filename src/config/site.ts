/**
 * Central business data for the Despachante Delta website.
 * Edit this file to update contact details, hours, services or external links.
 * Only real, confirmed information should live here.
 */

export const site = {
  name: "Despachante Delta",
  tagline: "Agilidade e eficiência que você merece.",
  city: "Socorro",
  state: "SP",
  address: {
    street: "Rua XV de Novembro, 68",
    city: "Socorro",
    state: "SP",
    postalCode: "13960-000",
    country: "BR",
  },
  phoneDisplay: "(19) 99743-7213",
  /** International format, digits only (Brazil). */
  phoneIntl: "5519997437213",
  defaultWhatsAppMessage:
    "Olá! Conheci o site do Despachante Delta e gostaria de mais informações sobre os serviços.",
  social: {
    instagram: "https://www.instagram.com/despachantedelta",
    facebook: "https://www.facebook.com/share/1DuAsTD1ba/",
  },
  google: {
    rating: 5,
    ratingDisplay: "5,0",
    reviewCount: 42,
    /**
     * Paste the real Google Business Profile reviews link here.
     * While empty, the button opens a Google Maps search for the business.
     */
    reviewsUrl: "",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city} – ${site.address.state}, CEP ${site.address.postalCode}`;

const mapsQuery = `${site.name}, ${site.address.street}, ${site.address.city} - ${site.address.state}, ${site.address.postalCode}`;

export function whatsappUrl(message: string = site.defaultWhatsAppMessage): string {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const phoneUrl = `tel:+${site.phoneIntl}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.street}, ${site.address.city} - ${site.address.state}, ${site.address.postalCode}`,
)}&z=17&output=embed`;

export const googleReviewsUrl = site.google.reviewsUrl || directionsUrl;

/** Weekly opening hours. `open`/`close` in 24h "HH:MM"; null = closed. */
export const openingHours: {
  day: string;
  schemaDay: string;
  open: string | null;
  close: string | null;
}[] = [
  { day: "Segunda-feira", schemaDay: "Monday", open: "08:30", close: "17:30" },
  { day: "Terça-feira", schemaDay: "Tuesday", open: "08:30", close: "17:30" },
  { day: "Quarta-feira", schemaDay: "Wednesday", open: "08:30", close: "17:30" },
  { day: "Quinta-feira", schemaDay: "Thursday", open: "08:30", close: "17:30" },
  { day: "Sexta-feira", schemaDay: "Friday", open: "08:30", close: "17:30" },
  { day: "Sábado", schemaDay: "Saturday", open: null, close: null },
  { day: "Domingo", schemaDay: "Sunday", open: null, close: null },
];

export function formatHour(hhmm: string): string {
  return hhmm.replace(":", "h");
}

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
] as const;
