import { Body, Controller, Post } from '@nestjs/common';
import { ConditionalProbabilityService } from './conditional-probability.service';
import {
  IndependentEventsConditionalProbabilityRequestDto,
  TwoEventsConditionalProbabilityRequestDto,
} from './dto';

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

  @Post('independent-events')
  calculateConditionalProbabilityForIndependentEvents(
    @Body()
    independentEventsConditionalProbabilityRequestDto: IndependentEventsConditionalProbabilityRequestDto,
  ) {
    return this.conditionalProbabilityService.calculateConditionalProbabilityForIndependentEvents(
      independentEventsConditionalProbabilityRequestDto,
    );
  }
}
