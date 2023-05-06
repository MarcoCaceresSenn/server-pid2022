import { ProbabilisticEventDto } from '@features/probability/shared';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';

export class IndependentEventsConditionalProbabilityRequestDto {
  @ValidateNested({ each: true })
  @Type(() => ProbabilisticEventDto)
  @IsArray()
  events: ProbabilisticEventDto[];
}
