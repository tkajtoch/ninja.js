import { arrayRange } from './array-range';

describe('arrayRange', () => {
  it('should return an array with correct values', () => {
    expect(arrayRange(0)).toEqual([]);
    expect(arrayRange(1)).toEqual([0]);
    expect(arrayRange(5)).toEqual([0, 1, 2, 3, 4]);
  });
});
