import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ProbabilisticIntersection {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
