import Image from "next/image";
import { Check, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

const values = [
  "Individuální přístup ke každému projektu",
  "Srozumitelná komunikace a férové jednání",
  "Důraz na kvalitu, detail a dlouhou životnost",
];

export function About() {
  return (
    <section className="about section-light" id="onas" aria-labelledby="about-title">
      <Container className="about__grid">
        <figure className="about__image">
          <Image src="/images/about.webp" alt="Detail rukou při stavebních pracích" fill quality={82} sizes="(max-width: 899px) 100vw, 34vw" />
        </figure>

        <div className="about__copy">
          <p className="section-label">O nás</p>
          <h2 id="about-title">Stavby s dohledem<br />a zodpovědným přístupem</h2>
          <p>Frydrych Stavby je stavební firma působící v Liberci a okolí. Ke každému projektu přistupujeme individuálně a s důrazem na kvalitní provedení, férové jednání a srozumitelnou komunikaci.</p>
          <p>Naším cílem je odvést práci, za kterou si můžeme stát od prvního kroku až po předání hotového díla.</p>
          <ul>
            {values.map((value) => <li key={value}><Check aria-hidden="true" />{value}</li>)}
          </ul>
        </div>

        <aside className="contact-card" id="kontakt" aria-labelledby="contact-title">
          <h2 id="contact-title">Nezávazná poptávka</h2>
          <p>Máte projekt nebo se chcete poradit? Ozvěte se nám a probereme další postup.</p>
          <address>
            <a href={company.emailHref}><Mail aria-hidden="true" />{company.email}</a>
            <span><MapPin aria-hidden="true" />{company.area}</span>
          </address>
          <ButtonLink href={company.emailHref} tone="dark">Kontaktovat nás</ButtonLink>
        </aside>
      </Container>
    </section>
  );
}
