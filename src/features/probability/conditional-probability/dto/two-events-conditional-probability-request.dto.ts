import {
  ProbabilisticEvent,
  ProbabilisticIntersection,
} from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class TwoEventsConditionalProbabilityRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAB: ProbabilisticIntersection;
}
