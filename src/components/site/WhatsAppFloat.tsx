import { whatsappUrl } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com o Despachante Delta pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-background shadow-lift ring-4 ring-background/70 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-ring sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
