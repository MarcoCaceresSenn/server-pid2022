import { Module } from '@nestjs/common';
import { ConditionalProbabilityModule } from './conditional-probability';
import { JointProbabilityModule } from './joint-probability';

@Module({
  imports: [JointProbabilityModule, ConditionalProbabilityModule],
  exports: [JointProbabilityModule, ConditionalProbabilityModule],
})
export class ProbabilityModule {}
