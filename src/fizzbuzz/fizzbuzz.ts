export function fizzbuzz(input: number): string {
  if (input === 0) {
    return "0";
  }

  if (input % 3 === 0) {
    return "fizz";
  }

  if (input % 5 === 0) {
    return "buzz";
  }

  return input.toString();
}
