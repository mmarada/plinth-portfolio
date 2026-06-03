# Plinth — Design System

> **Plinth** is a portfolio & showcase platform for designers — a place to publish projects, build a profile, and discover work. Think Behance/Dribbble territory, but with the restraint of a real gallery: the interface is the wall, the work is the art.

**Tagline:** *Where the work goes on display.*

This repository is the single source of truth for Plinth's brand and product design — typography, color, spacing, motion, iconography, copy voice, and high-fidelity UI-kit recreations of the core product surfaces.

---

## 1. Product context

Plinth is a **design portfolio network**. Three audiences meet on it:

- **Makers** — designers, illustrators, 3D artists, type designers, photographers. They publish *projects* (multi-image case studies), curate a *profile*, and grow a following.
- **Browsers** — people discovering work via the *feed*, search, and curated *collections*. Many are hiring.
- **Hirers** — studios and companies scouting talent; they save profiles and reach out.

### Core surfaces (what the UI kits recreate)
| Surface | What it is |
| --- | --- |
| **Feed / Discover** | The masonry gallery of published work — the heart of the product. Filterable by discipline, sortable by recency / curated. |
| **Project page** | A single case study: hero, image sequence, description, tools, the author, appreciations & comments. |
| **Profile** | A maker's home — cover, bio, stats, their grid of projects, who they follow. |
| **Upload / Publish** | The editor flow for composing a new project (cover, media, metadata). |
| **Marketing site** | The logged-out landing experience — hero, featured work, value props, sign-up. |

### A note on this being greenfield
There was **no existing codebase, Figma file, or brand** supplied for Plinth — the reference was simply "similar to Behance and other design websites." Everything here (name, logo, palette, type system, voice, UI) was **designed from scratch** as an original brand. It deliberately does **not** copy Behance's, Dribbble's, or any other platform's proprietary visual identity. Treat it as a real, ownable brand you can build against.

### Sources provided
- None (no Figma links, repos, or codebase). Brief: *"Portfolio design website… similar to behance.net and other design websites. we need to build our designs."*

If you later have real brand assets, a codebase, or Figma, add the links here and re-derive the foundations from them.

---

## 2. Content fundamentals — voice & copy

Plinth's voice is **the confident gallery curator**: it knows the work is excellent and doesn't oversell. Calm, literate, a little dry. It respects the maker and never talks down to the browser.

**Principles**
- **Understated, not flashy.** No exclamation marks, no hype words ("amazing!", "stunning!!", "🚀"). Let the work impress; the copy stays out of the way.
- **Second person, warm.** Speak to "you" (the maker). "Publish your project." "Your work, on display." First-person plural ("we") only for the platform's own voice in marketing.
- **Plain verbs, gallery nouns.** *Publish, present, exhibit, collect, appreciate, follow.* We "appreciate" work (not "like" it) — a small piece of brand vocabulary. Collections are "curated." A project is "on view."
- **Sentence case everywhere** for UI and headings. The only UPPERCASE is the **mono catalog label** (eyebrows, metadata) with wide tracking — e.g. `BRANDING · 2025`.
- **Concise.** Buttons are 1–2 words ("Publish", "Follow", "Save to collection"). Empty states are a single calm sentence plus one action.
- **Numbers are quiet.** Stats are present but never shouty: `1.2k appreciations`, `No. 014 / 240`. Use the mono face and tabular figures.

**Vocabulary**
| Use | Not |
| --- | --- |
| appreciate / appreciations | like / likes |
| project | post / shot |
| maker / designer | creator / influencer |
| on view, published | live, dropped |
| collection | board (ok), mood folder |
| follow | subscribe |

**Emoji:** **Not used** in product UI or marketing copy. The aesthetic is a quiet gallery; emoji break it. (Users may of course use them in their own descriptions and comments — that's their content, not ours.)

**Examples**
- Hero: *"Where the work goes on display."* / sub: *"A portfolio platform for designers who care how their work is seen."*
- Empty profile: *"No projects yet. When you publish, they'll appear here."* + **Publish your first project**
- Appreciation toast: *"Appreciated. Added to your activity."*
- Upload nudge: *"Drag your work in, or browse files."*
- 404: *"This wall is empty."* + **Back to the feed**
- Eyebrow label: `NO. 014 / 240` · `TYPE DESIGN` · `EXHIBITED MAR 2025`

---

## 3. Visual foundations

The governing idea: **a calm gallery wall.** Warm paper, hairline rules, generous air, one decisive accent. Chrome recedes; uploaded work supplies all the color and energy.

### Color
- **Warm paper neutrals**, not cool grays. Background is `--paper #FBF8F2` (a gallery-wall off-white); ink is a warm near-black `--ink #16140F`. This warmth is load-bearing — it's what separates Plinth from the default cool-gray SaaS look.
- **One accent: vermillion `--accent #E0543A`** — used sparingly for primary actions, active states, the logomark's "object", and editorial punctuation. Restraint is the rule: if everything is accented, nothing is.
- **Jade `#2F5D50`** is a rare secondary, for the odd tag or illustration — never competing with vermillion.
- **Semantic** colors (success/warning/danger/info) are muted and earthy, never neon.
- **Dark mode** ("Night at the gallery") is a true premium dark: `--paper #141310`, warm off-white ink. Same vermillion. Used for the immersive project-viewing experience and as a user preference.

### Typography
- **Newsreader** (editorial serif) for display, headlines, leads, and pull-quotes — including its **italic** for emphasis and titles. This is the gallery's editorial voice.
- **Schibsted Grotesk** (clean neutral grotesk) for all UI and body text — buttons, labels, navigation, paragraphs.
- **Space Mono** for **catalog labels**: eyebrows, metadata, counts, numbers. Uppercase, wide tracking (`0.16em`). This typewriter-catalog detail is the system's signature.
- Headlines are **tight** (leading 1.04, tracking −0.02em). Body is **relaxed** (1.65). Generous measure caps at ~680px for prose.

### Spacing & layout
- **4px base scale** (`--sp-1`…`--sp-10`). Layouts breathe — section padding is large (64–128px on desktop).
- **Hairline rules** (`1px solid --line`) are a primary structural device — they divide sections, head tables, and underline the feed's filter bar, evoking a printed exhibition catalog.
- Content max-width **1280px**; the feed uses a responsive **masonry** grid (2–4 columns) so portrait and landscape work coexist.
- Asymmetry is welcome: editorial headers often set a serif headline left and mono metadata right, divided by a rule.

### Backgrounds & texture
- Mostly **flat warm paper** — no gradients as decoration. Depth comes from **hairlines, soft shadows, and the work itself.**
- A **very subtle paper grain** is acceptable as an overlay on large empty fields (hero, dark mode). No meshes, no glows, no glassmorphism.
- Imagery (uploaded work) is shown **edge-to-edge inside a thin frame** — a 1px `--line` border or a soft shadow lifts each piece off the wall like a mounted print.

### Elevation & shadows
- Shadows are **soft, warm-tinted, low-spread** (`rgba(34,28,16,…)`) — gallery lighting, not Material drop-shadows. Cards rest with `--shadow-sm`; on hover they lift to `--shadow-md`/`lg`.
- Default surface treatment: **border-first.** A card is usually `--surface` + `1px --line` + tiny `--shadow-xs`. Shadow grows on interaction.

### Corner radii
- **Restrained.** Cards & inputs `--r-md (10px)`; buttons `--r-sm (6px)`; images `--r-sm`; pills/avatars fully round (`--r-pill`). Nothing is bubble-round — the gallery is rectilinear.

### Cards
- Background `--surface`, `1px solid --line`, `--r-md`, `--shadow-xs` at rest. **Feed work-cards are special:** image edge-to-edge at top, a slim meta footer (avatar · title · appreciations) below, lifting on hover with a scale-free shadow bump and a fade-in of the appreciate/save actions.

### Motion
- **Easing:** `--ease-out cubic-bezier(0.22,1,0.36,1)` — a confident settle, never bouncy. Durations 140/220/420ms.
- **Hover:** images do a subtle **scale(1.03) zoom inside a fixed frame** (overflow hidden) + overlay actions fade in. Buttons darken (no growth).
- **Press:** buttons shift to `--accent-hover` and translate down 1px (no scale-shrink).
- **Page load:** one orchestrated, **staggered fade-up** of feed items (12–16px rise, 60ms stagger). Reduced-motion shows final state immediately.
- No infinite/looping decorative animation. Motion is purposeful and quiet.

### Focus & accessibility
- Focus ring: `0 0 0 3px rgba(224,84,58,0.35)` (`--focus-ring`) — vermillion at low alpha, always visible on keyboard nav.
- Body text meets AA on paper; the accent is reserved for ≥AA-contrast uses (white text on accent passes for buttons).

### Transparency & blur
- Used **only** for the sticky top nav (a `--paper` at ~80% with a small backdrop-blur) and for image overlays (a bottom protection gradient `rgba(0,0,0,0.0→0.55)` so white meta text stays legible over any artwork). No glass cards.

---

## 4. Iconography

Plinth uses **[Lucide](https://lucide.dev)** — an open-source line-icon set — loaded from CDN.

- **Why Lucide:** consistent **1.75px stroke**, rounded line caps, geometric but friendly. It matches the system's hairline-rule language (icons read as thin drawn lines, same weight as the dividers) without the colder feel of a heavier set.
- **Style rules:** stroke-only (never filled), `currentColor` so icons inherit text color, default size 20px in UI / 18px in dense rows / 24px in nav. Stroke width stays at Lucide's default 1.75–2; don't mix weights.
- **Usage:** icons are functional, not decorative — actions (appreciate = `heart`, save = `bookmark`, share = `share`, comment = `message-circle`), nav, and affordances. Pair an icon with a label wherever space allows; icon-only is reserved for universally-understood actions in tight toolbars.
- **The heart/appreciate icon** is the one place color enters: outline `heart` in `--fg-3`, filling to `--accent` when appreciated.
- **No emoji** as icons. **No unicode glyphs** as UI icons. The only non-Lucide marks are the **logomark** (`assets/plinth-logomark.svg`) and the small **mono catalog numerals** used as ordinal labels.
- **CDN substitution note:** Lucide is the chosen set (no proprietary icon font existed to import, since this is greenfield). If you later adopt a custom icon set, swap the CDN link and update this section.

Load it with:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<!-- usage: <i data-lucide="heart"></i> -->
```

---

## 5. Brand assets

In `assets/`:
- `plinth-logomark.svg` — the standalone mark (vermillion "work" object resting on an ink plinth). Use at ≥24px.
- `plinth-wordmark.svg` — logomark + "Plinth" set in Newsreader, for light backgrounds.
- `plinth-wordmark-dark.svg` — the wordmark for dark backgrounds.
- `artwork/work-01…12.png` — **placeholder "design work"** tiles (abstract posters, type studies, color grids) standing in for user-uploaded projects in the feed and profile mockups. These are stand-in *content*, not brand art — replace with real uploads in production.

**Clear space:** keep at least the height of the logomark's plinth-base around the mark. **Don't** recolor the wordmark, stretch it, or place it on a busy photo without a paper/protection backdrop.

---

## 6. File index (manifest)

```
README.md                 ← you are here: context, voice, visual foundations, iconography
SKILL.md                  ← Agent-Skill front-matter for using this system in Claude Code
colors_and_type.css       ← all CSS variables + semantic type classes (import this everywhere)

assets/
  plinth-logomark.svg
  plinth-wordmark.svg
  plinth-wordmark-dark.svg
  artwork/work-01…12.png   ← placeholder design-work tiles

fonts/                    ← font note (Google Fonts CDN; see "Font substitution")

preview/                  ← Design-System tab cards (foundations specimens)

ui_kits/
  web-app/                ← the Plinth product: feed, project, profile, upload
    README.md  index.html  *.jsx
  marketing/              ← the logged-out landing site
    README.md  index.html  *.jsx

slides/                   ← branded slide template (title, section, work-showcase, quote…)
```

**Start here:** read this README, then open `preview/` (or the Design System tab) for the visual foundations, then `ui_kits/web-app/index.html` for the product, and `ui_kits/marketing/index.html` for the landing site.

---

## Font substitution note  ⚠️

No brand fonts were supplied (greenfield). The system uses three **Google Fonts** as the canonical faces, loaded via CDN in `colors_and_type.css`:

- **Newsreader** (display serif) · **Schibsted Grotesk** (UI/body) · **Space Mono** (mono labels)

These are deliberate, license-clear choices — not placeholders for a "real" font. If you want self-hosted `.woff2` files (for offline/perf) or decide to license a commercial display serif, drop the files in `fonts/` and update the `@font-face`/`@import` in `colors_and_type.css`. **Flagging:** confirm you're happy with this trio before we lock it in.
