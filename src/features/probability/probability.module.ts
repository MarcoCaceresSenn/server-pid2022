import { Module } from '@nestjs/common';
import { JointProbabilityModule } from './joint-probability';

@Module({
  imports: [JointProbabilityModule],
  exports: [JointProbabilityModule],
})
export class ProbabilityModule {}
