import { Module } from '@nestjs/common';
import { JointProbabilityService } from './joint-probability.service';
import { JointProbabilityController } from './joint-probability.controller';

@Module({
  providers: [JointProbabilityService],
  exports: [JointProbabilityService],
  controllers: [JointProbabilityController],
})
export class JointProbabilityModule {}
