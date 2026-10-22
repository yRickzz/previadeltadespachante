import { Car, FileCheck2, FileText, HelpCircle, Repeat2, type LucideIcon } from "lucide-react";

/**
 * Service categories shown on the site.
 * These are suggestions to be confirmed by Despachante Delta before publishing —
 * add, remove or rename items here and the cards update automatically.
 */
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Opening WhatsApp message when the visitor taps "Consultar serviço". */
  message: string;
};

export const services: Service[] = [
  {
    title: "Documentação veicular",
    description: "Tire suas dúvidas sobre documentos do seu veículo e receba orientação.",
    icon: FileText,
    message:
      "Olá! Vim pelo site do Despachante Delta e gostaria de informações sobre documentação veicular.",
  },
  {
    title: "Transferência de veículos",
    description: "Consulte como funciona o processo de transferência e o que é necessário.",
    icon: Repeat2,
    message:
      "Olá! Vim pelo site do Despachante Delta e gostaria de informações sobre transferência de veículos.",
  },
  {
    title: "Licenciamento",
    description: "Converse com a equipe sobre o licenciamento do seu veículo.",
    icon: Car,
    message:
      "Olá! Vim pelo site do Despachante Delta e gostaria de informações sobre licenciamento.",
  },
  {
    title: "Regularização de documentos",
    description: "Entenda os caminhos para regularizar a documentação pendente.",
    icon: FileCheck2,
    message:
      "Olá! Vim pelo site do Despachante Delta e gostaria de informações sobre regularização de documentos.",
  },
  {
    title: "Orientações sobre procedimentos veiculares",
    description: "Receba orientação clara sobre etapas e procedimentos.",
    icon: HelpCircle,
    message:
      "Olá! Vim pelo site do Despachante Delta e gostaria de orientações sobre procedimentos veiculares.",
  },
];
