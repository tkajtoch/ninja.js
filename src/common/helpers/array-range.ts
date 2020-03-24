/**
 * Create an array of specified range
 * @param {number} end - range end value
 */
export function arrayRange(end: number): Array<number> {
  return Array.from(Array(end).keys());
}
