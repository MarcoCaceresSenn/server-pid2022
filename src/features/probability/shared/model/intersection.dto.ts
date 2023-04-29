import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class Intersection {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
