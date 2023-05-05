import { TestBed } from '@automock/jest';
import { JointProbabilityService } from './joint-probability.service';
import { ThreeProbabilitiesUnionDto, TwoEventsProbabilitesDto } from './model';

describe('JointProbabilityService', () => {
  let underTest: JointProbabilityService;

  beforeEach(() => {
    const { unit } = TestBed.create(JointProbabilityService).compile();

    underTest = unit;
  });

  describe('calculateUnionForTwoEvents', () => {
    it.each<TwoEventsProbabilitesDto & { expected: number }>([
      {
        eventA: { probability: 0.5 },
        eventB: { probability: 0.5 },
        intersection: { probability: 0.25 },
        expected: 0.75,
      },
      {
        eventA: { probability: 0.25 },
        eventB: { probability: 0.75 },
        intersection: { probability: 0.1 },
        expected: 0.9,
      },
      {
        eventA: { probability: 0 },
        eventB: { probability: 1 },
        intersection: { probability: 0.2 },
        expected: 0.8,
      },
      {
        eventA: { probability: 0.4 },
        eventB: { probability: 0.2 },
        intersection: { probability: 0 },
        expected: 0.6,
      },
      {
        eventA: { probability: 0.1 },
        eventB: { probability: 0.2 },
        intersection: { probability: 0 },
        expected: 0.3,
      },
    ])(
      'should return the correct result %j',
      ({ expected, ...twoEventsUnionDto }) => {
        const actual =
          underTest.calculateProbabilitiesForTwoEvents(twoEventsUnionDto);

        expect(actual).toEqual(expected);
      },
    );

    describe('when result is greater than 1', () => {
      it('should return 1', () => {
        const actual = underTest.calculateProbabilitiesForTwoEvents({
          eventA: { probability: 0.75 },
          eventB: { probability: 0.6 },
          intersection: { probability: 0.15 },
        });

        expect(actual).toBe(1);
      });
    });

    describe('when result is less than 0', () => {
      it('should return 0', () => {
        const actual = underTest.calculateProbabilitiesForTwoEvents({
          eventA: { probability: 0.01 },
          eventB: { probability: 0.05 },
          intersection: { probability: 0.1 },
        });

        expect(actual).toBe(0);
      });
    });
  });

  describe('calculateUnionForThreeEvents', () => {
    it.each<ThreeProbabilitiesUnionDto & { expected: number }>([
      {
        eventA: { probability: 0.5 },
        eventB: { probability: 0.5 },
        eventC: { probability: 0.5 },
        intersectionAB: { probability: 0.25 },
        intersectionAC: { probability: 0.25 },
        intersectionBC: { probability: 0.25 },
        intersectionABC: { probability: 0.25 },
        expected: 1,
      },
      {
        eventA: { probability: 0.2 },
        eventB: { probability: 0.3 },
        eventC: { probability: 0.9 },
        intersectionAB: { probability: 0.1 },
        intersectionAC: { probability: 0.35 },
        intersectionBC: { probability: 0.65 },
        intersectionABC: { probability: 0.5 },
        expected: 0.8,
      },
    ])(
      'should return the correct result %j',
      ({ expected, ...threeEventsUnionDto }) => {
        const actual =
          underTest.calculateProbabilitiesForThreeEvents(threeEventsUnionDto);

        expect(actual).toEqual(expected);
      },
    );

    describe('when result is greater than 1', () => {
      it('should return 1', () => {
        const actual = underTest.calculateProbabilitiesForThreeEvents({
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
        const actual = underTest.calculateProbabilitiesForThreeEvents({
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
