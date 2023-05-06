import { ValidateNested, IsNotEmptyObject } from 'class-validator';
import { ProbabilisticEventDto } from './probabilistic-event.dto';

export class ProbabilisticIntersectionDto {
  @ValidateNested()
  @IsNotEmptyObject()
  event: ProbabilisticEventDto;

  @ValidateNested()
  @IsNotEmptyObject()
  eventGivenB: ProbabilisticEventDto;
}
