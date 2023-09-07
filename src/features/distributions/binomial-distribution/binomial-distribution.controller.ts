import { Body, Controller, Post } from '@nestjs/common';
import { BinomialDistributionService } from './binomial-distribution.service';
import { BinomialDistributionRequestDto } from './dto/binomial-distribution-request.dto';
import { BinomialDistributionResponseDto } from './dto/binomial-distribution-response.dto';

@Controller({
  path: 'binomial-distribution',
  version: '1',
})
export class BinomialDistributionController {
  constructor(private readonly service: BinomialDistributionService) {}

  @Post('calculate')
  calculateProbability(
    @Body() dto: BinomialDistributionRequestDto,
  ): BinomialDistributionResponseDto {
    const probability = this.service.calculateProbability(
      dto.numTrials,
      dto.probTrialSuccess,
      dto.probSuccess,
    );
    return { probability };
  }
}
