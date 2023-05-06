import Big from 'big.js';
import { ProbabilityUtils } from './probability.utils';

describe('ProbabilityUtils', () => {
  describe('normalize', () => {
    describe.each<{ probability: number; expected: number }>([
      { probability: 0, expected: 0 },
      { probability: 1, expected: 1 },
      { probability: 0.5, expected: 0.5 },
      { probability: -1, expected: 0 },
      { probability: 2, expected: 1 },
      { probability: 0.01, expected: 0.01 },
      { probability: 0.99, expected: 0.99 },
      { probability: 0.99999, expected: 1 },
      { probability: 0.10001, expected: 0.1 },
      { probability: 0.00001, expected: 0 },
      { probability: 0.33333, expected: 0.3333 },
      { probability: 0.33335, expected: 0.3334 },
      { probability: 0.33336, expected: 0.3334 },
    ])('given $probability', ({ probability, expected }) => {
      describe('when is provided as number', () => {
        it(`should return ${expected}`, () => {
          const actual = ProbabilityUtils.normalize(probability);

          expect(actual).toEqual(expected);
        });
      });

      describe('when is provided as Big', () => {
        it(`should return ${expected}`, () => {
          const actual = ProbabilityUtils.normalize(new Big(probability));

          expect(actual).toEqual(expected);
        });
      });

      describe('when is provided as string', () => {
        it(`should return ${expected}`, () => {
          const actual = ProbabilityUtils.normalize(String(probability));

          expect(actual).toEqual(expected);
        });
      });
    });
  });
});
