# Fonts

Plinth's typefaces are loaded from **Google Fonts** via the `@import` at the top of
`../colors_and_type.css`. No local font files are bundled (this is a greenfield brand
with no licensed faces supplied).

| Role | Family | Weights used |
| --- | --- | --- |
| Display / editorial | **Newsreader** | 400, 500, 600 + italic 400/500 |
| UI / body | **Schibsted Grotesk** | 400, 500, 600, 700 |
| Mono / catalog labels | **Space Mono** | 400, 700 |

## To self-host (offline / performance)
1. Download the `.woff2` files for the weights above from Google Fonts.
2. Drop them in this folder.
3. Replace the `@import` in `colors_and_type.css` with `@font-face` blocks pointing here.

⚠️ These are substitutions chosen for license-clarity and fit, not stand-ins for a
specific brand font. Confirm the trio before locking it in.
