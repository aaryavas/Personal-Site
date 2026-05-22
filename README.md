# Aarya Vasantlal — Portfolio

***Open Sourcing for others to reference*** 


Production Astro 4 site. Editorial-paper design with bento layouts, self-hosted fonts, and a single React island for the rotating hero.

## Quick start

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static output in dist/
pnpm preview   # preview the build
```

## Stack

- **Astro 4** + TypeScript, static output
- **React** island for `RotatingHero` (client:visible)
- **MDX** content collections (projects, posts, publications)
- **Self-hosted fonts** (Bricolage Grotesque, Literata, JetBrains Mono, Caveat, Homemade Apple)
- **lucide-astro** for icons
- **satori + sharp** for OG image generation
- **@astrojs/sitemap** + **@astrojs/rss** for SEO

## Pages

| Route | Source |
|-------|--------|
| `/` | Home — rotating hero + bento grid + featured projects |
| `/projects` | Project index grid |
| `/projects/[slug]` | Project detail (MDX) |
| `/research` | Publications + research threads + coursework |
| `/blog` | Essay index |
| `/blog/[slug]` | Essay detail (MDX) |
| `/now` | Now page — bento of current interests |
| `/contact` | Contact bento + signature |
| `/rss.xml` | RSS feed |
| `/og/[...slug].png` | Auto-generated OG images |

## Content

Add or edit content in `src/content/`:
- `projects/*.mdx` — project pages
- `posts/*.mdx` — blog essays
- `publications/*.mdx` — research publications

Schemas are defined in `src/content/config.ts`.

## Deploy to Cloudflare Pages

```bash
git init && git add . && git commit -m "initial portfolio"
gh repo create aarya-portfolio --private --source=. --push
```

In the Cloudflare dashboard:
1. **Pages** → Create project → Connect to Git → pick the repo
2. Build command: `pnpm build`
3. Build output directory: `dist`
4. Framework preset: Astro

Custom domain: add `aarya.dev` as a custom domain in Pages settings.

## Design system

The original design system docs are preserved in `docs/design-system/`. The CSS tokens live in `src/styles/tokens.css` and component styles in `src/styles/portfolio.css`.
