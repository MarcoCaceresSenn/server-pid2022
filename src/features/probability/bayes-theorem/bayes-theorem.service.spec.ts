import { BayesTheoremService } from './bayes-theorem.service';
import { TestBed } from '@automock/jest';
import { BayesTheoremRequestDto, BayesTheoremResponseDto } from './dto';
import { TotalProbabilityService } from '../total-probability';

describe('BayesTheoremService', () => {
  let underTest: BayesTheoremService;
  let totalProbabilityService: TotalProbabilityService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(BayesTheoremService).compile();

    underTest = unit;
    totalProbabilityService = unitRef.get(TotalProbabilityService);
  });

  describe('calculateBayesTheorem', () => {
    it.each<{
      input: Pick<BayesTheoremRequestDto, 'deciredIntersection'> &
        Pick<
          ReturnType<TotalProbabilityService['calculateTotalProbability']>,
          'totalProbability'
        >;
      expected: BayesTheoremResponseDto;
    }>([
      {
        input: {
          deciredIntersection: {
            event: { probability: 0.001 },
            eventGivenB: { probability: 0.99 },
          },
          totalProbability: 0.3,
        },
        expected: {
          probabilityOfOcurrence: 0.0033,
        },
      },
      {
        input: {
          deciredIntersection: {
            event: { probability: 0.1 },
            eventGivenB: { probability: 0.9 },
          },
          totalProbability: 0.25,
        },
        expected: {
          probabilityOfOcurrence: 0.36,
        },
      },
    ])(
      'should return the correct result %j',
      ({ expected, input: { deciredIntersection, totalProbability } }) => {
        jest
          .spyOn(totalProbabilityService, 'calculateTotalProbability')
          .mockReturnValueOnce({ totalProbability });

        const actual = underTest.calculateBayesTheorem({
          deciredIntersection,
          extraIntersections: [],
        });

        expect(actual).toEqual(expected);
      },
    );

    it('should throw an error when total probability is 0', () => {
      jest
        .spyOn(totalProbabilityService, 'calculateTotalProbability')
        .mockReturnValueOnce({ totalProbability: 0 });

      expect(() =>
        underTest.calculateBayesTheorem({
          deciredIntersection: {} as any,
          extraIntersections: [],
        }),
      ).toThrowErrorMatchingInlineSnapshot(`"Total probability cannot be 0"`);
    });

    it('should call TotalProbabilityService with the correct params', () => {
      const dto: BayesTheoremRequestDto = {
        deciredIntersection: {
          event: { probability: 0.1 },
          eventGivenB: { probability: 0.2 },
        },
        extraIntersections: [
          {
            event: { probability: 0.3 },
            eventGivenB: { probability: 0.4 },
          },
          {
            event: { probability: 0.5 },
            eventGivenB: { probability: 0.6 },
          },
        ],
      };

      const expected = [dto.deciredIntersection, ...dto.extraIntersections];

      const totalProbabilityServiceSpy = jest
        .spyOn(totalProbabilityService, 'calculateTotalProbability')
        .mockReturnValueOnce({ totalProbability: 1 });

      underTest.calculateBayesTheorem(dto);

      expect(totalProbabilityServiceSpy).toHaveBeenCalledWith<
        Parameters<TotalProbabilityService['calculateTotalProbability']>
      >({
        intersections: expect.arrayContaining(expected),
      });
    });
  });
});
