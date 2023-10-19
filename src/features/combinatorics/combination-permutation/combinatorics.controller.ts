import { Body, Controller, Post } from '@nestjs/common';
import { CombinatoricsService } from './combinatorics.service';
import { CombinatoricsRequestDto, CombinatoricsResponseDto } from './dto';

@Controller({
  path: 'combinatorics',
  version: '1',
})
export class CombinatoricsController {
  constructor(private readonly combinatoricsService: CombinatoricsService) {}

  @Post('calculate')
  calculateCombinatorics(
    @Body() combinatoricsRequestDto: CombinatoricsRequestDto,
  ): CombinatoricsResponseDto {
    return this.combinatoricsService.calculateCombinatorics(
      combinatoricsRequestDto,
    );
  }
}
