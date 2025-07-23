export function product(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc * num, 1);
}