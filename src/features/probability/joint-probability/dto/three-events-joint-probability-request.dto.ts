import {
  ProbabilisticEventDto,
  ProbabilisticIntersectionDto,
} from '@features/probability/shared';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';

export class ThreeEventsJointProbabilityUnionRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  eventA: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  eventB: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  eventC: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAB: ProbabilisticIntersectionDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAC: ProbabilisticIntersectionDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionBC: ProbabilisticIntersectionDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionABC: ProbabilisticIntersectionDto;
}
