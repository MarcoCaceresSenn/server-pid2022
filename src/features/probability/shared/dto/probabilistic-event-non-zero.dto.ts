import { IsNotEmpty, IsNumber, Max, IsPositive } from 'class-validator';
import { ProbabilisticEventDto } from './probabilistic-event.dto';

export class ProbabilisticEventNonZeroDto extends ProbabilisticEventDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Max(1)
  override probability: number;
}
