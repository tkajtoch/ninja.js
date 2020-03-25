import { keysToValues } from './keys-to-values';

describe('keysToValues', () => {
  it('should return correct values', () => {
    const input = {
      mock1: 'Lorem ipsum',
      mock2: 'Dolor sit amet',
      mock3: undefined,
    };

    const expected = {
      mock1: 'mock1',
      mock2: 'mock2',
      mock3: 'mock3',
    };

    expect(keysToValues(input)).toEqual(expected);
  });
});
