import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="hero" id="domu" aria-labelledby="hero-title">
      <Image
        className="hero__image"
        src="/images/hero.webp"
        alt="Moderní rodinný dům s osvětleným interiérem za soumraku"
        fill
        priority
        quality={88}
        sizes="100vw"
      />
      <div className="hero__veil" aria-hidden="true" />
      <Container className="hero__inner">
        <div className="hero__content">
          <p className="section-label">Stavební práce v Liberci a okolí</p>
          <h1 id="hero-title">
            <span>Stavíme <em>poctivě.</em></span>
            <span>Od základů</span>
            <span>po poslední detail.</span>
          </h1>
          <p className="hero__copy">
            Stavíme a rekonstruujeme v Liberci a okolí. Kvalitní řemeslo, férový přístup a důraz na každý detail.
          </p>
          <div className="hero__actions">
            <ButtonLink href="#kontakt">Nezávazná poptávka</ButtonLink>
            <ButtonLink href="#realizace" tone="ghost">Naše realizace</ButtonLink>
          </div>
        </div>
      </Container>
      <a className="hero__scroll" href="#kvalita" aria-label="Přejít k informacím o našem přístupu">
        <span>Objevte náš přístup</span>
        <span aria-hidden="true" className="hero__scroll-line" />
      </a>
    </section>
  );
}
