import { Module } from '@nestjs/common';
import { BinomialDistributionModule } from './binomial-distribution';
import { HypergeometricDistributionModule } from './hypergeometric-distribution';

@Module({
  imports: [BinomialDistributionModule, HypergeometricDistributionModule],
  exports: [BinomialDistributionModule, HypergeometricDistributionModule],
})
export class DistributionModule {}
