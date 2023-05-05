import { Module } from '@nestjs/common';
import { ConditionalProbabilityService } from './conditional-probability.service';
import { ConditionalProbabilityController } from './conditional-probability.controller';

@Module({
  providers: [ConditionalProbabilityService],
  exports: [ConditionalProbabilityService],
  controllers: [ConditionalProbabilityController],
})
export class ConditionalProbabilityModule {}
