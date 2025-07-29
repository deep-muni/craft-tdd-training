export function parseRomanAsInt(roman: string): number {
  let number = 0;

  while (roman.startsWith("I")) {
    number = number + 1;
    roman = roman.substring(1);
  }

  return number;
}


export function toRoman(number: number): string {
  let roman = "";
  
  while (number >= 1) {
    roman = roman + "I";
    number = number - 1;
  }

  return roman;
}