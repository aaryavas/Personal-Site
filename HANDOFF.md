# Handoff — Build & Deploy Aarya's Portfolio

This design system is **complete**. Hand it to Claude Code with the prompt below to scaffold a production Astro site that ships to a real domain.

---

## 1. Prompt to give Claude Code

> I have a complete design system in this repo at the root (`README.md`, `SKILL.md`, `colors_and_type.css`, `assets/`, `preview/`, `ui_kits/portfolio/`). Read `SKILL.md` first, then `README.md`, then explore `ui_kits/portfolio/` for the component patterns.
>
> **Build me a production Astro site** with these surfaces, mirroring the design system exactly:
> - `/` — Home with rotating hero + bento (port `ui_kits/portfolio/home.jsx`)
> - `/projects` and `/projects/[slug]` — port `ui_kits/portfolio/projects.jsx`, MDX content
> - `/research` — port `research.jsx`
> - `/blog` and `/blog/[slug]` — port `blog.jsx`, MDX for posts
> - `/now` — port `now.jsx`
> - `/contact` — port `contact.jsx`
>
> **Constraints**
> - Use Astro 4 + TypeScript. Use Astro components (`.astro`) for static markup, drop into React islands ONLY for the rotating hero word and any interactive tweaks.
> - Import `colors_and_type.css` from `src/styles/`. Copy `assets/` into `src/assets/`.
> - Content lives in `src/content/projects/*.mdx`, `src/content/posts/*.mdx`, `src/content/publications/*.mdx`. Use Astro Content Collections with zod schemas.
> - Add `lucide-astro` for icons.
> - Add a sitemap, RSS feed, OpenGraph image generator, and analytics-ready `<head>` (no provider hardcoded).
> - Add `prefers-reduced-motion` handling.
> - Lighthouse: aim for 100/100/100/100 on Performance / Accessibility / Best Practices / SEO.
>
> When done, give me `pnpm dev`, `pnpm build`, `pnpm preview` working, and a `README.md` with deployment steps for Cloudflare Pages.

That prompt is enough — Claude Code will read the design system and replicate it faithfully.

---

## 2. Deploy steps (Cloudflare Pages, recommended)

```bash
# In your new Astro project
git init && git add . && git commit -m "initial portfolio"
gh repo create aarya-portfolio --private --source=. --push

# In Cloudflare dashboard
# Pages → Create project → Connect to Git → Pick the repo
# Build command:    pnpm build
# Build output:     dist
# Framework preset: Astro
```

Cloudflare gives you a `*.pages.dev` URL immediately. Then in Cloudflare Registrar, buy `aaryavasantlal.com` and add it as a custom domain — DNS auto-configures.

## 3. Things to add post-launch

1. **A real CV PDF** — generate from the `/contact` page or maintain in LaTeX, drop into `/public/cv.pdf`.
2. **Real project screenshots** — replace placeholder bento tiles with actual app screenshots / loss curves / KG diagrams.
3. **A real signature** — sign your name on paper, scan, trace in Figma → SVG → replace `assets/signature.svg`.
4. **OpenGraph image generator** — Astro's `satori` integration makes per-post OG cards in the brand style automatically.
5. **Comments** — Giscus (GitHub-discussions-backed) keeps the static-site purity.
6. **Search** — Pagefind (zero-config, static, fast) over MDX content.

## 4. If you want to skip Astro

- **Next.js**: `npx create-next-app@latest --typescript` → set `output: 'export'` in `next.config.js`. Reuse `ui_kits/portfolio/*.jsx` directly (they're already React).
- **Plain HTML**: the `ui_kits/portfolio/index.html` is already a working SPA. Inline-bundle it with the project's "Save as standalone HTML" skill and host the single file anywhere.

---

## What's portable from this repo as-is

| File | Drop straight into the new project |
| -- | -- |
| `colors_and_type.css` | `src/styles/tokens.css` |
| `assets/*` | `public/` or `src/assets/` |
| `ui_kits/portfolio/components.jsx` | `src/components/` (split per component) |
| `ui_kits/portfolio/home.jsx` etc. | `src/pages/*.astro` (port markup, keep data) |
| `SKILL.md` + `README.md` | `docs/design-system/` — keep for future agent work |

The data arrays in `projects.jsx` and `blog.jsx` are the right schema for your MDX frontmatter. Lift them straight over.
