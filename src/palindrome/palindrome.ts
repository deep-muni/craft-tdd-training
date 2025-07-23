export function isPalindrome(input: string): boolean {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  const inputWithoutSpaceLowerCase = input.replace(/ /g, '').toLowerCase();

  return inputWithoutSpaceLowerCase === inputWithoutSpaceLowerCase.split('').reverse().join('');
}
