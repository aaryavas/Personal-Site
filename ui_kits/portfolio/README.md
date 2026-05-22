# Portfolio UI Kit — Aarya Vasantlal

Interactive click-thru recreation of Aarya's portfolio site. Single React app with hash-based routing.

## Entry
`index.html` — boot, mount, route.

## Components

| File | Exports |
| -- | -- |
| `components.jsx` | `Wordmark`, `TopNav`, `Footer`, `Tile`, `StickerTile`, `Sticker`, `Stamp`, `Tag`, `Btn`, `Annotation`, `RotatingHero`, `MathOrnament`, `ScratchpadBg` |
| `home.jsx` | `Home` — hero + bento + featured |
| `projects.jsx` | `ProjectsIndex`, `ProjectDetail` |
| `research.jsx` | `Research` — publications & ongoing work |
| `blog.jsx` | `BlogIndex`, `BlogPost` |
| `now.jsx` | `Now` — currently reading / building / listening |
| `contact.jsx` | `Contact` — links + CV download CTA |

## Routes (hash)

| Hash | Surface |
| -- | -- |
| `#/` | Home |
| `#/projects` | Projects index |
| `#/projects/:id` | Project detail (id ∈ mopi, autotrainer, voice, knowgraph, ...) |
| `#/research` | Publications & active research |
| `#/blog` | Blog index |
| `#/blog/:slug` | Blog post (single article) |
| `#/now` | Currently page |
| `#/contact` | Contact + CV |

## How to read this

Open `index.html`. The hero rotates; nav clicks switch routes; tiles in the bento are clickable; clicking a project tile drills into the detail page. Back is via the top-left wordmark.
