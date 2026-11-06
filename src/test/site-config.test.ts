import { describe, expect, it } from "vitest";

import { services } from "@/config/services";
import { directWhatsAppUrl, directionsUrl, openingHours, phoneUrl, site, whatsappUrl } from "@/config/site";

describe("Despachante Delta contact rules", () => {
  it("WhatsApp links use the number 5519997437213 with a pre-filled message", () => {
    const url = whatsappUrl();
    expect(url.startsWith("https://wa.me/5519997437213?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toBe(
      "Olá! Conheci o site do Despachante Delta e gostaria de mais informações sobre os serviços.",
    );
  });

  it("the landline dials (19) 3895-4575", () => {
    expect(site.landlineDisplay).toBe("(19) 3895-4575");
    expect(phoneUrl).toBe("tel:+551938954575");
  });

  it("the direct WhatsApp contact opens (19) 99743-7213", () => {
    expect(site.phoneDisplay).toBe("(19) 99743-7213");
    expect(directWhatsAppUrl).toBe("https://wa.me/5519997437213");
  });

  it("'Como chegar' opens Google Maps at Rua XV de Novembro, 68, Socorro", () => {
    expect(directionsUrl.startsWith("https://www.google.com/maps/search/?api=1&query=")).toBe(true);
    expect(decodeURIComponent(directionsUrl)).toContain("Rua XV de Novembro, 68");
    expect(decodeURIComponent(directionsUrl)).toContain("Socorro");
  });

  it("opens 08:30–17:30 Monday to Friday and is closed on weekends", () => {
    const weekdays = openingHours.slice(0, 5);
    expect(weekdays.every((h) => h.open === "08:30" && h.close === "17:30")).toBe(true);
    expect(openingHours[5]).toMatchObject({ day: "Sábado", open: null });
    expect(openingHours[6]).toMatchObject({ day: "Domingo", open: null });
  });

  it("each service card opens WhatsApp with a message naming that service", () => {
    for (const s of services) {
      expect(whatsappUrl(s.message)).toContain("wa.me/5519997437213");
      expect(s.message.toLowerCase()).toContain((s.title.split(" ")[0] ?? "").toLowerCase());
    }
  });
});
