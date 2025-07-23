export function maximumNumber(numbers?: number[]): number | undefined | null {
  if (!numbers) {
    return undefined;
  }

  if (numbers.length === 0) {
    return null;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  let maximum = Number.MIN_SAFE_INTEGER;
  for (const number of numbers) {
    if (number > maximum) {
      maximum = number;
    }
  }

  return maximum;
}