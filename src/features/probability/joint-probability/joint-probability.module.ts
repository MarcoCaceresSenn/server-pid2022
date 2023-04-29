import { Module } from '@nestjs/common';
import { JointProbabilityService } from './joint-probability.service';

@Module({
  providers: [JointProbabilityService],
})
export class JointProbabilityModule {}
