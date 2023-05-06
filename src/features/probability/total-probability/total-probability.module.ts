import { Module } from '@nestjs/common';
import { TotalProbabilityService } from './total-probability.service';
import { TotalProbabilityController } from './total-probability.controller';

@Module({
  providers: [TotalProbabilityService],
  exports: [TotalProbabilityService],
  controllers: [TotalProbabilityController],
})
export class TotalProbabilityModule {}
