export function mergeClasses(
  classes: Array<string | undefined | true | false>,
): string {
  const dedupClasses = new Set(classes);

  return Array.from(dedupClasses)
    .filter((value) => Boolean(value))
    .join(' ');
}
