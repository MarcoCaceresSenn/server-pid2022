import { ProbabilisticEventDto } from '@features/probability/shared';
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
  intersectionAB: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionAC: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionBC: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  intersectionABC: ProbabilisticEventDto;
}
