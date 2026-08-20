import { Ruler } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <Container className="final-cta__inner">
        <Ruler aria-hidden="true" />
        <div>
          <h2 id="final-cta-title">Plánujete stavbu nebo rekonstrukci?</h2>
          <p>Ozvěte se nám a společně probereme váš projekt.</p>
        </div>
        <ButtonLink href="#kontakt" tone="dark">Nezávazná poptávka</ButtonLink>
      </Container>
    </section>
  );
}
