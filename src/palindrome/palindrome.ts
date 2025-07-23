export function isPalindrome(input: string): boolean {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  const onlyLowerCaseAlphabetAndDigit = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return onlyLowerCaseAlphabetAndDigit === onlyLowerCaseAlphabetAndDigit.split('').reverse().join('');
}
