import { Mail, MapPin } from "lucide-react";
import { company, navigation } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const footerServices = [
  "Rekonstrukce",
  "Hrubé stavby",
  "Zednické práce",
  "Fasády a zateplení",
  "Dlažby a exteriéry",
  "Technické konzultace",
];

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-intro">
            <a href="#domu" aria-label="Frydrych Stavby – domů"><Logo /></a>
            <p>Stavební práce v Liberci a okolí.<br />Poctivě, spolehlivě a s důrazem na detail.</p>
          </div>

          <div className="footer-column">
            <h2>Navigace</h2>
            <ul>{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul>
          </div>

          <div className="footer-column">
            <h2>Služby</h2>
            <ul>{footerServices.map((service) => <li key={service}><a href="#sluzby">{service}</a></li>)}</ul>
          </div>

          <div className="footer-column footer-contact">
            <h2>Kontakt</h2>
            <ul>
              <li><MapPin aria-hidden="true" />{company.area}</li>
              <li><Mail aria-hidden="true" /><a href={company.emailHref}>{company.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Frydrych Stavby. Všechna práva vyhrazena.</p>
          <a href="#kontakt">Ochrana osobních údajů</a>
        </div>
      </Container>
    </footer>
  );
}
