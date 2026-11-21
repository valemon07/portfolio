# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro (static output) with TypeScript, plain CSS driven by design tokens, and pnpm. The owner left the choice to the agent and asked that the UI be decoupled from any backend or data concerns so the look is easy to iterate. Astro was chosen because the site is content, not an application: it ships static HTML with almost no client JavaScript, keeps content as typed data files, and deploys to any static host. No Tailwind or UI kit; the owner asked about Tailwind and it was left out for now, and can be added later.

Decoupling rule: `src/content/` holds facts only, `src/lib/content.ts` is the only module that reads them, and components under `src/components/` are presentational and receive props. No deploy target has been set.

## Users

Recruiters and hiring managers screening the owner for software engineering internships. They are evaluating a candidate, usually alongside others, and need to decide whether to move to an interview.

No secondary audience (clients, peers, community) has been confirmed.

## Product Purpose

A personal portfolio that presents Andres Valerio Montero, a Computer Science student at the University of Virginia (B.S. expected May 2028), as a full-stack software engineer. It exists to support internship applications. Success is a recruiter or hiring manager coming away with enough evidence of real work to contact them or advance them.

## Positioning

Partly open. Confirmed facts that distinguish the owner: work across the stack from web UI to robot software (UI team leader on the team that placed 1st of 47 at NASA's Lunabotics Competition), a paid freelance system shipped into production use, LLM research work, and a 4.0 GPA. The owner has not stated a positioning line in their own words; do not invent a tagline or seniority claim.

## Operating Context

- The site is reached from job applications, a résumé, or a profile link, and is read as part of screening a candidate.
- It shows two kinds of material: finished projects and work history.

## Capabilities and Constraints

- Presents work experience, projects, skills, education, and contact details on a single home page.
- Public contact is GitHub, LinkedIn, and the UVA email address. The phone number must not appear anywhere on the site.
- A résumé download is offered only when a web-safe copy exists at `public/resume.pdf`; until then the link is not rendered. The résumé PDF in the project root is private context, is git-ignored, and must never be committed or copied into `public/`.
- Content is thin today, so the site must hold up with a small number of entries and grow without restructuring. Project image and link fields are optional.
- Interesting motion is welcome as a nice-to-have, not a requirement.
- Undecided: whether the site carries writing or a blog (none exists today), the domain, and the deploy target.

## Brand Commitments

- The site goes by the owner's real name, Andres Valerio Montero. There is no existing brand, logo, or handle to preserve.
- The owner chose the "Flight Plan" visual direction for the home page; the direction contract lives in the home page surface brief under `.impeccable/surfaces/`.

## Evidence on Hand

- Work history, projects, skills, and education transcribed from the owner's résumé into `src/content/`: three roles (Annie's Bakery, Mechatronics and Robotics Society, Omni-Reality and Cognition Lab) and three projects (Lumen Images, Grounds Access, Rust or Bust!), with the measured results the résumé states.
- No screenshots, photos, repository links, live URLs, writing, or testimonials have been supplied.
- No public résumé file has been supplied.
- Future work must ask the owner for new material and must not fabricate projects, employers, dates, technologies, metrics, or outcomes.

## Product Principles

1. Evidence over claims: every statement about the owner's ability is backed by a real project or real work history.
2. Fast to evaluate: a screener should reach the strongest work without hunting for it.
3. Honest at small scale: a few real entries, shown fully, beat padding.
4. Cheap to keep current: adding a project or a job is a content edit, not a rebuild.
