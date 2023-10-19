import { TestBed } from '@automock/jest';
import { HypergeometricDistributionController } from './hypergeometric-distribution.controller';
import { HypergeometricDistributionService } from './hypergeometric-distribution.service';
import { HypergeometricDistributionResponseDto } from './dto/hypergeometric-distribution-response';
import { HypergeometricDistributionRequestDto } from './dto/hypergeometric-distribution-request';

describe('HypergeometricDistributionController', () => {
  let underTest: HypergeometricDistributionController;
  let hypergeometricDistributionService: HypergeometricDistributionService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(
      HypergeometricDistributionController,
    ).compile();

    underTest = unit;
    hypergeometricDistributionService = unitRef.get(
      HypergeometricDistributionService,
    );
  });

  describe('calculateProbability', () => {
    it('should call the HypergeometricDistributionService with the correct parameters', () => {
      const expectedInput = {
        N: 100,
        K: 50,
        n: 10,
        k: 5,
      };
      const serviceSpy = jest.spyOn(
        hypergeometricDistributionService,
        'calculateProbability',
      );

      underTest.calculateProbability(
        expectedInput as HypergeometricDistributionRequestDto,
      );

      expect(serviceSpy).toHaveBeenCalledWith(
        expectedInput.N,
        expectedInput.K,
        expectedInput.n,
        expectedInput.k,
      );
    });

    it('should return the correct result', () => {
      const expectedOutput: HypergeometricDistributionResponseDto = {
        probability: 0.246, // Este es un valor aproximado, necesitas calcular el valor real
      };

      jest
        .spyOn(hypergeometricDistributionService, 'calculateProbability')
        .mockReturnValueOnce(expectedOutput);

      const actual = underTest.calculateProbability({} as any);

      expect(actual).toEqual(expectedOutput);
    });
  });
});
