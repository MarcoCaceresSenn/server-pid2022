import { Body, Controller, Post } from '@nestjs/common';
import { ConditionalProbabilityService } from './conditional-probability.service';
import { TwoEventsConditionalProbabilityRequestDto } from './dto';

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
    twoEventsConditionalProbabilityRequestDto: TwoEventsConditionalProbabilityRequestDto,
  ) {
    return this.conditionalProbabilityService.calculateConditionalProbabilityForTwoEvents(
      twoEventsConditionalProbabilityRequestDto,
    );
  }
}
