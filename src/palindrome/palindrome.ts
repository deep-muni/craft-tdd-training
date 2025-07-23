export function isPalindrome(input: string): boolean {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  return input.toLowerCase() === input.toLowerCase().split('').reverse().join('');
}
