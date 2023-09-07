import { IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ValueProbabilityDto } from './valueProbability.dto';

export class VariableDto {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ValueProbabilityDto)
  values: ValueProbabilityDto[];
}
