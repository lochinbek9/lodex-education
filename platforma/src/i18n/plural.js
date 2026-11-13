// Rus tilida son bilan kelishish: 1 урок, 2 урока, 5 уроков
export function pluralRu(n, one, few, many) {
  const a = Math.abs(n) % 100, b = a % 10;
  if (a > 10 && a < 20) return many;
  if (b > 1 && b < 5) return few;
  if (b === 1) return one;
  return many;
}
