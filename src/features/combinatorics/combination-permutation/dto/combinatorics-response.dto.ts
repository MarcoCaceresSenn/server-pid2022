import Big from 'big.js';

export class CombinatoricsResponseDto {
  combinations: Big;
  permutations: Big;
  // Add any other response properties you need here

  constructor(combinations: Big, permutations: Big) {
    this.combinations = combinations;
    this.permutations = permutations;
  }
}
