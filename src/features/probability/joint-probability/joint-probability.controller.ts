import { Body, Controller, Post } from '@nestjs/common';
import {
  ThreeEventsJointProbabilityUnionRequestDto,
  TwoEventsJointProbabilityRequestDto,
} from './dto';
import { JointProbabilityService } from './joint-probability.service';

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
    @Body()
    twoEventsJointProbabilityRequestDto: TwoEventsJointProbabilityRequestDto,
  ) {
    return this.jointProbabilityService.calculateJointProbabilityForTwoEvents(
      twoEventsJointProbabilityRequestDto,
    );
  }

  @Post('three-events')
  calculateJointProbabilityForThreeEvents(
    @Body()
    threeEventsJointProbabilityRequestDto: ThreeEventsJointProbabilityUnionRequestDto,
  ) {
    return this.jointProbabilityService.calculateJointProbabilityForThreeEvents(
      threeEventsJointProbabilityRequestDto,
    );
  }
}
