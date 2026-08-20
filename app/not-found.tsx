import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="not-found" id="hlavni-obsah">
      <Container className="not-found__inner">
        <Logo />
        <h1>Stránka nebyla nalezena.</h1>
        <p>Požadovaná stránka neexistuje nebo byla přesunuta. Vraťte se na hlavní prezentaci Frydrych Stavby.</p>
        <ButtonLink href="/">Zpět na hlavní stránku</ButtonLink>
      </Container>
    </main>
  );
}
