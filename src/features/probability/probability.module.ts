import { Module } from '@nestjs/common';
import { ConditionalProbabilityModule } from './conditional-probability';
import { JointProbabilityModule } from './joint-probability';
import { BayesTheoremModule } from './bayes-theorem';
import { TotalProbabilityModule } from './total-probability';

@Module({
  imports: [
    JointProbabilityModule,
    ConditionalProbabilityModule,
    BayesTheoremModule,
    TotalProbabilityModule,
  ],
  exports: [
    JointProbabilityModule,
    ConditionalProbabilityModule,
    BayesTheoremModule,
    TotalProbabilityModule,
  ],
})
export class ProbabilityModule {}
