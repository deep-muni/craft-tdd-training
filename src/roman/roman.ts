export function parseRomanAsInt(roman: string): number {
  let number = 0;
  let remainingRoman = roman;

  const romanDigit = "I";
  const romanDigitValue = 1;

  while (remainingRoman.startsWith(romanDigit)) {
    number += romanDigitValue;
    remainingRoman = remainingRoman.substring(romanDigit.length);
  }

  return number;
}


export function toRoman(number: number): string {
  let roman = "";
  let remainingNumber = number;

  const romanDigit = "I";
  const romanDigitValue = 1;

  while (remainingNumber >= romanDigitValue) {
    roman += romanDigit;
    remainingNumber -= romanDigitValue;
  }

  return roman;
}