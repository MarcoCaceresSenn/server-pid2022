import { JointProbabilityController } from './joint-probability.controller';
import { TestBed } from '@automock/jest';
import { JointProbabilityService } from './joint-probability.service';

describe('JointProbabilityController', () => {
  let underTest: JointProbabilityController;
  let jointProbabilityService: JointProbabilityService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(
      JointProbabilityController,
    ).compile();

    underTest = unit;
    jointProbabilityService = unitRef.get(JointProbabilityService);
  });

  describe('calculateUnionForTwoEvents', () => {
    it('should call the JointProbabilityService with the correct arguments', () => {
      const expected = { foo: 'bar' };

      const jointProbabilityServiceSpy = jest.spyOn(
        jointProbabilityService,
        'calculateUnionForTwoEvents',
      );

      underTest.calculateUnionForTwoEvents(expected as any);

      expect(jointProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = 1234;

      jest
        .spyOn(jointProbabilityService, 'calculateUnionForTwoEvents')
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateUnionForTwoEvents({} as any);

      expect(actual).toEqual(expected);
    });
  });
});
