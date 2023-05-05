import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class ProbabilityDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
