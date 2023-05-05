import { IsNotEmpty, IsNumber, Max, IsPositive } from 'class-validator';
import { ProbabilityDto } from './probability.dto';

export class ProbabilityNonZeroDto extends ProbabilityDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Max(1)
  override probability: number;
}
