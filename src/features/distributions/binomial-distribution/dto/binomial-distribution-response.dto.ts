import { ApiProperty } from '@nestjs/swagger';
export class BinomialDistributionResponseDto {
  @ApiProperty()
  probability: number;
}
