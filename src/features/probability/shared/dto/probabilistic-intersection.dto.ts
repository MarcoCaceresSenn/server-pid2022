import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ProbabilisticIntersectionDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
