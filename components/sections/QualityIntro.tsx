import Image from "next/image";
import { CalendarCheck, MapPinHouse, ShieldCheck, Users } from "lucide-react";
import { trustPoints } from "@/data/trust";
import { Container } from "@/components/ui/Container";

const icons = { ShieldCheck, Users, CalendarCheck, MapPinHouse };

export function QualityIntro() {
  return (
    <section className="quality section-light" id="kvalita" aria-labelledby="quality-title">
      <Container>
        <div className="quality__top">
          <div className="quality__intro">
            <p className="section-label">Proč pracujeme tak, jak pracujeme</p>
            <h2 id="quality-title">Stavíme s důrazem na kvalitu a poctivé řemeslo.</h2>
            <p>Od prvního rozhovoru až po dokončení stavby přistupujeme ke každému projektu zodpovědně. Důraz klademe na kvalitní provedení, otevřenou komunikaci a detaily, které mají smysl.</p>
          </div>
          <div className="quality__points">
            {trustPoints.map((point) => {
              const Icon = icons[point.icon];
              return (
                <article className="quality-point" key={point.title}>
                  <Icon aria-hidden="true" />
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <figure className="craft-image">
          <Image
            src="/images/craftsmanship.webp"
            alt="Detail zednické práce s cihlami a maltou"
            fill
            quality={82}
            sizes="(max-width: 768px) 100vw, 88vw"
          />
          <figcaption>Detail, který rozhoduje o výsledku.</figcaption>
        </figure>
      </Container>
    </section>
  );
}
