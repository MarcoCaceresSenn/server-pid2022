import { ProbabilisticIntersectionDto } from '@features/probability/shared';
import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmptyObject, IsArray } from 'class-validator';

export class BayesTheoremRequestDto {
  @ValidateNested()
  @IsNotEmptyObject()
  deciredIntersection: ProbabilisticIntersectionDto;

  @ValidateNested({ each: true })
  @Type(() => ProbabilisticIntersectionDto)
  @IsArray()
  extraIntesections: ProbabilisticIntersectionDto[];
}
