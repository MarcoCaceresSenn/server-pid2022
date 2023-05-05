import { TestBed } from '@automock/jest';
import { ConditionalProbabilityService } from './conditional-probability.service';
import {
  TwoEventsConditionalProbabilityRequestDto,
  TwoEventsConditionalProbabilityResponseDto,
} from './dto';

describe('ConditionalProbabilityService', () => {
  let underTest: ConditionalProbabilityService;

  beforeEach(() => {
    const { unit } = TestBed.create(ConditionalProbabilityService).compile();

    underTest = unit;
  });

  describe('calculateConditionalProbabilityForTwoEvents', () => {
    it('should throw an error if the probability of event B is 0', () => {
      expect(() =>
        underTest.calculateConditionalProbabilityForTwoEvents({
          eventB: {
            probability: 0,
          },
        } as any),
      ).toThrowErrorMatchingInlineSnapshot(
        `"The probability of event B must be greater than 0"`,
      );
    });

    it.each<{
      dto: TwoEventsConditionalProbabilityRequestDto;
      expected: TwoEventsConditionalProbabilityResponseDto;
    }>([
      {
        dto: {
          eventB: { probability: 0.5 },
          intersectionAB: { probability: 0.5 },
        },
        expected: { probabilityOfAGivenB: 1 },
      },
      {
        dto: {
          eventB: { probability: 0.5 },
          intersectionAB: { probability: 0.25 },
        },
        expected: { probabilityOfAGivenB: 0.5 },
      },
      {
        dto: {
          eventB: { probability: 1 },
          intersectionAB: { probability: 0.65 },
        },
        expected: { probabilityOfAGivenB: 0.65 },
      },
      {
        dto: {
          eventB: { probability: 0.7 },
          intersectionAB: { probability: 0 },
        },
        expected: { probabilityOfAGivenB: 0 },
      },
    ])('should return the correct result %j', ({ dto, expected }) => {
      const actual = underTest.calculateConditionalProbabilityForTwoEvents(dto);

      expect(actual).toEqual(expected);
    });

    describe('when the result is greater than 1', () => {
      it('should return 1 as maximum probability', () => {
        const actual = underTest.calculateConditionalProbabilityForTwoEvents({
          eventB: { probability: 0.5 },
          intersectionAB: { probability: 0.75 },
        });

        expect(actual).toEqual(
          expect.objectContaining<Partial<typeof actual>>({
            probabilityOfAGivenB: 1,
          }),
        );
      });
    });
  });
});
