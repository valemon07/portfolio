---
name: Andres Valerio Montero
description: A career drawn as a flight plan; elapsed time down the margin, activities in lanes.
colors:
  flight-paper: "#f1f2ee"
  mission-navy: "#0c1d3b"
  binder-tab-orange: "#ff4f00"
  rule-grey: "#8a93a3"
  navy-soft: "#3a4763"
  paper-soft: "#c5cddb"
  orange-ink: "#2a1400"
  navy-line: "#33466b"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 0.6rem + 8.4vw, 7.375rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 96"
  figure:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 24cqi, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 80"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 3vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 96"
  title:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 96"
  lead:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  label:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
  time-mark:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  time-detail:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  none: "0px"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-5: "1.5rem"
  space-6: "2rem"
  space-7: "3rem"
  space-8: "4.5rem"
  space-9: "7rem"
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  rail-width: "10.5rem"
  tab-width: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.binder-tab-orange}"
    textColor: "{colors.mission-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.mission-navy}"
    textColor: "{colors.flight-paper}"
  lane-block-orange:
    backgroundColor: "{colors.binder-tab-orange}"
    textColor: "{colors.mission-navy}"
    rounded: "{rounded.none}"
    padding: "1rem 1rem 1.5rem"
  lane-block-orange-hover:
    backgroundColor: "{colors.mission-navy}"
    textColor: "{colors.flight-paper}"
  lane-block-navy:
    backgroundColor: "{colors.mission-navy}"
    textColor: "{colors.flight-paper}"
    rounded: "{rounded.none}"
    padding: "1rem 1rem 1.5rem"
  lane-block-navy-hover:
    backgroundColor: "{colors.binder-tab-orange}"
    textColor: "{colors.mission-navy}"
  lane-block-outline:
    backgroundColor: "{colors.flight-paper}"
    textColor: "{colors.mission-navy}"
    rounded: "{rounded.none}"
    padding: "1rem 1rem 1.5rem"
  contact-tab:
    backgroundColor: "{colors.binder-tab-orange}"
    textColor: "{colors.mission-navy}"
    rounded: "{rounded.none}"
    width: "{spacing.tab-width}"
    padding: "2rem 0"
  contact-tab-hover:
    backgroundColor: "{colors.mission-navy}"
    textColor: "{colors.flight-paper}"
  mission-rail:
    backgroundColor: "{colors.mission-navy}"
    textColor: "{colors.flight-paper}"
    width: "{spacing.rail-width}"
    padding: "1.5rem 1rem 1.5rem 1.5rem"
---

# Design System: Andres Valerio Montero

## Overview

**Creative North Star: "The Flight Plan"**

The page is a mission planning sheet. Elapsed time is the organising axis: a navy rail down the left margin carries a month-ticked scale from T+00 to graduation, and every role, project, and degree is an activity placed on it with its own T+ mark, dated period, and a small track showing its span on the full scale. The rail is a live clock: as an entry crosses the reading line, or a lane block is hovered or focused, the rail draws that entry's span in orange and its readout switches to that elapsed time.

The material is flat printed ink on off-white plan paper. Square corners everywhere, heavy 3px navy rules to open each section, thin rules to separate rows, and solid fills in three tones only: paper, navy, orange. A heavy, slightly narrowed grotesque (Archivo) carries names and figures; a typewriter face (Courier Prime) carries time and nothing else. Density is generous: large type, wide section padding, one idea per row.

Sections change tone by swapping whole surfaces rather than adding decoration: paper for Experience, Skills and Education; full navy for Projects; full orange for Contact.

**Key Characteristics:**
- Time down the left margin; content reads forward in time, earliest first.
- Three inks only (paper, navy, orange) plus tinted secondary text.
- Zero radius, no blur, no gradient fills; depth is never simulated.
- Heavy grotesque for names and figures, typewriter for time.
- Hover and active states invert fills between orange and navy.

## Colors

Three flat inks on plan paper, with secondary text tinted from whichever surface it sits on.

### Primary
- **Mission Navy** (`mission-navy`): the ink. Body text and headings on paper, the time rail, the Projects section surface, heavy rules, and the hover fill of every orange control.

### Secondary
- **Binder-Tab Orange** (`binder-tab-orange`): what is active now and what to do next. The primary Email button, the contact tab, the rail's active span and now-tick, the active readout, each row's span track, list markers, text selection, and the Contact section surface.

### Neutral
- **Flight Paper** (`flight-paper`): page background and text on navy.
- **Rule Grey** (`rule-grey`): thin row dividers on paper.
- **Navy Soft** (`navy-soft`): secondary text (subtitles, periods, notes, stack lists) on paper.
- **Paper Soft** (`paper-soft`): secondary text and month ticks on navy.
- **Orange Ink** (`orange-ink`): secondary text on orange.
- **Navy Line** (`navy-line`): thin dividers on navy.

### Named Rules
**The Orange Is Now Rule.** Orange means the present tense or the next action: the current span, the now marker, the primary contact path. It is never used for decoration or for a past, finished state.

**The Tone Swap Rule.** Components read surface variables (background, foreground, soft foreground, line, soft line, accent, focus) and never hard-code a tone; a section changes world by setting paper, navy, or orange tone, which redefines all of them at once. On orange, the accent becomes navy.

## Typography

**Display Font:** Archivo Variable (with Helvetica Neue, Helvetica, Arial)
**Label/Mono Font:** Courier Prime 400 and 700 (with Courier New, Courier)

**Character:** A heavy grotesque, narrowed slightly for names (96% width) and hard for figures (80% width), set tight and large; against it, a typewriter face that reads like stamped mission times. Numerals are tabular throughout.

### Hierarchy
- **Display** (800, fluid 2.75rem to 7.375rem, 0.92): the name in the first viewport only, max about 8.6em wide.
- **Figure** (800 at 80% width, fluid by container up to 5.75rem, 0.95): headline results in lane blocks; smaller metric figures use the same face at 2.25rem.
- **Headline** (800, fluid 2rem to 3.25rem, 1): section titles, always under a heavy rule.
- **Title** (800, 1.75rem, 1.05): entry names; lane labels use the same voice at 1.5rem.
- **Lead** (500, 1.25rem, 1.4): the hero statement (max 46ch), subtitles, skill items, contact link labels.
- **Body** (400, 1.0625rem, 1.55): highlights and prose, max 68ch.
- **Label** (600, 0.9375rem): rail nav, secondary actions, notes, stack lines.
- **Time mark** (Courier Prime 700, 1.75rem in rows, 2rem in the rail readout, 1.0625rem on rail marks): T+ elapsed-month marks.
- **Time detail** (Courier Prime 400, 0.75 to 0.9375rem): dates and periods beside a T+ mark.

### Named Rules
**The Clock Face Rule.** Courier Prime sets time and only time: T+ marks, months, periods, the rail readout. Names, figures, headings, and prose are always Archivo.

## Layout

Desktop (62rem and up) is a two-column frame: a sticky full-height navy rail (10.5rem) on the left and the plan to its right, with content kept clear of a fixed orange contact tab (3.5rem) on the right edge. Side gutter is fluid (1.25rem to 3.5rem); sections pad 4.5rem top and bottom.

The first viewport stacks the name, statement, and actions, then a heavy rule that runs edge to edge from the rail to the window, then three lanes. Each lane has a 3px navy left rule and a label; its block starts lower the later its role began (a fixed fluid step per lane, 1.5rem to 3.25rem), and the blocks fill to a common floor.

Detail sections use a two-column timeline row: a "when" column (9 to 12.5rem) holding the T+ mark, period, span track and notes, and a "what" column capped at 68ch. Rows separate with 1px soft rules and 2rem vertical padding. The skills table uses the same column split.

Below 62rem the rail lies down as a compact top bar (readout plus horizontal scale; name, nav and mark labels hidden) and the contact tab is not shown. Below 48rem lanes stack into one column with blocks indented 1.25rem per lane, and timeline rows collapse to one column with the T+ mark and period on one baseline.

Spacing follows a 0.25rem-based scale (0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4.5, 7rem).

## Elevation & Depth

Flat. There are no blurred shadows, no gradient fills, no translucency. Depth is replaced by tone (navy and orange solid surfaces against paper) and by rule weight. Two techniques appear that are not elevation: zero-blur box-shadows used as a drawn border (the outline lane block's 3px inset rule, the contact tab's 2px navy ring) and hard-stop gradients used as drawing (the rail column fill, the month ticks on the scale).

### Named Rules
**The Flat Ink Rule.** Nothing is lifted. Any box-shadow has zero blur and zero offset and acts as a rule or focus ring; any gradient has hard stops and acts as a ruled line or a solid column.

## Shapes

Square corners everywhere (0 radius). Forms are rectangles and rules: 3px heavy rules open sections, the hero lanes, the rail readout and the contact links; 2px rules draw the time scale, marks, and row span tracks; 1px rules divide rows. List markers are orange squares. The contact tab is a vertical rectangle on the right edge with its label set in vertical writing.

## Components

### Buttons
- **Shape:** square (0 radius).
- **Primary:** orange fill, navy text, Archivo 700, padding 0.8rem by 1.4rem. One per view: the email action.
- **Hover / Focus:** fill inverts to navy with paper text over 160ms linear. Focus is a 3px outline offset 3px in the surface's focus color (navy on paper and orange, orange on navy).
- **Secondary:** plain underlined text links at weight 600; underline thickens from 0.09em to 0.18em on hover.

### Lane Blocks (signature)
Hero summary blocks, one per ongoing role, each a link to its entry. Three variants in lane order: solid orange, solid navy, outlined (paper with a 3px navy inset rule). Contents top to bottom: time detail (T+ and period), the headline figure, its caption, the organization in soft text. Hover inverts: orange and outlined go navy, navy goes orange. Hovering or focusing a block drives the rail clock. On load the blocks extend downward (clip reveal, 900ms, staggered 140ms in time order); under reduced motion they are simply present.

### Mission Rail (signature)
Sticky navy column: home link, readout (entry name, T+ in Courier Prime 2rem, period), a scale with one paper-soft tick per month, labelled 2px marks at each role start and at graduation, an orange now-tick, and an orange span bar that glides (520ms, ease-out) to whichever entry is current. The readout's T+ turns orange while a specific entry is shown. Section nav sits below a 1px navy-line divider and turns orange on hover.

### Timeline Row
The detail unit for experience, projects and education. "When" column: T+ mark, period, a 2px-ruled track with the entry's span filled in the accent, and notes. "What" column: title, subtitle, square-marked highlights, optional metrics (figure over label, 1px rule above), and a stack line with a bold label.

### Contact Tab
Fixed orange vertical tab on the right edge (desktop only), uppercase label tracked 0.08em in vertical writing, with a 2px navy ring. Hover widens it by 0.5rem and inverts to navy. Focus uses a two-colour ring (3px paper outline inside a 6px navy ring) so it shows over every tone. It hides itself once the Contact section is in view.

### Section Heading
Headline type under a 3px rule in the section's line colour, with 2rem below.

## Do's and Don'ts

### Do:
- **Do** place every activity on the shared time scale with a T+ mark, a period, and a span track.
- **Do** use orange only for the present and the next action (Orange Is Now).
- **Do** set every time value in Courier Prime and everything else in Archivo (Clock Face).
- **Do** change a section's tone through the paper, navy, or orange tone, never by hard-coding colours inside a component.
- **Do** signal hover and active states by inverting fills between orange and navy, over 160ms linear.
- **Do** keep everything readable and still under reduced motion and without scripts.

### Don't:
- **Don't** round corners or blur, offset, or soften any shadow.
- **Don't** use gradient fills or translucency for depth; hard-stop gradients are for drawing rules and ticks only.
- **Don't** add a fourth ink; secondary text is a tint of the surface it sits on.
- **Don't** lay entries out as a grid of equal cards; the time axis organises the page.
