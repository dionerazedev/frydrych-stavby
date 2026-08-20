import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { QualityIntro } from "@/components/sections/QualityIntro";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="hlavni-obsah">
        <Hero />
        <QualityIntro />
        <Services />
        <Projects />
        <WhyUs />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
