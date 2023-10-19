import { ApiProperty } from '@nestjs/swagger';

export class BinomialDistributionRequestDto {
  @ApiProperty()
  numTrials: number;
  @ApiProperty()
  probTrialSuccess: number;
  @ApiProperty()
  probSuccess: number;
}
