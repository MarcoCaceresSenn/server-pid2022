import { Injectable } from '@nestjs/common';
import { Big } from 'big.js';
import { ProbabilityUtils } from '../shared';
import {
  ThreeEventsJointProbabilityUnionDto,
  TwoEventsJointProbabilityDto,
} from './model';

// TODO: Check what happens when probability is more than 1 or less than 0
@Injectable()
export class JointProbabilityService {
  calculateProbabilitiesForTwoEvents({
    eventA,
    eventB,
    intersection,
  }: TwoEventsJointProbabilityDto) {
    // P(AUB) = P(A) + P(B) - P(A∩B)
    const probabilityOfAUnionB = new Big(eventA.probability)
      .plus(eventB.probability)
      .minus(intersection.probability);

    // P(A'∩B) = P(AUB) - P(B)
    const probabilityOfAComplementIntersectionB = probabilityOfAUnionB.minus(
      eventB.probability,
    );

    // P(A∩B') = P(AUB) - P(A)
    const probabilityOfAIntersectionBComplement = probabilityOfAUnionB.minus(
      eventA.probability,
    );

    // P(A'∩B) + P(A∩B')
    const probabilityOfComplementsIntersectionSum =
      probabilityOfAComplementIntersectionB.plus(
        probabilityOfAIntersectionBComplement,
      );

    return {
      probabilityOfAUnionB: ProbabilityUtils.normalize(
        probabilityOfAUnionB.toNumber(),
      ),
      probabilityOfAComplementIntersectionB: ProbabilityUtils.normalize(
        probabilityOfAComplementIntersectionB.toNumber(),
      ),
      probabilityOfAIntersectionBComplement: ProbabilityUtils.normalize(
        probabilityOfAIntersectionBComplement.toNumber(),
      ),
      probabilityOfComplementsSum: ProbabilityUtils.normalize(
        probabilityOfComplementsIntersectionSum.toNumber(),
      ),
    };
  }

  // TODO: Add same information as `calculateProbabilitiesForTwoEvents` for each intersection
  calculateProbabilitiesForThreeEvents({
    eventA,
    eventB,
    eventC,
    intersectionAB,
    intersectionAC,
    intersectionBC,
    intersectionABC,
  }: ThreeEventsJointProbabilityUnionDto) {
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

    const normalizedProbability = ProbabilityUtils.normalize(
      probability.toNumber(),
    );

    return normalizedProbability;
  }
}
