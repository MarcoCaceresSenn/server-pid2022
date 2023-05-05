import {
  ProbabilisticEvent,
  ProbabilisticIntersection,
} from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class ThreeEventsJointProbabilityUnionRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventA: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  eventC: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAB: ProbabilisticIntersection;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAC: ProbabilisticIntersection;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionBC: ProbabilisticIntersection;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionABC: ProbabilisticIntersection;
}
