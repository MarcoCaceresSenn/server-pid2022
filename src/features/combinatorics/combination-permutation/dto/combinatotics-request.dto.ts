import { IsInt, Min } from 'class-validator';

export class CombinatoricsRequestDto {
  @IsInt()
  @Min(1)
  totalElements: number;

  @IsInt()
  @Min(1)
  selectedElements: number;
}
