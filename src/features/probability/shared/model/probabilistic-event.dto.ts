import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ProbabilisticEvent {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
