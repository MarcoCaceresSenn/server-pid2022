import { Module } from '@nestjs/common';
import { HypergeometricDistributionService } from './hypergeometric-distribution.service';
import { HypergeometricDistributionController } from './hypergeometric-distribution.controller';

@Module({
  controllers: [HypergeometricDistributionController],
  providers: [HypergeometricDistributionService],
})
export class HypergeometricDistributionModule {}
