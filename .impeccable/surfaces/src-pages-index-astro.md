---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Home page

## Scope

`src/pages/index.astro`, the single home page. Visitor mode: Experience. Build path: code-led (no image generation). The picked sketch is `.impeccable/mocks/decision/model-pick.html`.

## Audience and job

Recruiters and hiring managers deciding whether to interview Andres Valerio Montero for a software engineering internship. Action: send an email, or open GitHub / LinkedIn. A résumé download appears only once `public/resume.pdf` exists.

## Content and constraints

- All facts come from `src/content/`; nothing is invented. No phone number.
- No screenshots or project links exist yet; image and link slots are optional and render nothing when empty.
- Components are presentational and receive props only; `src/lib/content.ts` is the only content reader.

## Direction contract

THESIS: The career is a flight plan. Time is the organising axis, from T+00 (August 2025) to T+33 (graduation, May 2028), and every role and project is an activity placed on it. Refuses the centred name-and-role hero over a grid of equal project cards.

OWN-WORLD: Flight-plan paper `#f1f2ee`, mission navy `#0c1d3b`, binder-tab orange `#ff4f00`, rule grey `#8a93a3`. Navy owns the time rail and solid blocks; orange marks what is active now and the primary action. Flat ink, square corners, heavy rules, no shadows or gradients. A heavy grotesque sets names and figures; a typewriter face sets time marks and measurements only.

STORY: The visitor sees three roles running in parallel, each with a measured result, understands this candidate ships real work while holding a 4.0, reads the detail in time order, and gets in touch.

FIRST VIEWPORT: A navy time rail down the left edge with four dated marks. To its right the name at display scale, then the role sentence and contact actions. Under a heavy rule, three lanes (Robotics, Freelance, Research) hold blocks that start lower the later they began, each carrying its headline figure. An orange tab on the right edge is the contact action.

SIGNATURE INTERACTION: The rail is a mission clock. As an entry scrolls into view, or a lane block is hovered or focused, the rail draws that entry's span on the scale and its readout changes to that elapsed time.

MOTION GRAMMAR: One authored moment: on load the three lane blocks extend downward in time order. The rail span glides between entries. Everything is visible without scripts and still under reduced motion.

FORM: Flight plan pages (elapsed time in the margin, activities in lanes); position 1 on the ordered list, shown as the pick card and chosen by the user over the rolled assignment. seed:a2cf47b217734cb8

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Public résumé file, project screenshots, repo and live links, domain, deploy target.
