/**
 * The only module that reads content. Pages call these functions and pass the
 * results to components as props; components never import from here.
 *
 * To change where content comes from (a CMS, an API), change this file only.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection } from 'astro:content';

import profileData from '../content/profile.json';
import skillsData from '../content/skills.json';
import { formatMonth } from './time';
import type { Experience, Period, Profile, Project, SiteContent, SkillGroup } from './types';

function toPeriod(start: string, end?: string): Period {
  return {
    start,
    end,
    ongoing: end === undefined,
    label: `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`,
  };
}

/** Ongoing work first, then most recently started. */
function byRecency(a: { period: Period }, b: { period: Period }): number {
  if (a.period.ongoing !== b.period.ongoing) return a.period.ongoing ? -1 : 1;
  return b.period.start.localeCompare(a.period.start);
}

/** The public résumé is optional: the link exists only when the file does. */
function resolveResumeUrl(): string | undefined {
  // Resolved from the project root: builds and the dev server both run there.
  return existsSync(join(process.cwd(), 'public', 'resume.pdf')) ? '/resume.pdf' : undefined;
}

export function getProfile(): Profile {
  const { education, ...rest } = profileData;
  return {
    ...rest,
    education: { ...education, graduationLabel: formatMonth(education.graduation) },
    resumeUrl: resolveResumeUrl(),
  };
}

export function getSkills(): SkillGroup[] {
  return skillsData;
}

export async function getExperience(): Promise<Experience[]> {
  const entries = await getCollection('experience');
  return entries
    .map(({ id, data }) => {
      const { start, end, ...rest } = data;
      return { id, ...rest, period: toPeriod(start, end) };
    })
    .sort(byRecency);
}

export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects');
  return entries
    .map(({ id, data }) => {
      const { start, end, ...rest } = data;
      return { id, ...rest, period: toPeriod(start, end) };
    })
    .sort(byRecency);
}

export async function getSiteContent(): Promise<SiteContent> {
  const [experience, projects] = await Promise.all([getExperience(), getProjects()]);
  return { profile: getProfile(), experience, projects, skills: getSkills() };
}
