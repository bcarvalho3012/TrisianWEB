# TrisianWEB: the brief

**Repo:** bcarvalho3012/TrisianWEB, an experiment branched from TrisianNext at its fourth merge.
**Rule:** copy, logo and company name stay exactly as they are. `node tools/copycheck.mjs` enforces it and runs
as a pre-commit hook. Words may move between sections; they may not change. Markup, CSS, JS, fonts, icons and
images are free.

## What the research says

Seventeen sites read on 2026-11-13 with their computed styles pulled from the page, not from memory. Two
neighbourhoods, because Trisian lives in both: it sells a managed digital workspace, and its thesis is compliance
evidence.

**Workspace and managed services:** Citrix, Omnissa, Workspot, Windows 365, Nerdio, Kyndryl, Rackspace.
**Security and infrastructure:** Cloudflare, CrowdStrike, Palo Alto Networks, Okta, Zscaler, Rubrik.
**Design-led benchmarks:** Stripe, Linear, Vercel.

| Trait | Workspace and managed services | Security and infrastructure | Trisian today |
|---|---|---|---|
| Ground | Light body on 6 of 7, with a deep navy or indigo hero block on 5 of 7 (Citrix cobalt, Omnissa indigo, Workspot navy, Nerdio navy, Kyndryl dark photo). | Dark throughout on 5 of 6 (CrowdStrike black, Palo Alto #141414, Okta navy, Zscaler #001744; Rubrik is the light one). | Light with one navy band |
| Headline | 40 to 80px, weight 300 to 500. Left-aligned on 6 of 7. | 49 to 80px, weight 400 to 700. Left on 4 of 6. | 66px, weight 700, left |
| Type | A grotesk on all but Nerdio (Poppins). Weights are light: Citrix 300, Omnissa 300, Kyndryl 300, Rackspace 500. | Grotesks throughout, weight 400 to 500 on most. | Graphik, which fits both sets |
| Radius | Mixed: Rackspace 4, Citrix 2, Windows 365 24, Workspot 50, Nerdio 20. | 4 to 8px. | 16 to 24px |
| Depth | Some shadows (Omnissa, Rackspace), hairlines elsewhere. | Hairlines, almost no shadows. | Tinted shadows on every card |
| Icons | Monoline 1.5px where SVG icons exist (Rackspace 31 of them). No isometric sets. | Monoline 1.5px on 5 of 6. No isometric sets. | Isometric PNG, purple and lime |
| Imagery | Product UI renders (Nerdio, Workspot, Windows 365), abstract atmosphere (Omnissa, Kyndryl). | Product renders and abstract 3D. | Nine stock photos |

**Across all seventeen:** no site uses an isometric or illustrated icon set; headline weight is 300 to 500 on 14 of
17; stock "people at a desk" photography is rare; the product itself or an abstract atmosphere is the picture.

**Where the two neighbourhoods differ:** the workspace set is light with a saturated blue hero block, because it is
selling a daily experience and wants to feel calm and available. The security set is dark throughout, because it
is selling vigilance. Trisian is a workspace company whose promise is evidence, so it borrows the workspace
ground and the security precision.

## Direction

**One idea: evidence.** The copy's thesis is "what did you know, and when". The site borrows from that world:
timestamps, ledgers, signed records, control rooms. Precision over warmth, on a ground that stays open.

### Ground: two registers

**Light-first.** A cool paper white, slightly blue in its grey, for the body of every page. That is the workspace
register: calm, daily, readable.

**The evidence register** is a navy-black derived from the brand navy. It is used with intent, not as an
alternating stripe: the hero block (the workspace convention), the meeting and comparison on the home page, the
"what they'll ask, and what we have ready" tables on the sector pages, and the call to action. When the copy is
about the day the question comes, the ground goes dark.

### Type

- **Graphik** for everything, at weight 500 for display sizes, tracking -0.03em, left-aligned. Display 64 to 80px.
- **Archivo Condensed Black** is the product's voice. "Safe Workspace" is set in it wherever the name leads a
  section or sits in a heading-level position. No new logo; the name becomes a type mark.
- **IBM Plex Mono** (Open Font License, self-hosted) for the evidence motif only: timestamps, framework names, the
  comparison table, log-style detail, eyebrow labels. Never for running text.

### Palette

Paper ground, ink text in a near-black navy, a blue-grey for secondary text, the brand bright blue as the single
accent, used for one thing per screen. Dark sections invert the same tokens. Hairline borders at 10% ink on light
and 8% white on dark. No tinted shadows. No purple anywhere.

### Shape

Radius 6px on controls and cards. No pill buttons. Buttons are rectangles with a hairline, the primary one filled.

### The product

Safe Workspace gets a stage without new words. The FAQ answer "What exactly is Safe Workspace?" and the "What we
offer" lead already contain the full definition. Those sentences move up to a product section directly under the
hero, structured by the four pillars that already exist: the desktop, the defense, the headroom, the controls.

The hero visual is Safe Workspace rendered in code: a layered composition of the managed desktop built from the
existing scene SVGs, recoloured to the palette, with one orchestrated load sequence. Nothing a competitor can buy.

### Icons

The isometric PNG set is retired. A bespoke monoline SVG set at 1.5px, drawn for both grounds, one icon per
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
