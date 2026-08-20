# Frydrych Stavby

A polished one-page presentation website concept for **Frydrych Stavby**, a local construction company based in Liberec, Czech Republic.

The project was designed around a simple goal: communicate **reliability, quality workmanship, professionalism, local presence, and trust** without relying on a generic construction-template aesthetic.

## Highlights

- Fully responsive one-page experience
- Complete Czech-language interface
- Premium charcoal / ivory / bronze visual system
- Editorial typography using Cormorant Garamond + Manrope
- Clear services, realizations, trust, about, and inquiry sections
- Semantic and accessible HTML
- Keyboard-friendly navigation
- Optimized WebP photography using `next/image`
- Restrained hover states and micro-interactions
- Centralized content/data for easier maintenance
- Production-ready Next.js architecture

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Cormorant Garamond**
- **Manrope**
- **Lucide React**

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
  sections/
    Hero.tsx
    QualityIntro.tsx
    Services.tsx
    Projects.tsx
    WhyUs.tsx
    About.tsx
    FinalCTA.tsx
  ui/

data/

public/
  images/
```

The page is divided into focused section components to keep the implementation maintainable without unnecessarily over-componentizing the interface.

## Design Approach

The visual direction combines deep architectural charcoal tones with warm ivory sections and restrained bronze accents.

Large typography and photography establish the hierarchy while interactions remain intentionally subtle, keeping the experience professional, performant, and appropriate for a local construction company.

The implementation avoids unsupported statistics, fake testimonials, and fabricated company credentials.

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Production

```bash
npm run build
npm start
```

The project is ready for deployment on **Vercel**.

## Photography

The website uses locally optimized WebP assets:

```text
public/images/hero.webp
public/images/craftsmanship.webp
public/images/project-01.webp
public/images/project-02.webp
public/images/project-03.webp
public/images/project-04.webp
public/images/about.webp
```

Photography is royalty-free presentation imagery used for the website concept and is not presented as verified Frydrych Stavby project work.

### Sources

- [Hero](https://www.pexels.com/photo/modern-house-facade-with-glowing-lights-at-dusk-4626268/)
- [Craftsmanship](https://www.pexels.com/photo/close-up-of-man-building-bricks-wall-19688828/)
- [Project 01](https://www.pexels.com/photo/modern-wooden-house-exterior-8134819/)
- [Project 02](https://www.pexels.com/photo/modern-minimalist-kitchen-interior-design-30386994/)
- [Project 03](https://www.pexels.com/photo/modern-cottage-exterior-near-lawn-with-shrubs-in-evening-5120087/)
- [Project 04](https://www.pexels.com/photo/photo-of-the-terrace-7587884/)
- [About](https://www.pexels.com/photo/close-up-of-hands-working-on-construction-site-33336594/)

## Before Production Use

Final company information should be verified before production launch, including:

- phone number
- email address
- legal/company details
- domain
- project photography
- privacy/legal content

---

Built as a frontend design/development test project with a focus on **visual quality, responsive design, accessibility, performance, and implementation detail**.
