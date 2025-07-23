const PUNCTUATION_AND_WHITESPACE_PATTERN = /[\p{P}\p{White_Space}]/gu;

export function isPalindrome(input: string): boolean {
  if (input.length <= 1) {
    return true;
  }

  const normalizedInput = normalize(input);
  return normalizedInput === reverse(normalizedInput);
}

function normalize(input: string): string {
  return input.replace(PUNCTUATION_AND_WHITESPACE_PATTERN, '').toLowerCase();
}

function reverse(input: string): string {
  return [...input].reverse().join('');
}
