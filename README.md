# Frydrych Stavby

Prezentační jednostránkový web stavební firmy Frydrych Stavby v Liberci.

## Tech stack

- Next.js App Router
- React a TypeScript
- Tailwind CSS
- Lokálně načítané fonty Cormorant Garamond a Manrope
- Lucide React pro jednotné linkové ikony

## Local development

```bash
npm install
npm run dev
```

Web poté otevřete na adrese [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Image assets

Web používá finální lokální fotografie optimalizované do formátu WebP:

```text
public/images/hero.webp
public/images/craftsmanship.webp
public/images/project-01.webp
public/images/project-02.webp
public/images/project-03.webp
public/images/project-04.webp
public/images/about.webp
```

Zdrojové fotografie pocházejí z Pexels: [hero](https://www.pexels.com/photo/modern-house-facade-with-glowing-lights-at-dusk-4626268/), [řemeslný detail](https://www.pexels.com/photo/close-up-of-man-building-bricks-wall-19688828/), [projekt 01](https://www.pexels.com/photo/modern-wooden-house-exterior-8134819/), [projekt 02](https://www.pexels.com/photo/modern-minimalist-kitchen-interior-design-30386994/), [projekt 03](https://www.pexels.com/photo/modern-cottage-exterior-near-lawn-with-shrubs-in-evening-5120087/), [projekt 04](https://www.pexels.com/photo/photo-of-the-terrace-7587884/) a [o nás](https://www.pexels.com/photo/close-up-of-hands-working-on-construction-site-33336594/).

Fotografie jsou prezentační stock imagery pro koncept webu a nedokládají konkrétní realizace Frydrych Stavby.

## Deployment

Projekt je připravený pro nasazení na Vercel. Před produkčním spuštěním ověřte kontaktní údaje, doménu, metadata a původ projektových fotografií.
