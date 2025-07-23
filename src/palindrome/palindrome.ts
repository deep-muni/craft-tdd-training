export function isPalindrome(input: string): boolean {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  const onlyLowerCaseAlphabets = input.replace(/[^a-zA-Z]/g, '').toLowerCase();

  return onlyLowerCaseAlphabets === onlyLowerCaseAlphabets.split('').reverse().join('');
}
