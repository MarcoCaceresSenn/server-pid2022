import { ApiProperty } from '@nestjs/swagger';

export class HypergeometricDistributionRequestDto {
  @ApiProperty()
  N: number;
  @ApiProperty()
  K: number;
  @ApiProperty()
  n: number;
  @ApiProperty()
  k: number;
}
