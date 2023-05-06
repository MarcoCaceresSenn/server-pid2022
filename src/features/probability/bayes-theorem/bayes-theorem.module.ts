import { Module } from '@nestjs/common';
import { BayesTheoremService } from './bayes-theorem.service';
import { BayesTheoremController } from './bayes-theorem.controller';
import { TotalProbabilityModule } from '../total-probability';

@Module({
  imports: [TotalProbabilityModule],
  providers: [BayesTheoremService],
  exports: [BayesTheoremService],
  controllers: [BayesTheoremController],
})
export class BayesTheoremModule {}
