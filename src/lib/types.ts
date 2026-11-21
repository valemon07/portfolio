/**
 * Plain view-model types. Components import their prop types from here and
 * from nowhere else, so they stay independent of where the data comes from.
 */

export interface Metric {
  value: string;
  label: string;
}

/** A start/end span. `end` is undefined while ongoing. Months are "YYYY-MM". */
export interface Period {
  start: string;
  end?: string;
  /** Human-readable, e.g. "May 2026 – Present". */
  label: string;
  ongoing: boolean;
}

/**
 * Where something sits on the page's time scale. Fractions run from 0 (the
 * first month on the scale) to 1 (the last).
 */
export interface Span {
  /** Short name shown in the clock readout. */
  name: string;
  /** Elapsed-time mark of the start, e.g. "T+09". */
  t: string;
  /** Human-readable period, e.g. "May 2026 – Present". */
  period: string;
  from: number;
  to: number;
  /** True while the span has no end date; its end then tracks the present. */
  ongoing: boolean;
}

/** A labelled point on the time scale. */
export interface ScaleMark {
  t: string;
  label: string;
  at: number;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  lane: string;
  location: string;
  period: Period;
  summary: string;
  highlights: string[];
  metrics: Metric[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  context: string;
  period: Period;
  summary: string;
  highlights: string[];
  metrics: Metric[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: { src: string; alt: string };
}

export interface ProfileLink {
  label: string;
  handle: string;
  url: string;
}

export interface Education {
  school: string;
  college: string;
  location: string;
  degree: string;
  gpa: string;
  /** "YYYY-MM" */
  graduation: string;
  /** Human-readable, e.g. "May 2028". */
  graduationLabel: string;
  coursework: string[];
}

export interface Profile {
  name: string;
  givenName: string;
  role: string;
  status: string;
  seeking: string;
  location: string;
  email: string;
  links: ProfileLink[];
  education: Education;
  spokenLanguages: string[];
  interests: string[];
  /** Present only when a public résumé file exists at public/resume.pdf. */
  resumeUrl?: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

/** Everything the home page needs, in one object. */
export interface SiteContent {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
}
