import { ProbabilisticEventDto } from '@features/probability/shared';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class IndependentEventsConditionalProbabilityRequestDto {
  @ValidateNested({ each: true })
  @Type(() => ProbabilisticEventDto)
  events: ProbabilisticEventDto[];
}
