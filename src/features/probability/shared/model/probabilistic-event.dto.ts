import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ProbalisticEvent {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
