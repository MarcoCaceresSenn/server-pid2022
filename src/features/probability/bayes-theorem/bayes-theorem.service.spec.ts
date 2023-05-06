import { BayesTheoremService } from './bayes-theorem.service';
import { TestBed } from '@automock/jest';
import { BayesTheoremRequestDto, BayesTheoremResponseDto } from './dto';

describe('BayesTheoremService', () => {
  let underTest: BayesTheoremService;

  beforeEach(() => {
    const { unit } = TestBed.create(BayesTheoremService).compile();

    underTest = unit;
  });

  describe('calculateBayesTheorem', () => {
    it.each<{
      input: BayesTheoremRequestDto;
      expected: BayesTheoremResponseDto;
    }>([
      {
        input: {
          deciredIntersection: {
            event: { probability: 0.001 },
            eventGivenB: { probability: 0.99 },
          },
          extraIntesections: [
            {
              event: { probability: 0.02 },
              eventGivenB: { probability: 0.999 },
            },
          ],
        },
        expected: {
          probabilityOfOcurrence: 0.0472,
        },
      },
      {
        input: {
          deciredIntersection: {
            event: { probability: 0.01 },
            eventGivenB: { probability: 0.09 },
          },
          extraIntesections: [
            {
              event: { probability: 0.2 },
              eventGivenB: { probability: 0.06 },
            },
            {
              event: { probability: 0.4 },
              eventGivenB: { probability: 0.3 },
            },
          ],
        },
        expected: {
          probabilityOfOcurrence: 0.0068,
        },
      },
    ])('should return the correct result %j', ({ expected, input }) => {
      const actual = underTest.calculateBayesTheorem(input);

      expect(actual).toEqual(expected);
    });
  });
});
