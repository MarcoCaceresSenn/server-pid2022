import { TestBed } from '@automock/jest';
import { TotalProbabilityController } from './total-probability.controller';
import { TotalProbabilityService } from './total-probability.service';

describe('TotalProbabilityController', () => {
  let underTest: TotalProbabilityController;
  let totalProbabilityService: TotalProbabilityService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(
      TotalProbabilityController,
    ).compile();

    underTest = unit;
    totalProbabilityService = unitRef.get(TotalProbabilityService);
  });

  describe('calculateTotalProbability', () => {
    it('should call TotalProbabilityService with correct parameters', () => {
      const expected = { foo: 'bar' };

      const totalProbabilityServiceSpy = jest.spyOn(
        totalProbabilityService,
        'calculateTotalProbability',
      );

      underTest.calculateTotalProbability(expected as any);

      expect(totalProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = { foo: 'bar' };

      jest
        .spyOn(totalProbabilityService, 'calculateTotalProbability')
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateTotalProbability({} as any);

      expect(actual).toEqual(expected);
    });
  });
});
