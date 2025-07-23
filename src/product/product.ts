export function product(...numbers: number[]): number {
  if (numbers?.length == 1) {
    return numbers[0]
  }

  if (numbers?.length == 2) {
    return numbers[0] * numbers[1];
  }

  return 1;
}