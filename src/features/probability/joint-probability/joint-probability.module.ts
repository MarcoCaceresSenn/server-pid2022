import { Module } from '@nestjs/common';
import { JointProbabilityController } from './joint-probability.controller';
import { JointProbabilityService } from './joint-probability.service';

@Module({
  providers: [JointProbabilityService],
  exports: [JointProbabilityService],
  controllers: [JointProbabilityController],
})
export class JointProbabilityModule {}
