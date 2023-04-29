import { Module } from '@nestjs/common';
import { JointProbabilityModule } from './joint-probability';

@Module({
  imports: [JointProbabilityModule],
})
export class ProbabilityModule {}
