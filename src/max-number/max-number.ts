export function maximumNumber(numbers: number[]): number | null {
  if (numbers.length === 0) {
    return null;
  }

  return Math.max(...numbers);
}