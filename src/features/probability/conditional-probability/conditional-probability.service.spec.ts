import { TestBed } from '@automock/jest';
import { ConditionalProbabilityService } from './conditional-probability.service';
import {
  IndependentEventsConditionalProbabilityRequestDto,
  IndependentEventsConditionalProbabilityResposenDto,
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
      input: TwoEventsConditionalProbabilityRequestDto;
      expected: TwoEventsConditionalProbabilityResponseDto;
    }>([
      {
        input: {
          eventB: { probability: 0.5 },
          intersectionAB: { probability: 0.5 },
        },
        expected: { probabilityOfAGivenB: 1 },
      },
      {
        input: {
          eventB: { probability: 0.5 },
          intersectionAB: { probability: 0.25 },
        },
        expected: { probabilityOfAGivenB: 0.5 },
      },
      {
        input: {
          eventB: { probability: 1 },
          intersectionAB: { probability: 0.65 },
        },
        expected: { probabilityOfAGivenB: 0.65 },
      },
      {
        input: {
          eventB: { probability: 0.7 },
          intersectionAB: { probability: 0 },
        },
        expected: { probabilityOfAGivenB: 0 },
      },
    ])('should return the correct result %j', ({ input, expected }) => {
      const actual =
        underTest.calculateConditionalProbabilityForTwoEvents(input);

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

  describe('calculateConditionalProbabilityForIndependentEvents', () => {
    it.each<{
      input: IndependentEventsConditionalProbabilityRequestDto;
      expected: IndependentEventsConditionalProbabilityResposenDto;
    }>([
      {
        input: {
          events: [
            { probability: 0.5 },
            { probability: 0.5 },
            { probability: 0.5 },
          ],
        },
        expected: { probabilityOfOcurrence: 0.125 },
      },
      {
        input: {
          events: [
            { probability: 0.2 },
            { probability: 0.4 },
            { probability: 0.6 },
            { probability: 0.8 },
            { probability: 1 },
          ],
        },
        expected: { probabilityOfOcurrence: 0.0384 },
      },
      {
        input: {
          events: [
            { probability: 0.2 },
            { probability: 0.4 },
            { probability: 0.6 },
            { probability: 0.8 },
            { probability: 0 },
          ],
        },
        expected: { probabilityOfOcurrence: 0 },
      },
    ])('should return the correct result %j', ({ input, expected }) => {
      const actual =
        underTest.calculateConditionalProbabilityForIndependentEvents(input);

      expect(actual).toEqual(expected);
    });
  });
});
