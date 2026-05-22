# Aarya Vasantlal — Portfolio Design System

> An editorial-paper, bento-driven, motion-rich design system for the personal portfolio of **Aarya Vasantlal**, an early-career AI researcher (UConn '26).

---

## CONTEXT

This is a from-scratch design system. No prior codebase, Figma file, or visual brand was provided. The system was authored against a written brief and Aarya's CV/LinkedIn content (pasted in chat — no public URLs were fetched).

**Sources referenced (all chat-provided):**
- Aarya's CV text (Education, Skills, Experience, Projects)
- LinkedIn excerpt (About, recent activity, RL-LLM-AutoTrainer summary)
- Direction prompt: "extremely creative", "mostly monochrome + one accent", "pastel-esque", "no gradients", bento-box, animation-rich, modular

**No external sources to consult.** A reader without chat access can rely entirely on this README and the files alongside it.

### About Aarya (one paragraph)
Aarya Vasantlal is a senior CSE student at the University of Connecticut graduating May 2026, specializing in **agentic AI systems for software engineering**. Her work spans multi-agent architectures for bioinformatics knowledge-graph extraction, autonomous bug-report testing for Android, on-device voice AI (Savant, '25), spatial-query NLP (Flashpoint AI), legal-NLP at the EL GATO Lab, and RL alignment work for Outlier. She publishes (HyperEdit, accepted), open-sources (RL-LLM-AutoTrainer, MOPI-HFRS A2C extension — UConn Senior Design 1st place), and writes/builds across Python, Rust, Swift, and the modern TS stack.

The site should feel like **flipping through a researcher's commonplace book** — paper, ink, hand annotations, sticker labels, the occasional clean equation in the margin — but **alive**: hover states animate, a hero rotates, bento tiles peek and reorder.

---

## CONTENT FUNDAMENTALS

The site speaks in **two registers** that swap depending on surface:

| Register | Where it appears | Example |
| -- | -- | -- |
| **Precise & academic (3rd person)** | Bios, publication abstracts, research detail pages, resume | *"Aarya extended a static GNN food recommender into a dynamic multi-objective system using A2C, boosting health alignment from 0.39 → 0.73."* |
| **Curious & playful (1st person)** | Home hero one-liner, project teasers, blog, "Now" page, captions | *"I broke three eval bugs in a published paper this semester and somehow won a competition for it. Wild."* |

### Voice rules
- **Casing**: Sentence case everywhere except the wordmark and `MONO LABELS` (tracked-out, uppercase).
- **Numerals**: Always Arabic. Spell out a number only if it opens a sentence. Use the prime symbol or × for dimensions (`6,769 × 8,170`), not "x".
- **Pronouns**: "I" in essays/blog/now; "Aarya" in formal bio + abstracts; "you" addressed sparingly and never sales-y.
- **Punctuation**: Em-dashes for asides — like this — no spaces around. Use `→` and `↗` over "to" / "external".
- **Numbers + units**: Keep them tight. `47ms`, `95% acc.`, `1 of 72`. Abbreviate `accuracy → acc.`, `parameters → params` in tight UI.
- **Code**: Inline code uses `monospace + paper tile background`. Variable names left as-is (`A2C`, `ORPO`, `VB-LoRA`). Never "smart-quote" code.
- **Emoji**: Effectively never. The tactile system (stickers, stamps, hand-drawn arrows) replaces emoji entirely.
- **Hand annotation copy**: Short, tossed-off, sometimes self-deprecating. *"oops"*, *"this one was a pain"*, *"actually rewrote this 4×"*. Always set in Caveat at a -3°/-6° rotation.

### Vibe in one line
*A research notebook that someone left open on the desk — but the margins are alive.*

---

## VISUAL FOUNDATIONS

### Color
- **Paper-first.** The default background is `--paper` `#F2ECDF` — a warm cream that reads as recycled stock, never sterile-white. Three deeper tones (`--paper-2/3`) handle elevation and recessed wells.
- **Ink, never black.** Body color is `--ink` `#1A1814`, a warm near-black that sits on paper without buzzing.
- **One accent: cornflower blue.** `--accent` `#3D7BB8` carries every CTA, every link-hover, every "this matters" cue. Paired with `--accent-wash` `#D6E3F0` for fills and `--accent-ink` `#1A3E66` for legible text *on* cornflower.
- **Sticker pastels.** Five soft hues (butter, mint, lilac, sky, rose) appear ONLY as small stickers/stamps/bento-tile accents — never full backgrounds, never gradients. Think Post-its on a paper page.
- **No gradients, anywhere.** Solid fills only. Texture comes from grain, hairlines, and offset shadows.

### Type
- **Display: Bricolage Grotesque** (variable, opsz + wdth axes). Modern grotesk with subtle quirk; not Inter, not Roboto. Used for headlines and the wordmark.
- **Body: Literata** (variable, opsz axis, with italic). A literary serif by TypeTogether commissioned for Google Play Books — distinctive teardrop terminals and a soft, bookish feel. Far less commonly used in AI/research portfolios than Newsreader/Fraunces.
- **Mono: JetBrains Mono.** Code, metadata, MONO LABELS, math-adjacent notation.
- **Hand: Caveat.** Marginalia, arrows, "note to self" annotations, sticker text. Rotated -3° to -6°.
- **Scale** is modular (~1.25). Display can blow out to 128px on the hero rotator. Body never below 16px on web, 14px in dense UI tiles.

### Spacing & layout
- **8px grid**, but the system reads in 4/8/12/16/24/32/48/64/96/128 px tokens.
- **Bento-first layout**: cards (`tile`) sit on a 12-col paper grid with non-uniform spans. Tiles can rotate ±1° for tactile feel.
- **Generous margins** on long-form: max 68ch for reading, with marginalia pushed into a -200px left/right gutter.
- **Hairline rules** (`--rule`, 1px on `--paper`) are the structural divider, not boxes. Box-everything is avoided.

### Radii
- `--r-sm 4px` for chips/code; `--r-md 8px` for buttons; `--r-lg 14px` for tiles; `--r-xl 22px` for hero cards; `--r-2xl 32px` for floating widgets; `--r-pill 999px` for tags. Stamps stay sharp (`--r-xs 2px`).

### Backgrounds
- The default is `paper` — a barely-visible two-stop grain pattern (radial dots at 7px and 13px) layered on `--paper`.
- **No full-bleed photography** is part of the brand. When real imagery appears (publication thumbs, headshots, project shots), it sits inside a paper-bordered tile, often with a stamp/sticker overlay.
- **Generative ornament** (latent-walk noise, scatter dots, slow particles) is used SPARINGLY behind the hero and on the "Now" page only, always at < 8% opacity on paper.

### Borders & shadows
- **Hairlines**, then **offset shadows**. Two shadow systems coexist:
  - `--shadow-sticker` (`2px 3px 0 rgba(ink,.18)`) — flat, paper-aware drop for stickers/tiles.
  - `--shadow-hover` (`3px 4px 0 var(--ink)`) — same vector but ink-solid, only on hover/active. Adds 1px translate for press.
- **No soft Gaussian shadows.** Never `0 8px 32px rgba(0,0,0,.15)`. That look is alien to paper.
- **Borders** are 1px hairlines on rule color, or 2px ink for primary buttons, dark tiles, and stamp outlines.

### Hover / press / focus
- **Default link hover** → color shift to `--accent`, never underline change.
- **Tile hover** → translate(-2px, -2px) + adopt `--shadow-hover` (220ms `--ease-out`). The whole card "lifts off the page."
- **Press** → translate(0,0) + `--shadow-press` inset. Cards "stick" momentarily.
- **Focus ring** → 2px solid `--accent` outline at 3px offset, NOT a glow.

### Motion
- **Easing** is `--ease-out` for everything responsive (220ms), `--ease-spring` for hero / playful entry, `--ease-in-out` for ambient rotators.
- **Page transitions** = brief fade + 8px slide up (440ms). No route-level pyrotechnics.
- **Big rotating typographic hero**: the hero word rotates through a fixed list ("researcher / builder / writer / debugger") at 2.4s/word, fading characters individually with a 28ms stagger.
- **Hand-drawn annotations** are SVG strokes drawn in 600–900ms with `stroke-dashoffset` on entry.
- `prefers-reduced-motion` honored — everything snaps to opacity-only.

### Transparency / blur
- **Blur is rare.** A single use: when a marginalia popover opens, the page beneath gets a 4px backdrop-blur + 0.5 paper tint, ~140ms.
- **Transparency** is used in stickers (0.85–0.95) and paper grain only.

### Layout rules
- **Fixed elements**: the top-left wordmark + a tiny "Now playing" footer chip. Nothing else floats.
- **The nav bar is paper.** It does not invert to dark or fill on scroll. A hairline appears under it after 80px scroll.
- **Bento sections** stagger their tile rotations (-1.2°, 0.3°, -0.6°, 1.1°) so the page feels handled, not stamped.

### Cards
- **Default tile**: `--surface` (paper-light) bg, 1px hairline border, `--r-lg` 14px radius, 24px internal padding. No drop shadow at rest.
- **Ink tile** (for contrast pop): solid `--ink` bg, `--paper` text. Used 1× per page max.
- **Sticker tile**: any pastel bg (`--sticker-*`), 1px ink border, `--shadow-sticker`, ±1° rotation. For highlighted projects.

---

## ICONOGRAPHY

The site uses **Lucide** (https://lucide.dev) as its single icon system — line-style, 1.5px stroke weight, 24px default. Lucide was chosen because it is:
- Free, open-source, comprehensive (~1.5k icons)
- Matches the brand's hairline-line aesthetic
- Available via CDN (`https://unpkg.com/lucide@latest`) so the system is portable

**Where icons appear** is restricted by design:
- ✅ Inline UI metadata (calendar, clock, external-link, copy, github, x, mail)
- ✅ "Filter" / "sort" / "view-toggle" controls
- ❌ Never as bullet-list ornaments (use `→` or sticker labels)
- ❌ Never as decoration on hero/landing tiles (use hand-drawn SVG annotations or stamps instead)
- ❌ No emoji. Anywhere.

**Hand-drawn annotations** (arrows, circles, underlines) are NOT icons — they are illustrations authored per-context as inline SVG strokes, animated in on entry. See `assets/annotations.svg` for the standard set.

**Unicode characters as iconography** *are* used: `→ ↗ ↘ ↑ ↓ ∴ ≈ ± ×`. They feel handwritten/mathematical and match the editorial voice.

> ⚠️ **Substitution flag**: Lucide is a substitution for any "custom icon set" — none was provided. If Aarya wants a custom set, swap by editing `assets/icons/` and updating this section.

---

## FONT SUBSTITUTION FLAG

> ⚠️ All four brand fonts are loaded **from Google Fonts** (Bricolage Grotesque, Literata, JetBrains Mono, Caveat). No licensed/custom fonts were provided.
> If Aarya wants something more distinctive (Migra, Editorial New, PP Object Sans, Apoc, GT America, etc.), drop the woff2/ttf into `fonts/` and update `colors_and_type.css`'s `--font-display` variable. The system will inherit cleanly.

---

## INDEX (Manifest of this folder)

| Path | What it is |
| -- | -- |
| `README.md` | This file. Context, content rules, visual foundations, iconography. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code / Agent Skills. |
| `colors_and_type.css` | All base + semantic CSS variables. Import this in every artifact. |
| `assets/` | Wordmark, signature, hand-drawn annotations, sticker SVGs. |
| `fonts/` | Empty — all fonts load from Google Fonts CDN. Drop custom fonts here. |
| `preview/` | Design-system preview cards (Type, Colors, Spacing, Components, Brand). Used by the Design System tab. |
| `ui_kits/portfolio/` | The single UI kit: click-thru recreation of the portfolio site. |
| `ui_kits/portfolio/index.html` | Interactive prototype — entry point. |
| `ui_kits/portfolio/*.jsx` | Reusable components (Hero, Bento, ProjectCard, BlogPost, …). |

---

## QUICK USE

```html
<link rel="stylesheet" href="colors_and_type.css">
<body class="paper">
  <h1 class="h-display">Hi, I&rsquo;m <em class="notation">Aarya</em>.</h1>
  <p class="body">Research-oriented engineer working on agentic AI.</p>
  <span class="sticker">first place · senior design</span>
</body>
```
