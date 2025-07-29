export function parseRomanAsInt(roman: string): number {
  let number = 0;
  let remainingRoman = roman;

  while (remainingRoman.startsWith("I")) {
    number = number + 1;
    remainingRoman = remainingRoman.substring(1);
  }

  return number;
}


export function toRoman(number: number): string {
  let roman = "";
  let remainingNumber = number;

  while (remainingNumber >= 1) {
    roman = roman + "I";
    remainingNumber = remainingNumber - 1;
  }

  return roman;
}