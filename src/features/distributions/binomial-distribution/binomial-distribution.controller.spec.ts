import { BinomialDistributionController } from './binomial-distribution.controller';
import { BinomialDistributionService } from './binomial-distribution.service';
import { TestBed } from '@automock/jest';

describe('BinomialDistributionController', () => {
  let underTest: BinomialDistributionController;
  let binomialDistributionService: BinomialDistributionService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(
      BinomialDistributionController,
    ).compile();

    underTest = unit;
    binomialDistributionService = unitRef.get(BinomialDistributionService);
  });

  describe('calculateProbability', () => {
    it('should call the BinomialDistributionService with the correct parameters', () => {
      const expectedInput = {
        numTrials: 5,
        probTrialSuccess: 0.5,
        probSuccess: 3,
      };

      const binomialDistributionServiceSpy = jest.spyOn(
        binomialDistributionService,
        'calculateProbability',
      );

      underTest.calculateProbability(expectedInput);

      expect(binomialDistributionServiceSpy).toHaveBeenCalledWith(
        expectedInput,
      );
    });

    it('should return the correct result', () => {
      const input = {
        numTrials: 5,
        probTrialSuccess: 0.5,
        probSuccess: 3,
      };
      const expectedOutput = 0.3125;

      jest
        .spyOn(binomialDistributionService, 'calculateProbability')
        .mockReturnValueOnce(expectedOutput);

      const actual = underTest.calculateProbability(input);

      expect(actual).toEqual(expectedOutput);
    });
  });
});
