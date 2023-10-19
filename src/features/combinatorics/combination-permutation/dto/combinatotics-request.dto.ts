import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CombinatoricsRequestDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  totalElements: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  selectedElements: number;
}
