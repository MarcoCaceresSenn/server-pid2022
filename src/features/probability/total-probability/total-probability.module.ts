import { Module } from '@nestjs/common';
import { TotalProbabilityService } from './total-probability.service';

@Module({
  providers: [TotalProbabilityService],
  exports: [TotalProbabilityService],
})
export class TotalProbabilityModule {}
