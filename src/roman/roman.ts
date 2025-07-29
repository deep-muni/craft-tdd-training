const RomanNumerals = Object.freeze([
  { digit: "I", value: 1},
  { digit: "V", value: 5},
]);

const RomanNumeralsInProcessingOrder = Object.freeze(
  [...RomanNumerals].sort((a, b) => b.value - a.value)
);

export function parseRomanAsInt(roman: string): number {
  let number = 0;
  let remainingRoman = roman;

  for (let {digit, value} of RomanNumeralsInProcessingOrder) {
     while (remainingRoman.startsWith(digit)) {
      number += value;
      remainingRoman = remainingRoman.substring(digit.length);
    }
  }

  return number;
}


export function toRoman(number: number): string {
  let roman = "";
  let remainingNumber = number;

  for (let {digit, value} of RomanNumeralsInProcessingOrder) {
    while (remainingNumber >= value) {
      roman += digit;
      remainingNumber -= value;
    }
  }

  return roman;
}