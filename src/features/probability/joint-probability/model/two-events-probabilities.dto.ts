import { ProbabilisticEvent, Intersection } from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class TwoEventsProbabilitiesDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventA: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  intersection: Intersection;
}
