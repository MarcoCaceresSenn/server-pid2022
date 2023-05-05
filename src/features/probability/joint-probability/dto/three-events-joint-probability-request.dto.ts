import { ProbabilisticEvent, Intersection } from '@features/probability/shared';
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
  intersectionAB: Intersection;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAC: Intersection;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionBC: Intersection;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionABC: Intersection;
}
