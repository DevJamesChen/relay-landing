# Relay — Landing Page

Marketing site for **Relay**, the universal content API for LLM pipelines.
Dark theme, single static page, built to be fast and easy to extend.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) (Button, Card, Badge, Accordion, Separator) on Base UI
- [lucide-react](https://lucide.dev) icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build + type check
npm run lint     # eslint
npm start        # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx           # fonts, metadata, dark theme
    globals.css          # design tokens (brand + dark palette) and utilities
    page.tsx             # section composition
  components/
    logo.tsx             # Relay wordmark + signal mark
    ui/                  # shadcn primitives + section helpers (Container, SectionHeading)
    sections/            # one file per page section
      site-header.tsx        hero.tsx              dashboard-preview.tsx
      pain-points.tsx        features.tsx          how-it-works.tsx
      integrations.tsx       pipeline.tsx          stats.tsx
      use-cases.tsx          testimonials.tsx      pricing.tsx
      faq.tsx                cta.tsx               site-footer.tsx
```

## Theming

The palette lives as CSS variables in `src/app/globals.css`. The accent is a
single `--brand` token (emerald) exposed to Tailwind as `bg-brand`,
`text-brand`, `border-brand`, etc. Swap that one token to re-skin the site.
