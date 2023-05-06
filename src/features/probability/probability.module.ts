import { Module } from '@nestjs/common';
import { ConditionalProbabilityModule } from './conditional-probability';
import { JointProbabilityModule } from './joint-probability';
import { BayesTheoremModule } from './bayes-theorem';

@Module({
  imports: [
    JointProbabilityModule,
    ConditionalProbabilityModule,
    BayesTheoremModule,
  ],
  exports: [
    JointProbabilityModule,
    ConditionalProbabilityModule,
    BayesTheoremModule,
  ],
})
export class ProbabilityModule {}
