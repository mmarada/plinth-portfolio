# Mohan Marada — Product Designer Portfolio

> Built on **Plinth** (the design system in this project's root). A product-design
> portfolio of four clickable prototypes, each demonstrating one core flow and
> annotated with the UX thinking behind every screen.

**Open `../Portfolio.html`** (project root) for the landing page — it links to all four apps.

## The concept — "Ornament meets gallery"
Visual language pulls from **Indian folk painting** (Madhubani suns, Pichwai lotuses,
miniature toranas — the jewel palette and motifs in `assets/art/`) set against the calm
of **Seattle's contemporary museums**. Rich work on quiet walls.

Every app is structured on **Nir Eyal's Hook Model** (Trigger → Action → Variable Reward →
Investment) and other UX frameworks, and carries an optional **"Designer's notes"** layer —
a museum-style curator's placard beside the phone that explains each screen's stage and the
content-design decision. Toggle it from the control bar under each prototype.

## The four case studies
| # | App | Flow | Frameworks foregrounded |
|---|-----|------|------|
| 01 | **Rasa** (`../portfolio/Rasa.html`) | Onboarding | Hook Model, IKEA effect, benefit-first permissions |
| 02 | **Cascade** (`../portfolio/Cascade.html`) | Account signup | Friction reduction, price anchoring, trust signals |
| 03 | **Pigment** (`../portfolio/Pigment.html`) | Purchase | Scarcity, live pricing, honest summaries, guest checkout |
| 04 | **Sūtra** (`../portfolio/Sutra.html`) | Educational | Chunking, dual coding, active recall, the testing effect |

## Files
```
../Portfolio.html      landing page (root, so the portrait image-slot persists)
portfolio.css          shared tokens — jewel + gallery palettes, fonts, motion
frame.jsx              PhoneFrame, Stage (viewport-fit scaler), Dots, AppButton, Stamp
rasa.jsx / cascade.jsx / pigment.jsx / sutra.jsx   one app each (screens + shell)
Rasa.html / Cascade.html / Pigment.html / Sutra.html   loaders
assets/art/*.png       14 generated folk + contemporary illustrations
ios-frame.jsx          starter device frame (reference; apps use the custom PhoneFrame)
image-slot.js          drop-your-photo component used for the hero portrait
```

## ⚠️ Placeholders to replace
- **Name, bio, stats, contact** ("Mohan Marada", "Seattle", `mokarma@uw.edu`, LinkedIn/Read.cv links) are placeholders — swap for your own.
- **Portrait**: drag your photo onto the hero slot on `Portfolio.html`.
- **Artwork** in the apps is original generated stand-in illustration, not real museum works — replace with your own project imagery if you adapt these.
