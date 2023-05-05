import {
  ProbabilisticEventDto,
  ProbabilisticIntersectionDto,
} from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class TwoEventsJointProbabilityRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventA: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAB: ProbabilisticIntersectionDto;
}
