import { TestBed } from '@automock/jest';
import { JointProbabilityController } from './joint-probability.controller';
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

  describe('calculateJointProbabilityForTwoEvents', () => {
    it('should call the JointProbabilityService with the correct arguments', () => {
      const expected = { foo: 'bar' };

      const jointProbabilityServiceSpy = jest.spyOn(
        jointProbabilityService,
        'calculateJointProbabilityForTwoEvents',
      );

      underTest.calculateJointProbabilityForTwoEvents(expected as any);

      expect(jointProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = 1234;

      jest
        .spyOn(jointProbabilityService, 'calculateJointProbabilityForTwoEvents')
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateJointProbabilityForTwoEvents({} as any);

      expect(actual).toEqual(expected);
    });
  });

  describe('calculateJointProbabilityForThreeEvents', () => {
    it('should call the JointProbabilityService with the correct arguments', () => {
      const expected = { foo: 'bar' };

      const jointProbabilityServiceSpy = jest.spyOn(
        jointProbabilityService,
        'calculateJointProbabilityForThreeEvents',
      );

      underTest.calculateJointProbabilityForThreeEvents(expected as any);

      expect(jointProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = 1234;

      jest
        .spyOn(
          jointProbabilityService,
          'calculateJointProbabilityForThreeEvents',
        )
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateJointProbabilityForThreeEvents(
        {} as any,
      );

      expect(actual).toEqual(expected);
    });
  });
});
