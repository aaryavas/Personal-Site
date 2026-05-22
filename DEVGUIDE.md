# Developer Guide — Aarya's Portfolio

## Running the dev environment

**Prerequisites:** Node.js 18+ and pnpm

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Start the dev server (http://localhost:4321)
pnpm dev

# Type-check + build for production (output → dist/)
pnpm build

# Preview the production build locally
pnpm preview
```

The dev server supports hot-reload — any file change in `src/` is reflected instantly without a full restart.

---

## Project structure at a glance

```
src/
  pages/          ← one .astro file per route
  components/     ← shared Astro + React components
  content/
    projects/     ← MDX files, one per project
    posts/        ← MDX files, one per blog essay
    publications/ ← MDX files, one per paper/pub
  styles/         ← tokens.css, portfolio.css
  fonts/          ← self-hosted font files
```

---

## Editing text on a specific page

Every page lives in `src/pages/`. Open the matching file and edit the prose directly in the JSX-like Astro template.

| Page | File |
|------|------|
| Home (hero + bento) | `src/pages/index.astro` |
| Now | `src/pages/now.astro` |
| Research | `src/pages/research.astro` |
| Contact | `src/pages/contact.astro` |
| 404 | `src/pages/404.astro` |

### Example — updating the hero tagline

Open `src/pages/index.astro` and find the `<p class="hero__dek">` block:

```astro
<p class="hero__dek">
  I work on <em>agentic AI for software engineering</em> — ...
</p>
```

Edit the text between the tags. Save; the browser reloads automatically.

### Example — changing the rotating words in the hero

Still in `src/pages/index.astro`, find the `<RotatingHero>` component:

```astro
<RotatingHero
  client:visible
  words={['researcher.', 'builder.', 'debugger.', 'aligner.', 'tinkerer.', 'writer.']}
/>
```

Add, remove, or reorder strings inside the `words` array.

---

## Updating the Now page (personal progress updates)

`src/pages/now.astro` is the primary place for ongoing status updates. It is a bento of `<Tile>` blocks — one tile per topic.

### Editing an existing tile

Find the tile by its `<div class="meta">` label, then update the content inside it. For example, to update the "building" tile's progress bars:

```astro
<Tile class="b-span-6 b-rows-3 tilt-2" ink>
  <div class="meta">building</div>
  <div style="...">
    <div>
      <div style="font-family:var(--font-display); ...">
        My New Project Name          <!-- ← change this -->
      </div>
      <div style="font-family:var(--font-mono); ...">
        [█████████████░░░░░░] · writing tests   <!-- ← change this -->
      </div>
    </div>
  </div>
</Tile>
```

The progress bar uses Unicode block characters (`█` filled, `░` empty) inside a monospace span. A 19-character bar is the standard width used throughout the page.

### Adding a new tile

Copy any existing `<Tile>` block and paste it inside the `<div class="bento">`. Adjust:

- **`class="b-span-N"`** — column span (1–12, the grid is 12 columns)
- **`class="b-rows-N"`** — row span height
- **`tilt-N`** — subtle rotation variant (1–4, purely decorative)
- **`ink`** — dark background variant
- **`accent`** — accent-colored background variant
- **`sticker`** — adds a sticky-note visual treatment

Minimal new tile:

```astro
<Tile class="b-span-6 b-rows-2 tilt-1">
  <div class="meta">my new section</div>
  <p style="font-family:var(--font-serif); font-size: 16px; margin-top: 12px;">
    Content goes here.
  </p>
</Tile>
```

---

## Adding a new project

Create a new `.mdx` file in `src/content/projects/`. Use any existing file as a reference — e.g. `src/content/projects/autotrainer.mdx`.

```markdown
---
title: "My Project"
subtitle: "One-line subtitle"
blurb: "Two-sentence description shown on the project card."
year: "2025"
tags: ["Python", "LLMs"]
stamp: "open source"          # optional badge label
stickerColor: "mint"          # optional: butter | mint | lilac | sky | rose
bullets:
  - "Key achievement or feature."
  - "Second key point."
featured: false               # true → shows on home page bento
sortOrder: 10                 # lower = earlier in the featured list
githubUrl: "https://github.com/..." # optional
liveUrl: "https://..."        # optional
---

Write the full project writeup here in Markdown.
You can use standard Markdown: headings, lists, code blocks, etc.
```

The project will automatically appear on `/projects`. Set `featured: true` and a `sortOrder` to also show it in the home bento.

---

## Adding a new blog post

Create a new `.mdx` file in `src/content/posts/`:

```markdown
---
title: "Post title"
dek: "One-sentence description shown in the post listing."
date: "2025·09·01"
readTime: "5 min"
tags: ["llms", "tools"]
draft: false    # set true to hide from listing while writing
---

Full post content in Markdown here.
```

The post appears automatically on `/blog` once `draft` is `false`.

### Blog filter buttons

The filter bar on `/blog` is driven by the `tags` field in each post's frontmatter. The available filter buttons are hardcoded in `src/pages/blog/index.astro` in the `<div>` that contains the `<button class="tag" data-filter="...">` elements.

**To add a new filter tag:**
1. Add it as a tag value in your post frontmatter (e.g. `"systems"`)
2. Add a matching button in `src/pages/blog/index.astro`:
   ```astro
   <button class="tag" data-filter="systems">systems</button>
   ```

**To remove a filter tag:** delete the corresponding `<button>` line from `src/pages/blog/index.astro`. Posts with that tag will still exist and be listed — they just won't be filterable by it.

---

## Adding a new publication

Create a new `.mdx` file in `src/content/publications/`:

```markdown
---
title: "Paper Title"
authors: "Your Name et al."
venue: "NeurIPS 2025"
year: "2025"
note: "Optional context, e.g. 'Workshop paper.'"
status: "accepted"    # accepted | in progress | submitted | preprint
stickerColor: "lilac" # butter | mint | lilac | sky | rose
doi: "10.xxxx/xxxxx"  # optional
pdfUrl: "https://..."  # optional
---
```

Publications with no body content are fine — the frontmatter is all the research page needs.

---

## Changing the "currently" eyebrow line on the home page

In `src/pages/index.astro`, find:

```astro
<span class="meta">currently &middot; senior @ uconn cse &middot; graduating may 2026</span>
```

Update this string to reflect your current situation (e.g. "working @ company · city").

---

## Changing global design tokens (colors, fonts, spacing)

All CSS custom properties are in `src/styles/tokens.css`. Font families, type scale, color palette, spacing, and shadow values are all defined there as `--variable-name` values. Change a value once and it updates everywhere.

---

## Deploy

```bash
git add . && git commit -m "update content"
git push
```

Cloudflare Pages picks up the push automatically and runs `pnpm build`. The live site updates in ~1 minute.
