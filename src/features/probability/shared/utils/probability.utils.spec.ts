import { ProbabilityUtils } from './probability.utils';

describe('ProbabilityUtils', () => {
  describe('normalize', () => {
    it.each<{ probability: number; expected: number }>([
      { probability: 0, expected: 0 },
      { probability: 1, expected: 1 },
      { probability: 0.5, expected: 0.5 },
      { probability: -1, expected: 0 },
      { probability: 2, expected: 1 },
      { probability: 0.01, expected: 0.01 },
      { probability: 0.99, expected: 0.99 },
    ])(
      'should return $expected given $probability',
      ({ probability, expected }) => {
        const actual = ProbabilityUtils.normalize(probability);

        expect(actual).toEqual(expected);
      },
    );
  });
});
