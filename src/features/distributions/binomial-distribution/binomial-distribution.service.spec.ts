import { BinomialDistributionService } from './binomial-distribution.service';

describe('BinomialDistributionService', () => {
  let service: BinomialDistributionService;

  beforeEach(() => {
    service = new BinomialDistributionService();
  });

  describe('calculateProbability', () => {
    it('should calculate the binomial probability correctly', () => {
      const numTrials = 5;
      const probTrialSuccess = 0.5;
      const probSuccess = 3;

      const result = service.calculateProbability(
        numTrials,
        probTrialSuccess,
        probSuccess,
      );
      const expected = 0.3125; // Valor esperado basado en la fórmula binomial

      expect(result).toBeCloseTo(expected, 4); // Asegura que el resultado esté cerca del valor esperado con 4 decimales de precisión.
    });
  });
});
