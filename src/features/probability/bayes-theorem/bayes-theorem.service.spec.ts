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
      input: Pick<BayesTheoremRequestDto, 'desiredIntersection'> & {
        totalProbability: number;
      };
      expected: BayesTheoremResponseDto;
    }>([
      {
        input: {
          desiredIntersection: {
            event: { probability: 0.001 },
            eventGivenB: { probability: 0.99 },
          },
          totalProbability: 0.3,
        },
        expected: {
          probabilityOfOcurrence: {
            normalized: 0.0033,
            raw: 0.0033,
          },
        },
      },
      {
        input: {
          desiredIntersection: {
            event: { probability: 0.1 },
            eventGivenB: { probability: 0.9 },
          },
          totalProbability: 0.25,
        },
        expected: {
          probabilityOfOcurrence: {
            normalized: 0.36,
            raw: 0.36,
          },
        },
      },
    ])(
      'should return the correct result %j',
      ({
        expected,
        input: { desiredIntersection: deciredIntersection, totalProbability },
      }) => {
        jest
          .spyOn(totalProbabilityService, 'calculateTotalProbability')
          .mockReturnValueOnce({
            totalProbability: {
              raw: totalProbability,
              normalized: -1,
            },
          });

        const actual = underTest.calculateBayesTheorem({
          desiredIntersection: deciredIntersection,
          extraIntersections: [],
        });

        expect(actual).toEqual(expected);
      },
    );

    it('should call TotalProbabilityService with the correct params', () => {
      const dto: BayesTheoremRequestDto = {
        desiredIntersection: {
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

      const expected = [dto.desiredIntersection, ...dto.extraIntersections];

      const totalProbabilityServiceSpy = jest
        .spyOn(totalProbabilityService, 'calculateTotalProbability')
        .mockReturnValueOnce({
          totalProbability: {
            raw: 1,
            normalized: -1,
          },
        });

      underTest.calculateBayesTheorem(dto);

      expect(totalProbabilityServiceSpy).toHaveBeenCalledWith<
        Parameters<TotalProbabilityService['calculateTotalProbability']>
      >({
        intersections: expect.arrayContaining(expected),
      });
    });

    describe('when total probability is 0', () => {
      it('should throw an error', () => {
        jest
          .spyOn(totalProbabilityService, 'calculateTotalProbability')
          .mockReturnValueOnce({
            totalProbability: {
              raw: 0,
              normalized: -1,
            },
          });

        expect(() =>
          underTest.calculateBayesTheorem({
            desiredIntersection: {} as any,
            extraIntersections: [],
          }),
        ).toThrowErrorMatchingInlineSnapshot(`"Total probability cannot be 0"`);
      });
    });
  });
});
