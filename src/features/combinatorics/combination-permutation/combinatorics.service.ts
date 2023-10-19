import { BadRequestException, Injectable } from '@nestjs/common';
import { CombinatoricsRequestDto, CombinatoricsResponseDto } from './dto';
import Big from 'big.js';

@Injectable()
export class CombinatoricsService {
  calculateCombinatorics({
    totalElements,
    selectedElements,
  }: CombinatoricsRequestDto): CombinatoricsResponseDto {
    const totalElementsBig = new Big(totalElements);
    const selectedElementsBig = new Big(selectedElements);

    if (selectedElementsBig.gt(totalElementsBig)) {
      throw new BadRequestException(
        'Selected elements can be greater than total elements',
      );
    }
    const combinations = this.calculateCombinations(
      totalElementsBig,
      selectedElementsBig,
    );
    const permutations = this.calculatePermutations(
      totalElementsBig,
      selectedElementsBig,
    );

    return new CombinatoricsResponseDto(combinations, permutations);
  }

  private calculateCombinations(n: Big, k: Big): Big {
    if (k.lt(0) || k.gt(n)) {
      throw new BadRequestException('Invalid input: k must be between 0 and n');
    }

    let result = new Big(1);

    if (k.gt(n.minus(k))) {
      k = n.minus(k);
    }

    for (let i = new Big(0); i.lt(k); i = i.plus(1)) {
      result = result.times(n.minus(i)).div(i.plus(1));
    }

    return result;
  }

  private calculatePermutations(n: Big, k: Big): Big {
    if (k.lt(0) || k.gt(n)) {
      throw new BadRequestException('Invalid input: k must be between 0 and n');
    }

    let result = new Big(1);

    for (let i = new Big(0); i.lt(k); i = i.plus(1)) {
      result = result.times(n.minus(i));
    }

    return result;
  }
}
