import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section className="projects section-light" id="realizace" aria-labelledby="projects-title">
      <Container>
        <div className="projects__heading">
          <h2 id="projects-title">Vybrané realizace</h2>
          <a className="text-link" href="#kontakt">Probrat váš projekt <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project" key={project.image}>
              <div className="project__image">
                <Image src={project.image} alt={project.alt} fill quality={80} sizes="(max-width: 767px) 88vw, (max-width: 1199px) 50vw, 25vw" />
              </div>
              <div className="project__meta">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
