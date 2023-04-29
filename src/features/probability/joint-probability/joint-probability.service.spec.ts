import { TestBed } from '@automock/jest';
import { JointProbabilityService } from './joint-probability.service';
import { TwoEventsUnionDto } from './model';

describe('JointProbabilityService', () => {
  let underTest: JointProbabilityService;

  beforeEach(() => {
    const { unit } = TestBed.create(JointProbabilityService).compile();

    underTest = unit;
  });

  describe('calculateUnionForTwoEvents', () => {
    it.each<TwoEventsUnionDto & { expected: number }>([
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
      'should return the correct result %o',
      ({ expected, ...twoEventsUnionDto }) => {
        const actual = underTest.calculateUnionForTwoEvents(twoEventsUnionDto);

        expect(actual).toEqual(expected);
      },
    );
  });
});
