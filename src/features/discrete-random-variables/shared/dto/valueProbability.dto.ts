import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class ValueProbabilityDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;
}
