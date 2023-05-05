import { ProbabilisticEventDto } from '@features/probability/shared';
import { ValidateNested } from 'class-validator';

export class IndependentEventsConditionalProbabilityRequestDto {
  @ValidateNested({ each: true })
  events: ProbabilisticEventDto[];
}
