import { BayesTheoremController } from './bayes-theorem.controller';
import { BayesTheoremService } from './bayes-theorem.service';
import { TestBed } from '@automock/jest';

describe('BayesTheoremController', () => {
  let underTest: BayesTheoremController;
  let bayesTheoremService: BayesTheoremService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(BayesTheoremController).compile();

    underTest = unit;
    bayesTheoremService = unitRef.get(BayesTheoremService);
  });

  describe('calculateBayesTheorem', () => {
    it('should call the BayesTheoremService with the correct parameters', () => {
      const expected = { foo: 'bar' };

      const bayesTheoremServiceSpy = jest.spyOn(
        bayesTheoremService,
        'calculateBayesTheorem',
      );

      underTest.calculateBayesTheorem(expected as any);

      expect(bayesTheoremServiceSpy).toHaveBeenCalledWith(expected);
    });

    it('should return the correct result', () => {
      const expected = { foo: 'bar' };

      jest
        .spyOn(bayesTheoremService, 'calculateBayesTheorem')
        .mockReturnValueOnce(expected as any);

      const actual = underTest.calculateBayesTheorem({} as any);

      expect(actual).toEqual(expected);
    });
  });
});
