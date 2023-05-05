import {
  ProbabilisticEventDto,
  ProbabilisticIntersectionDto,
} from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class TwoEventsConditionalProbabilityRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAB: ProbabilisticIntersectionDto;
}
