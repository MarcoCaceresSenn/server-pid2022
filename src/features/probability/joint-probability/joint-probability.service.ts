import { Injectable } from '@nestjs/common';
import { TwoEventsUnionDto } from './model';
import { Big } from 'big.js';

@Injectable()
export class JointProbabilityService {
  calculateUnionForTwoEvents({
    eventA,
    eventB,
    intersection,
  }: TwoEventsUnionDto) {
    return new Big(eventA.probability)
      .plus(eventB.probability)
      .minus(intersection.probability)
      .toNumber();
  }
}
