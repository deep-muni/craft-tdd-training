export function maximumNumber(number?: number[]): number | undefined | null {
  if (number?.length === 0) {
    return null;
  }

  if (number?.length === 1) {
    return number[0];
  }
}