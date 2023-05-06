import { Body, Controller, Post } from '@nestjs/common';
import { BayesTheoremService } from './bayes-theorem.service';
import { BayesTheoremRequestDto } from './dto';

@Controller({
  path: 'probability/bayes-theorem',
  version: '1',
})
export class BayesTheoremController {
  constructor(private readonly bayesTheoremService: BayesTheoremService) {}

  @Post('calculate')
  calculateBayesTheorem(
    @Body() bayesTheoremRequestDto: BayesTheoremRequestDto,
  ) {
    return this.bayesTheoremService.calculateBayesTheorem(
      bayesTheoremRequestDto,
    );
  }
}
