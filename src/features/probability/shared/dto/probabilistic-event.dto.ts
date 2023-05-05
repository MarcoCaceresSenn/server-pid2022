import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ProbabilisticEventDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
