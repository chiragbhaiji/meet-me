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
  if (!entries.length) return 0;

  const now = new Date();
  let totalMonths = 0;

  for (const entry of entries) {
    const start = parseDate(entry.duration?.start);
    const end = parseDate(entry.duration?.end) ?? now;
    if (!start) continue;

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    totalMonths += Math.max(0, months);
  }

  if (!totalMonths) return 0;

  const years = Math.max(1, Math.round(totalMonths / 12));
  return years;
}
