type ExperienceEntry = {
  duration: {
    start: string;
    end?: string;
  };
};

function parseDate(value: string | undefined): Date | undefined {
  if (!value) return undefined;
  const parsed = Date.parse(value.trim());
  return Number.isNaN(parsed) ? undefined : new Date(parsed);
}

export function getTotalExperience(entries: ExperienceEntry[]): number {
  if (!entries.length) return 12;

  const now = new Date();
  let earliest: Date | undefined;
  let latest: Date | undefined;

  for (const entry of entries) {
    const start = parseDate(entry.duration?.start);
    const end = parseDate(entry.duration?.end) ?? now;
    if (!start) continue;
    if (!earliest || start < earliest) earliest = start;
    if (!latest || end > latest) latest = end;
  }

  if (!earliest) return 12;

  const years =
    ((latest?.getTime() ?? now.getTime()) - earliest.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(1, Math.round(years));
}
