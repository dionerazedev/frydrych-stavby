export const company = {
  name: "Frydrych Stavby",
  owner: "Ing. Jiří Frydrych",
  city: "Liberec",
  area: "Liberec a okolí",
  // Ověřit doménu a e-mailovou adresu před spuštěním webu do produkce.
  email: "info@frydrychstavby.cz",
  emailHref: "mailto:info@frydrychstavby.cz",
} as const;

export const navigation = [
  { label: "Domů", href: "#domu" },
  { label: "Služby", href: "#sluzby" },
  { label: "Realizace", href: "#realizace" },
  { label: "O nás", href: "#onas" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
