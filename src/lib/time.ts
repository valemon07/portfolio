/**
 * Pure month arithmetic for the page's time scale. Months are "YYYY-MM".
 * No content access here: these are plain functions over strings.
 */
import type { ScaleMark, Span } from './types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toIndex(month: string): number {
  const [year, m] = month.split('-').map(Number);
  return year * 12 + (m - 1);
}

/** "2026-05" -> "May 2026" */
export function formatMonth(month: string): string {
  const [year, m] = month.split('-');
  return `${MONTHS[Number(m) - 1]} ${year}`;
}

export function monthsBetween(from: string, to: string): number {
  return toIndex(to) - toIndex(from);
}

export function currentMonth(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export interface TimeScale {
  /** First month on the scale. */
  start: string;
  /** Last month on the scale. */
  end: string;
  /** The present month, clamped to the scale. */
  now: string;
  /** Whole months from start to end. */
  months: number;
  /** Position of a month on the scale, 0 to 1. */
  at(month: string): number;
  /** Elapsed-time label for a month, e.g. "T+09". */
  t(month: string): string;
  mark(month: string, label?: string): ScaleMark;
  span(name: string, period: string, start: string, end?: string): Span;
}

export function createTimeScale(start: string, end: string, today = currentMonth()): TimeScale {
  const months = Math.max(1, monthsBetween(start, end));
  const clamp = (month: string) =>
    monthsBetween(start, month) < 0 ? start : monthsBetween(month, end) < 0 ? end : month;
  const now = clamp(today);
  const at = (month: string) => monthsBetween(start, clamp(month)) / months;
  const t = (month: string) => `T+${String(monthsBetween(start, clamp(month))).padStart(2, '0')}`;

  return {
    start,
    end,
    now,
    months,
    at,
    t,
    mark: (month, label = formatMonth(month)) => ({ t: t(month), label, at: at(month) }),
    span: (name, period, from, to) => ({
      name,
      period,
      t: t(from),
      from: at(from),
      to: at(to ?? now),
      ongoing: to === undefined,
    }),
  };
}
