import Big from 'big.js';
import { ApiProperty } from '@nestjs/swagger';

export class CombinatoricsResponseDto {
  @ApiProperty()
  combinations: Big;
  @ApiProperty()
  permutations: Big;
  // Add any other response properties you need here

  constructor(combinations: Big, permutations: Big) {
    this.combinations = combinations;
    this.permutations = permutations;
  }
}
