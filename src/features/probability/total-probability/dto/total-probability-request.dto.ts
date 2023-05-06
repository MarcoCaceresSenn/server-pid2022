import { ProbabilisticIntersectionDto } from '@features/probability/shared';
import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from 'class-validator';

export class TotalProbabilityRequestDto {
  @ValidateNested({ each: true })
  @Type(() => ProbabilisticIntersectionDto)
  @IsArray()
  intersections: ProbabilisticIntersectionDto[];
}
