import { ProbalisticEvent, Intersection } from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class TwoEventsProbabilitiesDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventA: ProbalisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbalisticEvent;

  @ValidateNested()
  @IsNotEmptyObject()
  intersection: Intersection;
}
