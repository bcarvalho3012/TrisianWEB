# TrisianWEB: the brief

**Repo:** bcarvalho3012/TrisianWEB, an experiment branched from TrisianNext at its fourth merge.
**Rule:** copy, logo and company name stay exactly as they are. `node tools/copycheck.mjs` enforces it and runs
as a pre-commit hook. Words may move between sections; they may not change. Markup, CSS, JS, fonts, icons and
images are free.

## What the research says

Ten sites read on 2026-11-13 with their computed styles pulled from the page, not from memory: Cloudflare,
CrowdStrike, Palo Alto Networks, Okta, Zscaler and Rubrik, plus Stripe, Linear and Vercel as
design-led benchmarks.

| Trait | What the set does | Trisian today |
|---|---|---|
| Ground | Security and infrastructure brands open dark: CrowdStrike (black), Palo Alto (#141414), Okta (deep navy), Zscaler (#001744), Linear (#08090A). Rubrik, Vercel, Stripe and Cloudflare open light. | Light with a navy band |
| Headline | 56 to 80px, weight 400 to 510, tracking -1.2 to -3.8px. Left-aligned on 6 of 10. | 66px, weight 700, left |
| Type | A proprietary or licensed grotesk on every site (Söhne, Geist, Inter, FK Grotesk, TT Hoves, GT Haptik, Aeonik, STK Bureau Sans). None use a rounded humanist sans. | Graphik, which fits this company |
| Radius | 4 to 8px dominates (Vercel 6, Stripe 4, Cloudflare 6, Rubrik 8, Linear 8). Zscaler and Palo Alto use 0 on buttons. | 16 to 24px |
| Depth | Hairline borders, almost no shadows. Linear: 1px white at 5% inset. Vercel: 1px black at 8%. | Tinted drop shadows on every card |
| Icons | Monoline SVG, 1.5px stroke, on 7 of 10. No site uses an isometric or illustrated icon set. | Isometric PNG illustrations, purple and lime |
| Imagery | Product renders (Linear, Vercel), abstract 3D or atmosphere (Okta, Palo Alto, Rubrik). Stock "people at a desk" photography is rare. | Nine stock photos |
| Gradients | Present but atmospheric, behind content. Stripe's is a signature, the exception. | Two bands in the reference style |

Conclusion: the current site is well made but belongs to the generic SaaS family. The peer set is darker, flatter,
tighter and more typographic, with the product itself as the picture.

## Direction

**One idea: evidence.** The copy's thesis is "what did you know, and when". The site borrows from that world:
timestamps, ledgers, signed records, control rooms. Precision over warmth.

### Ground

Dark-first. A navy-black derived from the brand navy, not a flat grey-black, so the blue accent belongs to it.
Light sections only where the content is a document to be read: the plan comparison table, the FAQ, legal pages.

### Type

- **Graphik** for everything, at weight 500 for display sizes, tracking -0.03em, left-aligned. Display 64 to 80px.
- **Archivo Condensed Black** is the product's voice. "Safe Workspace" is set in it wherever the name leads a
  section or sits in a heading-level position. No new logo; the name becomes a type mark.
- **IBM Plex Mono** (Open Font License, self-hosted) for the evidence motif only: timestamps, framework names, the
  comparison table, log-style detail, eyebrow labels. Never for running text.

### Palette

Navy-black ground, ink-white type at 92%, a muted blue-grey for secondary text, the brand bright blue as the single
accent, used for one thing per screen. Hairline borders at 8% white. No tinted shadows. No purple anywhere.

### Shape

Radius 6px on controls and cards. No pill buttons. Buttons are rectangles with a hairline, the primary one filled.

### The product

Safe Workspace gets a stage without new words. The FAQ answer "What exactly is Safe Workspace?" and the "What we
offer" lead already contain the full definition. Those sentences move up to a product section directly under the
hero, structured by the four pillars that already exist: the desktop, the defense, the headroom, the controls.

The hero visual is Safe Workspace rendered in code: a layered composition of the managed desktop built from the
existing scene SVGs, recoloured to the palette, with one orchestrated load sequence. Nothing a competitor can buy.

### Icons

The isometric PNG set is retired. A bespoke monoline SVG set at 1.5px, drawn for the dark ground, one icon per
existing slot. The large scene illustrations stay: they are already monoline and recolour cleanly.

### Motion

One moment, on the hero, at load. Everything else is still except hover and focus states. Reduced motion shows
the hero's end frame.

### Imagery

No stock photography by default. Two or three generated images in one consistent style for atmosphere, each slot
built so the current photo can be dropped back in for comparison. Prompts below.

## Image prompts

Series style, prepended to every prompt:

```
Cinematic editorial photograph, deep navy and steel palette with a single cool blue light source, long exposure,
architectural precision, no people, no faces, no text, no logos, no screens showing content, shallow depth of
field, medium format, high dynamic range, matte finish, 21:9
```

1. **Home, atmosphere band.** A quiet enterprise data hall corridor at dawn, cold light through a far window, rows of
   closed cabinet doors, floor reflections.
2. **Plans.** A glass-walled office floor at night from outside, every screen asleep, one desk lamp on, rain on the
   glass.
3. **Projects.** A close, raking-light shot of a signed paper record on dark stone, a fountain pen beside it, the
   signature out of focus.

Negative prompt, where the generator takes one: people, faces, hands, text, letters, logos, watermark, neon, purple,
cartoon, illustration, oversaturated.

## Build order

1. Tokens, type, fonts, the shell (nav, footer).
2. Home hero and the Safe Workspace section.
3. The rest of the home page.
4. Plans and Projects.
5. Industries hub and the four sector pages.
6. Phone, tablet, reduced motion, contrast and console sweeps.

Each stage gets a design-critique pass and screenshots at three widths before the next starts.
