import type { Metadata } from "next";
import localFont from "next/font/local";
import { DirectionContract } from "@/components/ui/DirectionContract";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/manrope-latin-ext.woff2",
  variable: "--font-sans",
  weight: "200 800",
  display: "swap",
});

const cormorantGaramond = localFont({
  src: "./fonts/cormorant-garamond-latin-ext.woff2",
  variable: "--font-serif",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.frydrychstavby.cz"),
  title: "Frydrych Stavby | Stavební práce v Liberci a okolí",
  description: "Frydrych Stavby nabízí stavební práce, rekonstrukce a řemeslné služby v Liberci a okolí s důrazem na kvalitní provedení a férový přístup.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    title: "Frydrych Stavby | Stavební práce v Liberci a okolí",
    description: "Stavební práce, rekonstrukce a řemeslné služby v Liberci a okolí.",
    siteName: "Frydrych Stavby",
  },
};

const directionContract = `THESIS: Dům po setmění jako důkaz pečlivé práce; odmítáme katalog plný zaměnitelných stavebních karet.
OWN-WORLD: Uhlově černá a teplá slonová kost, tlumený bronz, hranaté rámy, jemné linky, velká fotografie a úsporná redakční sazba.
STORY: Návštěvník během prvního pohledu pozná lokální stavební firmu, pochopí její poctivý přístup, projde služby a osloví ji s projektem.
FIRST VIEWPORT: Celoplošná večerní stavba, levý tmavý textový prostor, třířádkový titulek přes polovinu výšky a viditelná bronzová poptávka.
FORM: Referenčně vedená prémiová stavební prezentace; schválený referenční klíč REF-FS-724X2172, bez náhodného konceptového seedu.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${manrope.variable} ${cormorantGaramond.variable}`}>
      <body>
        <DirectionContract value={directionContract} />
        <a className="skip-link" href="#hlavni-obsah">Přejít na hlavní obsah</a>
        {children}
      </body>
    </html>
  );
}
