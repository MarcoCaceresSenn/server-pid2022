import { Controller, Post, Body } from '@nestjs/common';
import { HypergeometricDistributionService } from './hypergeometric-distribution.service';
import { HypergeometricDistributionRequestDto } from './dto/hypergeometric-distribution-request';
import { HypergeometricDistributionResponseDto } from './dto/hypergeometric-distribution-response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hypergeometric Distribution')
@Controller({
  path: 'hypergeometric-distribution',
  version: '1',
})
export class HypergeometricDistributionController {
  constructor(private readonly service: HypergeometricDistributionService) {}

  @Post('calculate/hypergeometric')
  calculateProbability(
    @Body() dto: HypergeometricDistributionRequestDto,
  ): HypergeometricDistributionResponseDto {
    return this.service.calculateProbability(dto.N, dto.K, dto.n, dto.k);
  }
}
