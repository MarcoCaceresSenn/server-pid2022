import { Injectable } from '@nestjs/common';
import { ThreeProbabilitiesUnionDto, TwoEventsProbabilitesDto } from './model';
import { Big } from 'big.js';

// TODO: Return an object with information about
// P(AUB), P(A'∩B), P(A∩B'), and so on
@Injectable()
export class JointProbabilityService {
  calculateProbabilitiesForTwoEvents({
    eventA,
    eventB,
    intersection,
  }: TwoEventsProbabilitesDto) {
    const probability = new Big(eventA.probability)
      .plus(eventB.probability)
      .minus(intersection.probability);

    const normalizedProbability = this.normalizeProbability(
      probability.toNumber(),
    );

    return normalizedProbability;
  }

  calculateProbabilitiesForThreeEvents({
    eventA,
    eventB,
    eventC,
    intersectionAB,
    intersectionAC,
    intersectionBC,
    intersectionABC,
  }: ThreeProbabilitiesUnionDto) {
    const sumOfInfividualIntersectionsProbabilities = new Big(
      intersectionAB.probability,
    )
      .plus(intersectionAC.probability)
      .plus(intersectionBC.probability);

    const probability = new Big(eventA.probability)
      .plus(eventB.probability)
      .plus(eventC.probability)
      .minus(sumOfInfividualIntersectionsProbabilities)
      .plus(intersectionABC.probability);

    const normalizedProbability = this.normalizeProbability(
      probability.toNumber(),
    );

    return normalizedProbability;
  }

  // TODO: Move to a shared module/service
  private normalizeProbability(probability: number) {
    if (probability > 1) return 1;
    if (probability < 0) return 0;

    return probability;
  }
}
