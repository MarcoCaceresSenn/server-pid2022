import { Module } from '@nestjs/common';
import { BinomialDistributionModule } from './binomial-distribution';

@Module({
  imports: [BinomialDistributionModule],
  exports: [BinomialDistributionModule],
})
export class DistributionModule {}
