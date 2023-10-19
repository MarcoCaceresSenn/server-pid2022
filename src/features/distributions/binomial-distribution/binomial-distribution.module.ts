import { Module } from '@nestjs/common';
import { BinomialDistributionService } from './binomial-distribution.service';
import { BinomialDistributionController } from './binomial-distribution.controller';

@Module({
  controllers: [BinomialDistributionController],
  providers: [BinomialDistributionService],
})
export class BinomialDistributionModule {}
