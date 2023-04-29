import { Body, Controller, Post } from '@nestjs/common';
import { JointProbabilityService } from './joint-probability.service';
import { ThreeEventsUnionDto, TwoEventsUnionDto } from './model';

@Controller({
  path: 'probability/joint',
  version: '1',
})
export class JointProbabilityController {
  constructor(
    private readonly jointProbabilityService: JointProbabilityService,
  ) {}

  @Post('two-events-union')
  calculateUnionForTwoEvents(@Body() twoEventsUnionDto: TwoEventsUnionDto) {
    return this.jointProbabilityService.calculateUnionForTwoEvents(
      twoEventsUnionDto,
    );
  }

  @Post('three-events-union')
  calculateUnionForThreeEvents(
    @Body() threeEventsUnionDto: ThreeEventsUnionDto,
  ) {
    return this.jointProbabilityService.calculateUnionForThreeEvents(
      threeEventsUnionDto,
    );
  }
}
