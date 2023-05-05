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

  describe('calculateProbabilitiesForTwoEvents', () => {
    it('should call the JointProbabilityService with the correct arguments', () => {
      const expected = { foo: 'bar' };

      const jointProbabilityServiceSpy = jest.spyOn(
        jointProbabilityService,
        'calculateProbabilitiesForTwoEvents',
      );

      underTest.calculateProbabilitiesForTwoEvents(expected as any);

      expect(jointProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = 1234;

      jest
        .spyOn(jointProbabilityService, 'calculateProbabilitiesForTwoEvents')
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateProbabilitiesForTwoEvents({} as any);

      expect(actual).toEqual(expected);
    });
  });

  describe('calculateProbabilitiesForThreeEvents', () => {
    it('should call the JointProbabilityService with the correct arguments', () => {
      const expected = { foo: 'bar' };

      const jointProbabilityServiceSpy = jest.spyOn(
        jointProbabilityService,
        'calculateProbabilitiesForThreeEvents',
      );

      underTest.calculateProbabilitiesForThreeEvents(expected as any);

      expect(jointProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = 1234;

      jest
        .spyOn(jointProbabilityService, 'calculateProbabilitiesForThreeEvents')
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateProbabilitiesForThreeEvents({} as any);

      expect(actual).toEqual(expected);
    });
  });
});
