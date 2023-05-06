import { Injectable } from '@nestjs/common';
import { Big } from 'big.js';
import { ProbabilityUtils } from '../shared';
import {
  ThreeEventsJointProbabilityUnionRequestDto,
  TwoEventsJointProbabilityRequestDto,
  TwoEventsJointProbabilityResponseDto,
} from './dto';

// TODO: Check what happens when probability is more than 1 or less than 0
@Injectable()
export class JointProbabilityService {
  calculateJointProbabilityForTwoEvents({
    eventA,
    eventB,
    intersectionAB,
  }: TwoEventsJointProbabilityRequestDto): TwoEventsJointProbabilityResponseDto {
    // P(AUB) = P(A) + P(B) - P(A∩B)
    const probabilityOfAUnionB = new Big(eventA.probability)
      .plus(eventB.probability)
      .minus(intersectionAB.probability);

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
      probabilityOfAUnionB: ProbabilityUtils.normalize(probabilityOfAUnionB),
      probabilityOfAComplementIntersectionB: ProbabilityUtils.normalize(
        probabilityOfAComplementIntersectionB,
      ),
      probabilityOfAIntersectionBComplement: ProbabilityUtils.normalize(
        probabilityOfAIntersectionBComplement,
      ),
      probabilityOfComplementsSum: ProbabilityUtils.normalize(
        probabilityOfComplementsIntersectionSum,
      ),
    };
  }

  // TODO: Add same information as `calculateJointProbabilityForTwoEvents` for each intersection
  calculateJointProbabilityForThreeEvents({
    eventA,
    eventB,
    eventC,
    intersectionAB,
    intersectionAC,
    intersectionBC,
    intersectionABC,
  }: ThreeEventsJointProbabilityUnionRequestDto) {
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

    const normalizedProbability = ProbabilityUtils.normalize(probability);

    return normalizedProbability;
  }
}
