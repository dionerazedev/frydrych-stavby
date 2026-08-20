import { ArrowRight, BrickWall, Construction, Hammer, House, MessageSquareText, PanelsTopLeft } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { Hammer, BrickWall, Construction, House, PanelsTopLeft, MessageSquareText };

export function Services() {
  return (
    <section className="services section-dark" id="sluzby" aria-labelledby="services-title">
      <Container>
        <div id="services-title">
          <SectionHeading label="Co pro vás děláme" title="Komplexní stavební služby" light />
        </div>
        <div className="services__grid">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article className="service-item" key={service.title}>
                <Icon className="service-item__icon" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#kontakt">Probrat službu <ArrowRight aria-hidden="true" /></a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
