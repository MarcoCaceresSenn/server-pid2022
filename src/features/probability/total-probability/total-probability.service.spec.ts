import { TotalProbabilityRequestDto } from './dto';
import { TotalProbabilityResponseDto } from './dto/total-probability-response.dto';
import { TotalProbabilityService } from './total-probability.service';
import { TestBed } from '@automock/jest';

describe('TotalProbabilityService', () => {
  let underTest: TotalProbabilityService;

  beforeEach(() => {
    const { unit } = TestBed.create(TotalProbabilityService).compile();

    underTest = unit;
  });

  describe('calculateTotalProbability', () => {
    it.each<{
      input: TotalProbabilityRequestDto;
      expected: TotalProbabilityResponseDto;
    }>([
      {
        input: {
          intersections: [
            {
              event: { probability: 0.5 },
              eventGivenB: { probability: 0.5 },
            },
            {
              event: { probability: 0.6 },
              eventGivenB: { probability: 0.4 },
            },
            {
              event: { probability: 0.9 },
              eventGivenB: { probability: 0.01 },
            },
          ],
        },
        expected: {
          totalProbability: {
            normalized: 0.499,
            raw: 0.499,
          },
        },
      },
      {
        input: {
          intersections: [
            {
              event: { probability: 0.2 },
              eventGivenB: { probability: 0.3 },
            },
            {
              event: { probability: 0.25 },
              eventGivenB: { probability: 0.4 },
            },
          ],
        },
        expected: {
          totalProbability: {
            normalized: 0.16,
            raw: 0.16,
          },
        },
      },
      {
        input: {
          intersections: [
            {
              event: { probability: 0.9 },
              eventGivenB: { probability: 0.9 },
            },
            {
              event: { probability: 0.9 },
              eventGivenB: { probability: 0.9 },
            },
          ],
        },
        expected: {
          totalProbability: {
            normalized: 1,
            raw: 1.62,
          },
        },
      },
      {
        input: {
          intersections: [
            {
              event: { probability: 0.2 },
              eventGivenB: { probability: 0.35 },
            },
          ],
        },
        expected: {
          totalProbability: {
            normalized: 0.07,
            raw: 0.07,
          },
        },
      },
    ])('should return the correct result %j', ({ input, expected }) => {
      const actual = underTest.calculateTotalProbability(input);

      expect(actual).toEqual(expected);
    });
  });
});
