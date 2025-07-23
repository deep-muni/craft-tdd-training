export function countElement<T>(target: T, list: T[]): number {
  return list.filter(item => item === target).length;
}
