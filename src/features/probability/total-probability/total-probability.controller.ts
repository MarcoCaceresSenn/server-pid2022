import { Body, Controller, Post } from '@nestjs/common';
import { TotalProbabilityService } from './total-probability.service';
import { TotalProbabilityRequestDto } from './dto';

@Controller({
  path: 'probability/total-probability',
  version: '1',
})
export class TotalProbabilityController {
  constructor(
    private readonly totalProbabilityService: TotalProbabilityService,
  ) {}

  @Post('calculate')
  calculateTotalProbability(
    @Body() totalProbabilityRequestDto: TotalProbabilityRequestDto,
  ) {
    return this.totalProbabilityService.calculateTotalProbability(
      totalProbabilityRequestDto,
    );
  }
}
