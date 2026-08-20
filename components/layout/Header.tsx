"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <Container className="site-header__inner">
        <a className="site-header__brand" href="#domu" aria-label="Frydrych Stavby – domů">
          <Logo />
        </a>

        <nav className="desktop-nav" aria-label="Hlavní navigace">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#kontakt">Nezávazná poptávka</a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Zavřít hlavní nabídku" : "Otevřít hlavní nabídku"}
          aria-expanded={menuOpen}
          aria-controls="mobilni-navigace"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`} id="mobilni-navigace">
        <nav aria-label="Mobilní navigace">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="mobile-menu__cta" href="#kontakt" onClick={() => setMenuOpen(false)}>
            Nezávazná poptávka
          </a>
        </nav>
      </div>
    </header>
  );
}
