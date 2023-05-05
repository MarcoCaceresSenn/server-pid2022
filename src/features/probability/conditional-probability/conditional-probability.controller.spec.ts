import { TestBed } from '@automock/jest';
import { ConditionalProbabilityController } from './conditional-probability.controller';
import { ConditionalProbabilityService } from './conditional-probability.service';

describe('ConditionalProbabilityController', () => {
  let underTest: ConditionalProbabilityController;
  let conditionalProbabilityService: ConditionalProbabilityService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(
      ConditionalProbabilityController,
    ).compile();

    underTest = unit;
    conditionalProbabilityService = unitRef.get(ConditionalProbabilityService);
  });

  describe('calculateConditionalProbabilityForTwoEvents', () => {
    it('should call the ConditionalProbabilityService with the correct arguments', () => {
      const expected = { foo: 'bar' };

      const conditionalProbabilityServiceSpy = jest.spyOn(
        conditionalProbabilityService,
        'calculateConditionalProbabilityForTwoEvents',
      );

      underTest.calculateConditionalProbabilityForTwoEvents(expected as any);

      expect(conditionalProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = 1234;

      jest
        .spyOn(
          conditionalProbabilityService,
          'calculateConditionalProbabilityForTwoEvents',
        )
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateConditionalProbabilityForTwoEvents(
        {} as any,
      );

      expect(actual).toEqual(expected);
    });
  });

  describe('calculateConditionalProbabilityForIndependentEvents', () => {
    it('should call the ConditionalProbabilityService with the correct arguments', () => {
      const expected = { foo: 'bar' };

      const conditionalProbabilityServiceSpy = jest.spyOn(
        conditionalProbabilityService,
        'calculateConditionalProbabilityForIndependentEvents',
      );

      underTest.calculateConditionalProbabilityForIndependentEvents(
        expected as any,
      );

      expect(conditionalProbabilityServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the result', () => {
      const expected = 1234;

      jest
        .spyOn(
          conditionalProbabilityService,
          'calculateConditionalProbabilityForIndependentEvents',
        )
        .mockReturnValueOnce(expected as any);

      const actual =
        underTest.calculateConditionalProbabilityForIndependentEvents(
          {} as any,
        );

      expect(actual).toEqual(expected);
    });
  });
});
