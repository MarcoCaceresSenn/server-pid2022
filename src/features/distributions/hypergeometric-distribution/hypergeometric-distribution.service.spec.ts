import { TestBed } from '@automock/jest';
import { HypergeometricDistributionService } from './hypergeometric-distribution.service';
import { HypergeometricDistributionResponseDto } from './dto/hypergeometric-distribution-response';
import { HypergeometricDistributionRequestDto } from './dto/hypergeometric-distribution-request';

describe('HypergeometricDistributionService', () => {
  let underTest: HypergeometricDistributionService;

  beforeEach(() => {
    const { unit } = TestBed.create(
      HypergeometricDistributionService,
    ).compile();

    underTest = unit;
  });

  describe('calculateProbability', () => {
    it.each<{
      input: HypergeometricDistributionRequestDto;
      expected: HypergeometricDistributionResponseDto;
    }>([
      {
        input: {
          N: 100,
          K: 50,
          n: 10,
          k: 5,
        },
        expected: { probability: 0.246 }, // Este es un valor aproximado
      },
    ])('should return the correct result %j', ({ input, expected }) => {
      const actual = underTest.calculateProbability(
        input.N,
        input.K,
        input.n,
        input.k,
      );

      expect(actual).toEqual(expected);
    });
  });
});
