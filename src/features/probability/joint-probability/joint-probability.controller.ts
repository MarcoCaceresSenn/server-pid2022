import { Body, Controller, Post } from '@nestjs/common';
import { JointProbabilityService } from './joint-probability.service';
import { ThreeProbabilitiesUnionDto, TwoEventsProbabilitiesDto } from './model';

@Controller({
  path: 'probability/joint',
  version: '1',
})
export class JointProbabilityController {
  constructor(
    private readonly jointProbabilityService: JointProbabilityService,
  ) {}

  @Post('two-events')
  calculateProbabilitiesForTwoEvents(
    @Body() twoEventsProbabilitiesDto: TwoEventsProbabilitiesDto,
  ) {
    return this.jointProbabilityService.calculateProbabilitiesForTwoEvents(
      twoEventsProbabilitiesDto,
    );
  }

  @Post('three-events')
  calculateProbabilitiesForThreeEvents(
    @Body() threeEventsProbabilitiesDto: ThreeProbabilitiesUnionDto,
  ) {
    return this.jointProbabilityService.calculateProbabilitiesForThreeEvents(
      threeEventsProbabilitiesDto,
    );
  }
}
