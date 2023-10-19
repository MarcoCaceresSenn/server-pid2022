import { CombinatoricsController } from './combinatorics.controller';
import { CombinatoricsService } from './combinatorics.service';
import { TestBed } from '@automock/jest';
import { CombinatoricsRequestDto, CombinatoricsResponseDto } from './dto';
import Big from 'big.js';

describe('CombinatoricsController', () => {
  let underTest: CombinatoricsController;
  let combinatoricsService: CombinatoricsService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(CombinatoricsController).compile();
    underTest = unit;
    combinatoricsService = unitRef.get(CombinatoricsService);
  });

  describe('calculateCombinatorics', () => {
    it('should call the CombinatoricsService with the correct parameters', () => {
      const requestDto: CombinatoricsRequestDto = {
        totalElements: 8,
        selectedElements: 3,
      };

      const combinatoricsServiceSpy = jest.spyOn(
        combinatoricsService,
        'calculateCombinatorics',
      );

      underTest.calculateCombinatorics(requestDto);

      expect(combinatoricsServiceSpy).toHaveBeenCalledWith(requestDto);
    });

    it('should return the correct result', () => {
      const requestDto: CombinatoricsRequestDto = {
        totalElements: 8,
        selectedElements: 3,
      };

      const expectedResponse: CombinatoricsResponseDto = {
        combinations: new Big('56'),
        permutations: new Big('336'),
      };

      jest
        .spyOn(combinatoricsService, 'calculateCombinatorics')
        .mockReturnValueOnce(expectedResponse);

      const actualResponse = underTest.calculateCombinatorics(requestDto);

      expect(actualResponse).toEqual(expectedResponse);
    });

    it('should handle errors from the CombinatoricsService', () => {
      const requestDto: CombinatoricsRequestDto = {
        totalElements: 3,
        selectedElements: 4, // Invalid: selectedElements > totalElements
      };

      const errorResponse = new Error(
        'Selected elements cannot be greater than total elements',
      );

      jest
        .spyOn(combinatoricsService, 'calculateCombinatorics')
        .mockImplementation(() => {
          throw errorResponse;
        });

      expect(() => underTest.calculateCombinatorics(requestDto)).toThrow(
        errorResponse,
      );
    });
  });
});
