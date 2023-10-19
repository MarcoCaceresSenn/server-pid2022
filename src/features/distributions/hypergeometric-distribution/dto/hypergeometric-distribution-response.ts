import { ApiProperty } from '@nestjs/swagger';

export class HypergeometricDistributionResponseDto {
  @ApiProperty()
  probability: number;
}
