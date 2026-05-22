---
name: aarya-vasantlal-design
description: Use this skill to generate well-branded interfaces and assets for Aarya Vasantlal's personal portfolio (researcher / engineer brand). Contains essential design guidelines, colors, type, fonts, assets, and UI-kit components for prototyping. The brand is paper-and-ink editorial with one cornflower-blue accent, tactile sticker/stamp motifs, hand-drawn annotations, big rotating typographic heros, math-notation ornament, and bento-box layouts.
user-invocable: true
---

# Aarya Vasantlal — Design System

Read `README.md` in this skill first for the full brief — content fundamentals, visual foundations, iconography, and a manifest of every file. The high-impact files:

- `colors_and_type.css` — drop into any artifact for every brand token (colors, type families, scale, radii, shadows, motion, sticker pastels).
- `assets/signature.svg`, `assets/monogram.svg`, `assets/annotations.svg`, `assets/noise-dots.svg` — primary marks + annotation library.
- `preview/` — design-system spec cards (Type, Colors, Spacing, Components, Brand) showing exactly how each token renders.
- `ui_kits/portfolio/` — a complete click-thru recreation of the portfolio site (home / projects / research / blog / now / contact) with reusable React components in `components.jsx`, `home.jsx`, `projects.jsx`, `research.jsx`, `blog.jsx`, `now.jsx`, `contact.jsx`.

## When invoked

If creating **visual artifacts** (slides, mocks, throwaway prototypes, social cards, decks):
1. Copy `colors_and_type.css` into your output folder and link it.
2. Copy any needed assets (signature, monogram, annotation symbols) into the output.
3. Use the visual foundations: warm paper (`#F2ECDF`) background, ink (`#1A1814`) text, ONE cornflower-blue (`#3D7BB8`) accent, sticker pastels for highlights, hand-drawn annotation strokes over UI, math-notation ornament where appropriate.
4. Type: Bricolage Grotesque (display), Literata (body serif, italic for emphasis), JetBrains Mono (code/meta/MONO LABELS), Caveat (annotations), Homemade Apple (signature only).
5. No gradients. No soft Gaussian shadows. Flat offset shadows + 1px hairlines + 2px ink borders.

If working on **production code** (a real site, app, deployed prototype):
1. Read `colors_and_type.css` and adopt the tokens verbatim.
2. Crib component patterns from `ui_kits/portfolio/components.jsx` (Tile, Sticker, Stamp, Btn, RotatingHero, Annotation, ScratchpadBg, MathOrnament).
3. Honor the content rules in `README.md` — two voice registers (3rd-person academic for bios/abstracts; 1st-person curious for hero/blog/now), em-dash asides, sentence case, never emoji.
4. Iconography: use Lucide via CDN. Hand-drawn arrows/circles are illustrations, not icons — author per-context as inline SVG.

## If the user invokes this skill without further direction

Ask what they want to build or design. Then ask a few targeted questions (the audience, the surface, whether to lean academic vs playful, what content they want to feature) and act as their expert designer — output HTML artifacts for prototypes/mocks/decks, or production-ready code if that's the goal. Always reuse the system; never re-invent.

## House style cheat sheet

- Backgrounds: paper grain only. No imagery as background.
- Headings: Bricolage Grotesque, weight 600, tight tracking (-0.02 to -0.045em).
- Display flourish: italic Literata `<em>` *inside* a Bricolage heading, in `--accent-ink` navy. Use sparingly.
- Stickers: ±2–4° rotation, 1px ink border, offset shadow.
- Stamps: rotation -6° to +6°, 2px accent-ink border, sharp corners, ~85% opacity.
- Tiles: 14px radius, 1px hairline, 22px padding. Hover: translate(-3px,-3px) + 4px offset ink shadow.
- Section markers: ALL-CAPS mono "kicker" eyebrow, then sentence-case display headline.
- Marginalia: Caveat, -3° rotation, accent-ink color.
- Math ornament: italic Literata + the actual unicode (`∂ℒ/∂θ ≈ 0`, `∑ → ∞`, `≈ 95%`).
