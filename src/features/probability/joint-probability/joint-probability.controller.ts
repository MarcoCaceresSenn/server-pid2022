import { Body, Controller, Post } from '@nestjs/common';
import { JointProbabilityService } from './joint-probability.service';
import {
  ThreeEventsJointProbabilityUnionDto,
  TwoEventsJointProbabilityDto,
} from './model';

@Controller({
  path: 'probability/joint',
  version: '1',
})
export class JointProbabilityController {
  constructor(
    private readonly jointProbabilityService: JointProbabilityService,
  ) {}

  @Post('two-events')
  calculateJointProbabilityForTwoEvents(
    @Body() twoEventsJointProbabilityDto: TwoEventsJointProbabilityDto,
  ) {
    return this.jointProbabilityService.calculateJointProbabilityForTwoEvents(
      twoEventsJointProbabilityDto,
    );
  }

  @Post('three-events')
  calculateJointProbabilityForThreeEvents(
    @Body() threeEventsJointProbabilityDto: ThreeEventsJointProbabilityUnionDto,
  ) {
    return this.jointProbabilityService.calculateJointProbabilityForThreeEvents(
      threeEventsJointProbabilityDto,
    );
  }
}
