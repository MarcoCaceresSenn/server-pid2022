import { Injectable } from '@nestjs/common';
import { ThreeEventsUnionDto, TwoEventsUnionDto } from './model';
import { Big } from 'big.js';

@Injectable()
export class JointProbabilityService {
  calculateUnionForTwoEvents({
    eventA,
    eventB,
    intersection,
  }: TwoEventsUnionDto) {
    const probability = new Big(eventA.probability)
      .plus(eventB.probability)
      .minus(intersection.probability)
      .toNumber();

    return this.normalizeProbability(probability);
  }

  calculateUnionForThreeEvents({
    eventA,
    eventB,
    eventC,
    intersectionAB,
    intersectionAC,
    intersectionBC,
    intersectionABC,
  }: ThreeEventsUnionDto) {
    const sumOfInfividualIntersectionsProbabilities = new Big(
      intersectionAB.probability,
    )
      .plus(intersectionAC.probability)
      .plus(intersectionBC.probability);

    const probability = new Big(eventA.probability)
      .plus(eventB.probability)
      .plus(eventC.probability)
      .minus(sumOfInfividualIntersectionsProbabilities)
      .plus(intersectionABC.probability)
      .toNumber();

    return this.normalizeProbability(probability);
  }

  // TODO: Move to a shared module/service
  private normalizeProbability(probability: number) {
    if (probability > 1) return 1;
    if (probability < 0) return 0;

    return probability;
  }
}
