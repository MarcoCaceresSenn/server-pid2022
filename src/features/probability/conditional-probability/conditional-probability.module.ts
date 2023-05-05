import { Module } from '@nestjs/common';
import { ConditionalProbabilityService } from './conditional-probability.service';

@Module({
  providers: [ConditionalProbabilityService],
  exports: [ConditionalProbabilityService],
})
export class ConditionalProbabilityModule {}
