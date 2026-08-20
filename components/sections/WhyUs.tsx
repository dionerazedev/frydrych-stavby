import { Handshake, MapPin, MessagesSquare, ScanSearch, ShieldCheck, UserRoundCheck } from "lucide-react";
import { reasons } from "@/data/trust";
import { Container } from "@/components/ui/Container";

const icons = { ShieldCheck, Handshake, UserRoundCheck, MessagesSquare, MapPin, ScanSearch };

export function WhyUs() {
  return (
    <section className="why section-dark" aria-labelledby="why-title">
      <Container>
        <h2 id="why-title">Proč si vybrat <span>Frydrych Stavby</span></h2>
        <div className="why__grid">
          {reasons.map((reason) => {
            const Icon = icons[reason.icon];
            return (
              <article className="why-item" key={reason.title}>
                <Icon aria-hidden="true" />
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
