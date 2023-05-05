import {
  ProbabilisticEventDto,
  ProbabilisticEventNonZeroDto,
} from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class TwoEventsConditionalProbabilityRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEventNonZeroDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAB: ProbabilisticEventDto;
}
