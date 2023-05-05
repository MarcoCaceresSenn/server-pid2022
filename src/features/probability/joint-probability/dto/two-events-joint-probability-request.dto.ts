import {
  ProbabilisticEvent,
  ProbabilisticIntersection,
} from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class TwoEventsJointProbabilityRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventA: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAB: ProbabilisticIntersection;
}
