import { Body, Controller, Post } from '@nestjs/common';
import { ConditionalProbabilityService } from './conditional-probability.service';
import { TwoEventsConditionalProbabilityDto } from './model';

@Controller({
  path: 'probability/conditional',
  version: '1',
})
export class ConditionalProbabilityController {
  constructor(
    private readonly conditionalProbabilityService: ConditionalProbabilityService,
  ) {}

  @Post('two-events')
  calculateConditionalProbabilityForTwoEvents(
    @Body()
    twoEventsConditionalProbabilityDto: TwoEventsConditionalProbabilityDto,
  ) {
    return this.conditionalProbabilityService.calculateConditionalProbabilityForTwoEvents(
      twoEventsConditionalProbabilityDto,
    );
  }
}
