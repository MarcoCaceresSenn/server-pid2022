import { Module } from '@nestjs/common';
import { BayesTheoremService } from './bayes-theorem.service';
import { BayesTheoremController } from './bayes-theorem.controller';

@Module({
  providers: [BayesTheoremService],
  exports: [BayesTheoremService],
  controllers: [BayesTheoremController],
})
export class BayesTheoremModule {}
