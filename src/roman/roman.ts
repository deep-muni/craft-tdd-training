export function parseRomanAsInt(roman: string): number {
  let number = 0;

  if (roman == "I") number = 1;
  return number;
}


export function toRoman(number: number): string {
  let roman = "";
  
  if (number == 1) roman = "I";
  return roman;
}