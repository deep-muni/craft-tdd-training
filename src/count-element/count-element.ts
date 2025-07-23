export function countElement(target: string, list: string[]): number {
  return list.filter(item => item === target).length;
}
