export function isPalindrome(input: string): boolean {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  const onlyLowerCaseAlphabetAndDigit = input.replace(/[\p{P}\p{White_Space}]/gu, '').toLowerCase();

  return onlyLowerCaseAlphabetAndDigit === onlyLowerCaseAlphabetAndDigit.split('').reverse().join('');
}
