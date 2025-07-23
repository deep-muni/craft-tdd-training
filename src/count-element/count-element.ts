export function countElement(target: string, list: string[]): number {
  if (list.length === 0) {
    return 0;
  }

  if (list.length === 1) {
    if (target === list[0]) {
      return 1;
    } else {
      return 0;
    }
  }

  let count = 0;
  for (const element of list) {
    if (target === element) {
      count++;
    }
  }

  return count;
}
