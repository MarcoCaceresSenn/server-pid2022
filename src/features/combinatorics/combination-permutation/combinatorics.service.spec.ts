import { CombinatoricsService } from './combinatorics.service';
import { TestBed } from '@automock/jest';
import { CombinatoricsRequestDto, CombinatoricsResponseDto } from './dto';
import Big from 'big.js';

describe('CombinatoricsService', () => {
  let underTest: CombinatoricsService;

  beforeEach(() => {
    const { unit } = TestBed.create(CombinatoricsService).compile();
    underTest = unit;
  });

  describe('calculateCombinatorics', () => {
    it.each<{
      input: CombinatoricsRequestDto;
      expected: CombinatoricsResponseDto;
    }>([
      {
        input: {
          totalElements: 8,
          selectedElements: 3,
        },
        expected: {
          combinations: new Big('56'),
          permutations: new Big('336'),
        },
      },
    ])('should return the correct result %j', ({ expected, input }) => {
      const actual = underTest.calculateCombinatorics(input);
      expect(actual).toEqual(expected);
    });

    it('should throw an error if selectedElements > totalElements', () => {
      const invalidInput: CombinatoricsRequestDto = {
        totalElements: 3,
        selectedElements: 4,
      };

      expect(() =>
        underTest.calculateCombinatorics(invalidInput),
      ).toThrowErrorMatchingInlineSnapshot(
        `"Selected elements cannot be greater than total elements"`,
      );
    });
  });
});
