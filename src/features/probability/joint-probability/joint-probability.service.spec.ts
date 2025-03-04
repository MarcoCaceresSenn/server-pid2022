import { TestBed } from '@automock/jest';
import {
  ThreeEventsJointProbabilityUnionRequestDto,
  TwoEventsJointProbabilityRequestDto,
  TwoEventsJointProbabilityResponseDto,
} from './dto';
import { JointProbabilityService } from './joint-probability.service';

describe('JointProbabilityService', () => {
  let underTest: JointProbabilityService;

  beforeEach(() => {
    const { unit } = TestBed.create(JointProbabilityService).compile();

    underTest = unit;
  });

  describe('calculateJointProbabilityForTwoEvents', () => {
    it.each<{
      input: TwoEventsJointProbabilityRequestDto;
      expected: TwoEventsJointProbabilityResponseDto;
    }>([
      {
        input: {
          eventA: { probability: 0.5 },
          eventB: { probability: 0.5 },
          intersectionAB: { probability: 0.25 },
        },
        expected: {
          probabilityOfAUnionB: 0.75,
          probabilityOfAComplementIntersectionB: 0.25,
          probabilityOfAIntersectionBComplement: 0.25,
          probabilityOfComplementsSum: 0.5,
        },
      },
      {
        input: {
          eventA: { probability: 0.25 },
          eventB: { probability: 0.75 },
          intersectionAB: { probability: 0.1 },
        },
        expected: {
          probabilityOfAUnionB: 0.9,
          probabilityOfAComplementIntersectionB: 0.15,
          probabilityOfAIntersectionBComplement: 0.65,
          probabilityOfComplementsSum: 0.8,
        },
      },
      {
        input: {
          eventA: { probability: 0 },
          eventB: { probability: 1 },
          intersectionAB: { probability: 0.2 },
        },
        expected: {
          probabilityOfAUnionB: 0.8,
          probabilityOfAComplementIntersectionB: 0,
          probabilityOfAIntersectionBComplement: 0.8,
          probabilityOfComplementsSum: 0.6,
        },
      },
      {
        input: {
          eventA: { probability: 0.4 },
          eventB: { probability: 0.2 },
          intersectionAB: { probability: 0 },
        },
        expected: {
          probabilityOfAUnionB: 0.6,
          probabilityOfAComplementIntersectionB: 0.4,
          probabilityOfAIntersectionBComplement: 0.2,
          probabilityOfComplementsSum: 0.6,
        },
      },
      {
        input: {
          eventA: { probability: 0.1 },
          eventB: { probability: 0.2 },
          intersectionAB: { probability: 0 },
        },
        expected: {
          probabilityOfAUnionB: 0.3,
          probabilityOfAComplementIntersectionB: 0.1,
          probabilityOfAIntersectionBComplement: 0.2,
          probabilityOfComplementsSum: 0.3,
        },
      },
      {
        input: {
          eventA: { probability: 0.6 },
          eventB: { probability: 0.8 },
          intersectionAB: { probability: 0.5 },
        },
        expected: {
          probabilityOfAUnionB: 0.9,
          probabilityOfAComplementIntersectionB: 0.1,
          probabilityOfAIntersectionBComplement: 0.3,
          probabilityOfComplementsSum: 0.4,
        },
      },
    ])('should return the correct result %j', ({ expected, input }) => {
      const actual = underTest.calculateJointProbabilityForTwoEvents(input);

      expect(actual).toEqual(expected);
    });

    describe('when result is greater than 1', () => {
      it('should return 1 as maximum probability', () => {
        const actual = underTest.calculateJointProbabilityForTwoEvents({
          eventA: { probability: 0.75 },
          eventB: { probability: 0.6 },
          intersectionAB: { probability: 0.15 },
        });

        expect(actual).toEqual(
          expect.objectContaining<Partial<typeof actual>>({
            probabilityOfAUnionB: 1,
            probabilityOfComplementsSum: 1,
          }),
        );
      });
    });

    describe('when result is less than 0', () => {
      it('should return 0 as minimun probability', () => {
        const actual = underTest.calculateJointProbabilityForTwoEvents({
          eventA: { probability: 0.01 },
          eventB: { probability: 0.05 },
          intersectionAB: { probability: 0.1 },
        });

        expect(actual).toEqual(
          expect.objectContaining<Partial<typeof actual>>({
            probabilityOfAUnionB: 0,
            probabilityOfAComplementIntersectionB: 0,
            probabilityOfAIntersectionBComplement: 0,
            probabilityOfComplementsSum: 0,
          }),
        );
      });
    });
  });

  describe('calculateJointProbabilityForThreeEvents', () => {
    it.each<{
      input: ThreeEventsJointProbabilityUnionRequestDto;
      expected: ReturnType<
        JointProbabilityService['calculateJointProbabilityForThreeEvents']
      >;
    }>([
      {
        input: {
          eventA: { probability: 0.5 },
          eventB: { probability: 0.5 },
          eventC: { probability: 0.5 },
          intersectionAB: { probability: 0.25 },

          intersectionAC: { probability: 0.25 },
          intersectionBC: { probability: 0.25 },
          intersectionABC: { probability: 0.25 },
        },
        expected: 1,
      },
      {
        input: {
          eventA: { probability: 0.2 },
          eventB: { probability: 0.3 },
          eventC: { probability: 0.9 },
          intersectionAB: { probability: 0.1 },
          intersectionAC: { probability: 0.35 },
          intersectionBC: { probability: 0.65 },
          intersectionABC: { probability: 0.5 },
        },
        expected: 0.8,
      },
    ])('should return the correct result %j', ({ expected, input }) => {
      const actual = underTest.calculateJointProbabilityForThreeEvents(input);

      expect(actual).toEqual(expected);
    });

    describe('when result is greater than 1', () => {
      it('should return 1', () => {
        const actual = underTest.calculateJointProbabilityForThreeEvents({
          eventA: { probability: 0.75 },
          eventB: { probability: 0.6 },
          eventC: { probability: 0.8 },
          intersectionAB: { probability: 0.15 },
          intersectionAC: { probability: 0.1 },
          intersectionBC: { probability: 0.2 },
          intersectionABC: { probability: 0.05 },
        });

        expect(actual).toBe(1);
      });
    });

    describe('when result is less than 0', () => {
      it('should return 0', () => {
        const actual = underTest.calculateJointProbabilityForThreeEvents({
          eventA: { probability: 0.01 },
          eventB: { probability: 0.05 },
          eventC: { probability: 0.021 },
          intersectionAB: { probability: 0.15 },
          intersectionAC: { probability: 0.5 },
          intersectionBC: { probability: 0.75 },
          intersectionABC: { probability: 0.1 },
        });

        expect(actual).toBe(0);
      });
    });
  });
});
